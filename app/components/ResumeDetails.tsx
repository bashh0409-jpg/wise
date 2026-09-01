const clients = [
  "Tallow (TL-101-WISE)",
  "Rhode (RD-102-WISE)",
  "Vanta (VN-103-WISE)",
  "Kunye (KE-104-WISE)",
  "Melabody (MB-105-WISE)",
  "Honorable (HB-106-WISE)",
  "Redline (RL-107-WISE)",
  "Just Do It (JDI-145-WISE))",
  "Ilia (IL-108-WISE)",
  "eWay (EW-109-WISE)",
  "CCUS (CC-114-WISE)",
  "UNNA (UN-110-WISE)",
  "Dua (DUA-111-WISE)",
  "Fur (FR-112-WISE)",
];

const talks = [
  "Porsche, Germany",
  "Vanta, Cape Town",
  "Visionary Forum, Johannesburg",
  "Design Futures Collective, Sandton",
  "WestSchool of Arts, Durban",
  "Harbor Institute of Design, Providence",
  "MakeLab, Durban",
  "Signal Festival",
];

interface Experience {
  years: string;
  role: string;
  company: string;
}

const experiences: Experience[] = [
  {
    years: "2025-20__",
    role: "Founder, Software Engineer",
    company: "Wise Studios, Woodlands",
  },
  {
    years: "2024-2025",
    role: "Software Engineer",
    company: "Wish, Sandton",
  },
  {
    years: "2023-2024",
    role: "Software Engineer",
    company: "Evalasting, Cape Town",
  },
  {
    years: "2021-2023",
    role: "Software Engineer",
    company: "Bash (Foshini), Sandton",
  },
];

export function ResumeDetails() {
  return (
    <>
      <div className="mt-10 grid w-full grid-cols-1 gap-8 sm:grid-cols-2">
        <div className="flex flex-col text-sm">
          <span className="mb-3 font-medium tracking-tight text-[#999]">
            Selected Clients
          </span>
          {/* columns-2 on wider screens keeps the list from towering over the "Talks" column beside it */}
          <span className="columns-1 gap-6 ml-8 font-semibold tracking-tighter ">
            {clients.map((client) => (
              <span key={client} className="block break-inside-avoid py-0.5">
                {client}
              </span>
            ))}
          </span>
        </div>

        <div className="flex flex-col text-sm">
          <span className="mb-3 font-medium tracking-tight text-[#999]">
            Talks and workshops
          </span>
          <span className="flex flex-col gap-1 ml-8 font-semibold tracking-tighter">
            {talks.map((talk) => (
              <span key={talk}>{talk}</span>
            ))}
          </span>
        </div>
      </div>

      <div className="mt-10 grid w-full grid-cols-1 gap-6">
        <div className="flex flex-col text-sm">
          <span className="mb-3 font-medium tracking-tight text-[#999]">
            Work Experiences
          </span>
          <div className="flex flex-col gap-3 font-semibold tracking-tighter">
            {experiences.map((exp) => (
              // sm:w-28 on the year gives a fixed-width label column so roles align on desktop,
              // while stacking on mobile avoids squeezing both onto one cramped line
              <div
                key={exp.years}
                className="flex flex-col ml-8 gap-0.5  sm:gap-4"
              >
                <span className="text-[#999] sm:w-28 sm:shrink-0">
                  {exp.years}
                </span>
                <span className="ml-8">
                  {exp.company} — {exp.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
