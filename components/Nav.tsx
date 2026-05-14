export default function Nav() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 border-b border-slate-800/60 backdrop-blur-md bg-[#0f0f13]/80">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="text-slate-200 font-semibold tracking-tight">max.dev</span>
        <div className="flex items-center gap-6 text-sm text-slate-400">
          <a href="#projects" className="hover:text-slate-200 transition-colors">
            Projects
          </a>
          <a
            href="mailto:hello@example.com"
            className="hover:text-slate-200 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
