import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: { icon: "/favicon.svg" },
  title: "CodeBench - The AI-Native Development Workbench",
  description:
    "Orchestrate multiple AI coding sessions across repositories. Spatial canvas, real-time streaming, Git integration, and parallel development — all in one workbench.",
  keywords: [
    "AI coding",
    "development workbench",
    "Claude",
    "code generation",
    "parallel development",
    "AI IDE",
  ],
  openGraph: {
    title: "CodeBench - The AI-Native Development Workbench",
    description:
      "Orchestrate multiple AI coding sessions across repositories. The command center for AI-powered development.",
    url: "https://codebench.ai",
    siteName: "CodeBench",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeBench - The AI-Native Development Workbench",
    description:
      "Orchestrate multiple AI coding sessions across repositories.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
