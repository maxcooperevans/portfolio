import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Max | Portfolio",
  description: "Personal portfolio — projects and work by Max.",
};

// Reads localStorage before React hydrates to avoid a flash of the wrong theme
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
