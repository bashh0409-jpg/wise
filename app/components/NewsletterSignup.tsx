"use client";

import { FormEvent, useState } from "react";

type SignupState = "idle" | "loading" | "success" | "error";

const NewsletterSignup = () => {
  const [state, setState] = useState<SignupState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setState("loading");
    setErrorMessage(null);

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(data.error ?? "Something went wrong");
        setState("error");
        return;
      }

      setState("success");
    } catch {
      setErrorMessage("Network error, please try again");
      setState("error");
    }
  };

  return (
    <div className="grid grid-cols-2 tracking-tighter md:grid-cols-3">
      <span className="font-semibold text-[#999]">Newsletter</span>
      <div className="col-span-1">
        {state === "success" ? (
          <p role="status" aria-live="polite" className="font-semibold">
            Successfully signed up.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <div className="flex items-center border-b border-[#999]">
              <input
                id="newsletter-email"
                name="email"
                type="email"
                required
                placeholder="Your email"
                autoComplete="email"
                disabled={state === "loading"}
                className="min-w-0 flex-1 bg-transparent py-1 font-semibold outline-none placeholder:text-[#999] disabled:opacity-50"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                disabled={state === "loading"}
                className="cursor-pointer px-1 py-1 font-semibold hover:text-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {state === "loading" ? "..." : "Join"}
              </button>
            </div>
            {state === "error" && errorMessage && (
              <p className="text-sm text-red-500">{errorMessage}</p>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default NewsletterSignup;
