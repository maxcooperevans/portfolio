"use client";

import { useState } from "react";
import type { LucideIcon } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  icon: LucideIcon;
  reason: string;
}

export default function ProjectCard({
  title,
  description,
  href,
  icon: Icon,
  reason,
}: ProjectCardProps) {
  const [open, setOpen] = useState(false);

  const body = (
    <div className="flex flex-col gap-4 p-5 flex-1">
      {/* Icon square — uniform accent tint for all projects */}
      <div className="w-7 h-7 rounded-md bg-accent-tint text-accent flex items-center justify-center flex-shrink-0">
        <Icon size={15} strokeWidth={2} />
      </div>

      {/* Text */}
      <div className="flex-1 flex flex-col gap-1.5">
        <h3
          className={`font-medium text-[15px] text-heading transition-colors duration-150${
            href ? " group-hover:text-accent" : ""
          }`}
        >
          {title}
        </h3>
        <p className="text-muted text-[13px] leading-relaxed">{description}</p>
      </div>

      {/* View link */}
      {href && (
        <span className="text-accent text-[13px] font-medium mt-auto">
          View project →
        </span>
      )}
    </div>
  );

  return (
    <div className="flex flex-col rounded-xl border border-edge bg-card transition-all duration-150 hover:border-accent hover:-translate-y-px hover:shadow-sm">
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col flex-1"
        >
          {body}
        </a>
      ) : (
        <div className="flex flex-col flex-1">{body}</div>
      )}

      {/* Why I built this — behaviour unchanged */}
      <div className="border-t border-edge">
        <button
          onClick={() => setOpen((o) => !o)}
          className="w-full flex items-center justify-between px-5 py-3 text-xs text-muted hover:text-heading transition-colors"
        >
          <span>Why I built this</span>
          <span
            className="transition-transform duration-200"
            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          >
            ▾
          </span>
        </button>
        {open && (
          <div className="px-5 pb-4 text-[13px] text-muted leading-relaxed">
            {reason}
          </div>
        )}
      </div>
    </div>
  );
}
