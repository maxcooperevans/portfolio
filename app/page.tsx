"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import Nav from "@/components/Nav";
import {
  FileText,
  Building2,
  Briefcase,
  Puzzle,
  BookOpen,
  Target,
} from "lucide-react";

const featured = [
  {
    title: "RaiseScout",
    description:
      "An investor-fit tool that discovers, scores, and ranks VCs against a founder's raise, with source-cited evidence on every claim to keep it grounded rather than hallucinated.",
    tags: ["AI", "Next.js"],
    href: "https://www.raise.maxcooperevans.com",
    icon: Target,
    reason: "Fundraising is time-consuming enough without spending hours manually researching whether each investor is even a fit.",
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
    title: "Investment Memo Generator",
    description:
      "V2 of the briefing tool, giving more in-depth analytical insights and a comparison tool.",
    tags: ["AI", "Next.js"],
    href: "https://www.memo.maxcooperevans.com/",
    icon: FileText,
    reason: "I wanted to take a tool I'd made and improve it.",
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
];

const forFun = [
  {
    title: "Goodreads Book Recommender",
    description:
      "Input your Goodreads data and get personalised book recommendations.",
    tags: ["Goodreads", "Python"],
    href: "https://goodreadsbookrecommender.maxcooperevans.com",
    icon: BookOpen,
    reason: "To have a better way of picking my next novel.",
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
];

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"tools" | "forFun">("tools");

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

        {/* Tabs */}
        <section id="projects">
          <div className="flex items-center gap-0 border-b border-edge mb-8">
            {(["tools", "forFun"] as const).map((tab) => {
              const label = tab === "tools" ? "Tools" : "For Fun";
              const active = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2.5 text-sm font-medium transition-colors relative -mb-px ${
                    active
                      ? "text-accent border-b-2 border-accent"
                      : "text-muted hover:text-heading"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            {(activeTab === "tools" ? featured : forFun).map((project) => (
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
