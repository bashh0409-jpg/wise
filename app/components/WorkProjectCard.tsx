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
        className="group"
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-black/5">
          {video ? (
            <video
              src={video}
              poster={image}
              autoPlay
              muted
              loop
              playsInline
              aria-label={alt}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : image ? (
            <Image
              src={image}
              alt={alt}
              loading="eager"
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-102"
            />
          ) : (
            <div className="h-full w-full bg-black/5" aria-label={alt} />
          )}
        </div>
        <div className="mt-2 flex flex-col text-xs uppercase tracking-tight">
          <span className="font-semibold">{title}</span>
          <span className="text-black/40 font-semibold">{category}</span>
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
      <span className="text-black font-semibold  tracking-tight">
        {index ?? ""}
      </span>
      <span className="font-semibold w-full flex-col tracking-tighter">
        {title}
        <span className="mt-1 block w-full  text-[#999] sm:hidden">
          {description} -<span className="ml-1">[ {category} ]</span>
        </span>
      </span>
      <span className="hidden font-semibold tracking-tighter text-[#999] sm:block">
        {description}
      </span>

      <span className="hidden text-[#999] tracking-tight font-semibold sm:block">
        {category}
      </span>
      <span className="text-right text-[#999] font-semibold tracking-tighter">
        {year}
      </span>
    </article>
  );
};

export default WorkProjectCard;
