import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Max | Portfolio",
  description: "Personal portfolio — projects and work by Max.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
