"use client";

import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href: string;
  icon: string;
  reason: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  href,
  icon,
  reason,
}: ProjectCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/50 transition-all duration-200 card-glow">
      <a
        href={href}
        className="group flex flex-col gap-4 p-6 hover:-translate-y-0.5 transition-transform duration-200"
      >
        {/* Icon badge */}
        <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-xl">
          {icon}
        </div>

        {/* Text */}
        <div className="flex-1">
          <h3 className="text-slate-100 font-semibold text-base mb-2 group-hover:text-indigo-300 transition-colors">
            {title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-400 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Arrow */}
        <div className="text-slate-600 text-sm group-hover:text-indigo-400 transition-colors self-end">
          View project →
        </div>
      </a>

      {/* Why I built this */}
      <div className="border-t border-slate-800">
        <button
          onClick={() => setOpen((o) => !o)}
          className="w-full flex items-center justify-between px-6 py-3 text-xs text-slate-500 hover:text-slate-300 transition-colors"
        >
          <span>Why I built this</span>
          <span className="transition-transform duration-200" style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>
            ▾
          </span>
        </button>
        {open && (
          <div className="px-6 pb-4 text-sm text-slate-400 leading-relaxed">
            {reason}
          </div>
        )}
      </div>
    </div>
  );
}
