import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Santu Pramanik | Full-Stack Developer & AI Specialist",
  description: "Personal portfolio of Santu Pramanik. MCA student, Full-Stack MERN & Next.js Developer, TypeScript enthusiast, and AI workflow specialist based in Bengaluru.",
  keywords: ["Santu Pramanik", "Full Stack Developer", "MERN Stack", "TypeScript", "Next.js", "AI Integration", "HireIQ", "CogniSketch", "Presidency College MCA"],
  authors: [{ name: "Santu Pramanik" }],
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: "Santu Pramanik | Full-Stack Developer & AI Specialist",
    description: "Explore Santu Pramanik's full-stack applications, AI integrations, LeetCode achievements, and engineering background.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#05070e] text-slate-100 font-sans">{children}</body>
    </html>
  );
}
