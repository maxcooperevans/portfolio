export default function Nav({ onContact }: { onContact: () => void }) {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 border-b border-slate-800/60 backdrop-blur-md bg-[#0f0f13]/80">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-end">
        <button
          onClick={onContact}
          className="text-sm text-slate-400 hover:text-slate-200 transition-colors"
        >
          Get in touch
        </button>
      </div>
    </nav>
  );
}
