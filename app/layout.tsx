import type { Metadata } from "next";
import "./globals.css";

// metadataBase makes every relative URL in metadata (including the auto-generated
// og:image from opengraph-image.tsx) resolve to an absolute URL — required by
// LinkedIn, Slack, iMessage and other scrapers.
export const metadata: Metadata = {
  metadataBase: new URL("https://www.maxcooperevans.com"),
  title: "Max Cooper Evans — Portfolio",
  description:
    "A selection of projects I've built — from AI tools to games and trackers.",
  openGraph: {
    title: "Max Cooper Evans — Portfolio",
    description:
      "A selection of projects I've built — from AI tools to games and trackers.",
    url: "https://www.maxcooperevans.com",
    siteName: "Max Cooper Evans",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Max Cooper Evans — Portfolio",
    description:
      "A selection of projects I've built — from AI tools to games and trackers.",
  },
};

// Reads localStorage before React hydrates to prevent a flash of the wrong theme.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t)document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
