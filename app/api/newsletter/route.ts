import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Basic RFC 5322-ish check — good enough to reject garbage before hitting the API
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface NewsletterRequestBody {
  email: string;
}

export async function POST(request: NextRequest) {
  let body: NewsletterRequestBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 },
    );
  }

  const email = body.email?.trim().toLowerCase();

  if (!email || !EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { error: "A valid email address is required" },
      { status: 422 },
    );
  }

  const audienceId = process.env.RESEND_AUDIENCE_ID;
  const from = process.env.RESEND_FROM;
  if (!audienceId || !from) {
    // Misconfiguration, not a client error — don't leak env details in the response
    console.error("Newsletter Resend configuration is incomplete");
    return NextResponse.json(
      { error: "Newsletter signup is temporarily unavailable" },
      { status: 500 },
    );
  }

  try {
    const { error } = await resend.contacts.create({
      email,
      audienceId,
      unsubscribed: false,
    });

    if (error) {
      // Resend returns a structured error rather than throwing in most cases
      console.error("Resend contact creation failed:", error);
      return NextResponse.json(
        { error: "Could not complete signup, please try again" },
        { status: 502 },
      );
    }

    const { error: emailError } = await resend.emails.send({
      from,
      to: email,
      subject: "You’re subscribed to The Wise Studio",
      text: [
        "Thanks for signing up to The Wise Studio newsletter.",
        "We’ll be in touch with studio news, selected work, and updates.",
        "",
        "The Wise Studio",
        "https://thewisestudio.xyz",
      ].join("\n"),
    });

    if (emailError) {
      console.error("Newsletter confirmation email failed:", emailError);
      return NextResponse.json(
        { error: "Signup saved, but confirmation email could not be sent" },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (err) {
    console.error("Unexpected error creating Resend contact:", err);
    return NextResponse.json(
      { error: "Something went wrong, please try again" },
      { status: 500 },
    );
  }
}
