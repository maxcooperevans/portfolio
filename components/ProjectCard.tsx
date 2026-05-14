interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href: string;
  icon: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  href,
  icon,
}: ProjectCardProps) {
  return (
    <a
      href={href}
      className="group flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-200 card-glow hover:-translate-y-0.5"
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
  );
}
