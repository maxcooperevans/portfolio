"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import Nav from "@/components/Nav";
import {
  FileText,
  Trophy,
  Building2,
  Briefcase,
  Clock,
  Puzzle,
  BookOpen,
} from "lucide-react";

const projects = [
  {
    title: "Investment Memo Generator",
    description:
      "V2 of the briefing tool, giving more in-depth analytical insights and a comparison tool.",
    tags: ["AI", "Next.js"],
    href: "https://www.memo.maxcooperevans.com/",
    icon: FileText,
    reason: "I wanted to take a tool I'd made and improve it.",
  },
  {
    title: "Basketball Simulator",
    description:
      "Attempt at a basketball simulator game with a user-created player.",
    tags: ["TypeScript", "React", "Game Dev"],
    href: "https://hoops.maxcooperevans.com/",
    icon: Trophy,
    reason: "Wanted to try making a fairly complex and varied game.",
  },
  {
    title: "Company Briefing Tool",
    description:
      "Enter a company name and get an AI-powered briefing covering key facts, recent news, and business insights.",
    tags: ["AI", "Research", "Next.js"],
    href: "https://briefing.maxcooperevans.com",
    icon: Building2,
    reason: "To make initial research more efficient.",
  },
  {
    title: "Job Board Scraper & Digest",
    description:
      "Scrapes job boards daily, uses the Claude API to score each role against my specific criteria, and sends a formatted email digest every morning via GitHub Actions.",
    tags: ["Claude API", "Python", "GitHub Actions"],
    icon: Briefcase,
    reason: "Tired of manually checking job boards and comparing them to my requirements.",
  },
  {
    title: "NYT Mini Crossword Time Tracker",
    description:
      "Tracking my NYT Mini crossword times and visualising my performance over time.",
    tags: ["Node.js", "Express", "Supabase"],
    href: "https://mini.tracker.maxcooperevans.com",
    icon: Clock,
    reason: "Makes tracking my stats easier and more enjoyable.",
  },
  {
    title: "Logic Puzzle Game",
    description:
      "A browser-based formal logic game featuring procedurally generated formal logic questions.",
    tags: ["TypeScript", "React", "Game Dev"],
    href: "https://logic.maxcooperevans.com",
    icon: Puzzle,
    reason: "Haven't done any formal logic since first year of undergrad, wanted to test myself.",
  },
  {
    title: "Goodreads Book Recommender",
    description:
      "Input your Goodreads data and get personalised book recommendations.",
    tags: ["Goodreads", "Python"],
    href: "https://goodreadsbookrecommender.maxcooperevans.com",
    icon: BookOpen,
    reason: "To have a better way of picking my next novel.",
  },
];

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Nav
        onContactClick={() => setContactOpen((o) => !o)}
        contactOpen={contactOpen}
      />

      <main className="flex-1 max-w-3xl mx-auto w-full px-6 pt-28 pb-24">

        {/* Hero */}
        <section className="mb-16">
          <p className="text-xs font-semibold tracking-widest text-accent uppercase mb-4">
            Portfolio
          </p>
          <h1 className="text-4xl font-bold text-heading tracking-tight mb-3">
            Things I&apos;ve built
          </h1>
          <p className="text-muted mb-8 text-base leading-relaxed">
            A selection of projects — some polished, some experiments.
          </p>
          <button
            onClick={() => setContactOpen((o) => !o)}
            className="px-5 py-2.5 rounded-lg border-[1.5px] border-accent text-accent text-sm font-medium hover:bg-accent-tint transition-colors"
          >
            {contactOpen ? "Close" : "Get in touch"}
          </button>

          {contactOpen && (
            <div className="mt-5 p-5 rounded-xl border border-edge bg-card flex flex-col gap-3 max-w-xs">
              <a
                href="mailto:maxcooperevans@gmail.com"
                className="flex items-center gap-3 text-muted hover:text-accent transition-colors text-sm"
              >
                <span>✉️</span>
                maxcooperevans@gmail.com
              </a>
              <a
                href="tel:+4407562649909"
                className="flex items-center gap-3 text-muted hover:text-accent transition-colors text-sm"
              >
                <span>📞</span>
                +44 07562 649909
              </a>
              <a
                href="https://www.linkedin.com/in/max-cooper-evans-866992230"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted hover:text-accent transition-colors text-sm"
              >
                <span>💼</span>
                linkedin.com/in/max-cooper-evans
              </a>
            </div>
          )}
        </section>

        {/* Projects */}
        <section id="projects">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-edge py-8 text-center text-muted text-sm">
        <p>Built with Next.js &amp; Tailwind CSS &mdash; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
