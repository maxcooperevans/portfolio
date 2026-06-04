"use client";

import { useState } from "react";
import type { LucideIcon } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  reason: string;
}

export default function ProjectCard({
  title,
  description,
  href,
  icon: Icon,
  iconBg,
  iconColor,
  reason,
}: ProjectCardProps) {
  const [open, setOpen] = useState(false);

  const cardBody = (
    <div className="flex flex-col gap-4 p-5 flex-1">
      {/* Icon square */}
      <div
        className={`w-7 h-7 rounded-md flex items-center justify-center ${iconBg} ${iconColor}`}
      >
        <Icon size={15} strokeWidth={2} />
      </div>

      {/* Text */}
      <div className="flex-1">
        <h3
          className={`font-medium text-[15px] mb-1.5 transition-colors ${
            href ? "text-slate-100 group-hover:text-blue-400" : "text-slate-100"
          }`}
        >
          {title}
        </h3>
        <p className="text-slate-400 text-[13px] leading-relaxed">{description}</p>
      </div>

      {/* Link or spacer */}
      {href && (
        <div className="text-blue-400 text-[13px] font-medium group-hover:text-blue-300 transition-colors">
          View project →
        </div>
      )}
    </div>
  );

  return (
    <div className="flex flex-col rounded-xl border border-slate-700/60 bg-slate-800/40 hover:border-slate-600/80 hover:bg-slate-800/60 transition-all duration-200">
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="group flex flex-col flex-1">
          {cardBody}
        </a>
      ) : (
        <div className="flex flex-col flex-1">{cardBody}</div>
      )}

      {/* Why I built this */}
      <div className="border-t border-slate-700/60">
        <button
          onClick={() => setOpen((o) => !o)}
          className="w-full flex items-center justify-between px-5 py-3 text-xs text-slate-500 hover:text-slate-300 transition-colors"
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
          <div className="px-5 pb-4 text-[13px] text-slate-400 leading-relaxed">
            {reason}
          </div>
        )}
      </div>
    </div>
  );
}
