import ProjectCard from "@/components/ProjectCard";
import Nav from "@/components/Nav";

const projects = [
  {
    title: "Book Recommendation Chatbot",
    description:
      "An AI-powered chatbot that learns your reading taste and surfaces books you'll actually finish. Built with a retrieval-augmented pipeline and a conversational interface.",
    tags: ["AI", "NLP", "Python"],
    href: "#",
    icon: "📚",
  },
  {
    title: "Logic Puzzle Game",
    description:
      "A browser-based puzzle game featuring procedurally generated logic grids. Tracks streaks, hints used, and solve time with a clean, distraction-free UI.",
    tags: ["TypeScript", "React", "Game Dev"],
    href: "#",
    icon: "🧩",
  },
  {
    title: "Market Mapping Tool",
    description:
      "An interactive visualisation that maps competitive landscapes from structured data. Drag-to-explore canvas with filtering, clustering, and export to PNG.",
    tags: ["Data Viz", "D3.js", "Next.js"],
    href: "#",
    icon: "📊",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />

      {/* Hero */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 pt-32 pb-24">
        <section className="mb-24">
          <p className="text-indigo-400 font-medium tracking-widest text-sm uppercase mb-4">
            Hey, I&apos;m
          </p>
          <h1 className="text-6xl font-bold tracking-tight mb-6">
            <span className="gradient-text">Max</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
            I build things that sit at the intersection of{" "}
            <span className="text-slate-200 font-medium">data</span>,{" "}
            <span className="text-slate-200 font-medium">AI</span>, and{" "}
            <span className="text-slate-200 font-medium">thoughtful design</span>.
            Currently exploring how language models can make everyday software
            feel more human — one project at a time.
          </p>

          <div className="flex gap-4 mt-10">
            <a
              href="mailto:hello@example.com"
              className="px-5 py-2.5 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white text-sm font-medium transition-colors"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white text-sm font-medium transition-colors"
            >
              See projects ↓
            </a>
          </div>
        </section>

        {/* Projects */}
        <section id="projects">
          <h2 className="text-2xl font-semibold text-slate-200 mb-2">Projects</h2>
          <p className="text-slate-500 text-sm mb-8">
            A selection of things I&apos;ve built or am actively working on.
          </p>

          <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-600 text-sm">
        <p>Built with Next.js &amp; Tailwind CSS &mdash; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
