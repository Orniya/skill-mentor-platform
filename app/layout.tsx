import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Skill Mentor | Personalized Tech Stack & Learning Roadmaps",
  description:
    "Get personalized tech stack recommendations and detailed learning roadmaps tailored to your experience level and goals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
