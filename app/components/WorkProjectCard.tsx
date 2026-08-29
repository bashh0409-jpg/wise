import React from "react";
import Image from "next/image";

export interface WorkProject {
  title: string;
  description: string;
  category: string;
  status: string;
  year: string;
  image?: string;
  video?: string;
  alt: string;
  index?: number;
  view?: "grid" | "list";
  onHover?: (project: WorkProject, element: HTMLElement) => void;
  onLeave?: () => void;
}

const WorkProjectCard = (project: WorkProject) => {
  const {
    title,
    description,
    category,
    year,
    image,
    video,
    alt,
    index,
    onHover,
    onLeave,
    view = "list",
  } = project;

  if (view === "grid") {
    return (
      <article
        onMouseEnter={(event) => onHover?.(project, event.currentTarget)}
        onMouseLeave={onLeave}
        className="group cursor-pointer mb-4"
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-black/5">
          {/* Centered loading indicator over the media area */}
          <span
            aria-hidden="true"
            className="absolute inset-0 -z-1 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              fill="#999"
              className="animate-spin"
            >
              <path d="M332.55-129.9q-69.29-29.9-121.02-81.63-51.73-51.73-81.63-121.02-29.9-69.3-29.9-147.8 0-78.51 29.96-147.5 29.96-69 81.58-120.61 51.61-51.62 121.04-81.58T480-860q12.75 0 21.37 8.63 8.63 8.63 8.63 21.38 0 12.76-8.63 21.37Q492.75-800 480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-12.77 8.63-21.38 8.63-8.62 21.38-8.62 12.76 0 21.37 8.63Q860-492.75 860-480q0 77.99-29.96 147.42-29.96 69.43-81.58 121.04-51.61 51.62-120.61 81.58Q558.86-100 480.35-100q-78.5 0-147.8-29.9Z" />
            </svg>
          </span>

          {video ? (
            <video
              src={video}
              poster={image}
              autoPlay
              muted
              loop
              playsInline
              aria-label={alt}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-101"
            />
          ) : image ? (
            <Image
              src={image}
              alt={alt}
              loading="eager"
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-101"
            />
          ) : (
            <div className="h-full w-full bg-black/5" aria-label={alt} />
          )}
        </div>

        <div className="mt-2 flex flex-col text-xs uppercase tracking-tight">
          <span className="font-semibold">{title}</span>
          <span className="font-semibold text-black/40">{category}</span>
        </div>
      </article>
    );
  }

  return (
    <article
      onMouseEnter={(event) => onHover?.(project, event.currentTarget)}
      onMouseLeave={onLeave}
      className="group grid grid-cols-[2rem_minmax(0,1fr)_4rem] items-center gap-3 border-t border-black/10 py-6 text-sm transition-colors hover:bg-black/[0.03] sm:grid-cols-[2rem_minmax(7rem,1fr)_minmax(12rem,2fr)_minmax(8rem,1fr)_4rem] sm:gap-6"
    >
      <span className="font-semibold tracking-tight text-black">
        {index ?? ""}
      </span>

      <span className="flex w-full flex-col font-semibold tracking-tighter">
        {title}

        <span className="mt-1 block w-full text-[#999] sm:hidden">
          {description} - <span className="ml-1">[ {category} ]</span>
        </span>
      </span>

      <span className="hidden font-semibold tracking-tighter text-[#999] sm:block">
        {description}
      </span>

      <span className="hidden font-semibold tracking-tight text-[#999] sm:block">
        {category}
      </span>

      <span className="text-right font-semibold  tracking-tighter text-[#999]">
        {year}
      </span>
    </article>
  );
};

export default WorkProjectCard;
