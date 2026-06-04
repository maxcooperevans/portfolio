interface NavProps {
  onContactClick: () => void;
  contactOpen: boolean;
}

export default function Nav({ onContactClick, contactOpen }: NavProps) {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 border-b border-slate-700/50 backdrop-blur-md bg-[#0F172A]/90">
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="text-slate-100 font-semibold text-sm tracking-tight">
          Max Cooper Evans
        </span>
        <button
          onClick={onContactClick}
          className="px-4 py-1.5 rounded-full border border-slate-600 text-slate-300 text-sm font-medium hover:border-blue-400 hover:text-blue-400 transition-colors"
        >
          {contactOpen ? "Close" : "Get in touch"}
        </button>
      </div>
    </nav>
  );
}
