"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import Nav from "@/components/Nav";

const projects = [
  {
    title: "Company Briefing Tool",
    description:
      "Enter a company name and get an AI-powered briefing covering key facts, recent news, and business insights.",
    tags: ["AI", "Research", "Next.js"],
    href: "https://briefing.maxcooperevans.com",
    icon: "🏢",
    reason: "To make initial research more efficient.",
  },
  {
    title: "NYT Mini Crossword Time Tracker",
    description:
      "Tracking my NYT Mini crossword times and visualising my performance over time.",
    tags: ["Node.js", "Express", "Supabase"],
    href: "https://mini.tracker.maxcooperevans.com",
    icon: "✏️",
    reason: "Makes tracking my stats easier and more enjoyable.",
  },
  {
    title: "Logic Puzzle Game",
    description:
      "A browser-based formal logic game featuring procedurally generated formal logic questions.",
    tags: ["TypeScript", "React", "Game Dev"],
    href: "https://logic.maxcooperevans.com",
    icon: "🧩",
    reason: "Haven't done any formal logic since first year of undergrad, wanted to test myself.",
  },
  {
    title: "Goodreads Book Recommender",
    description:
      "Input your Goodreads data and get personalised book recommendations.",
    tags: ["Goodreads", "Python"],
    href: "https://goodreadsbookrecommender.maxcooperevans.com",
    icon: "📚",
    reason: "To have a better way of picking my next novel.",
  },
];

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />

      <main className="flex-1 max-w-4xl mx-auto w-full px-6 pt-32 pb-24">

        {/* Get in touch */}
        <div className="mb-10">
          <button
            onClick={() => setContactOpen((o) => !o)}
            className="px-5 py-2.5 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white text-sm font-medium transition-colors"
          >
            {contactOpen ? "Close" : "Get in touch"}
          </button>

          {contactOpen && (
            <div className="mt-4 p-6 rounded-2xl border border-slate-800 bg-slate-900/50 flex flex-col gap-3 max-w-sm">
              <a
                href="mailto:maxcooperevans@gmail.com"
                className="flex items-center gap-3 text-slate-300 hover:text-indigo-300 transition-colors text-sm"
              >
                <span className="text-lg">✉️</span>
                maxcooperevans@gmail.com
              </a>
              <a
                href="tel:+4407562649909"
                className="flex items-center gap-3 text-slate-300 hover:text-indigo-300 transition-colors text-sm"
              >
                <span className="text-lg">📞</span>
                +44 07562 649909
              </a>
              <a
                href="https://www.linkedin.com/in/max-cooper-evans-866992230"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-indigo-300 transition-colors text-sm"
              >
                <span className="text-lg">💼</span>
                linkedin.com/in/max-cooper-evans
              </a>
            </div>
          )}
        </div>

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

      <footer className="border-t border-slate-800 py-8 text-center text-slate-600 text-sm">
        <p>Built with Next.js &amp; Tailwind CSS &mdash; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
