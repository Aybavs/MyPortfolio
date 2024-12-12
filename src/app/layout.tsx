import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

// Importing Google Fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

// Metadata for the application
export const metadata: Metadata = {
  title: "My Portfolio",
  description: "A portfolio website crafted with creativity and code.",
  authors: [{ name: "Frontend Tribe", url: "https://frontendtribe.com" }],
  keywords: ["Portfolio", "Frontend Development", "Web Design"],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gray-900 text-white antialiased">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "font-sans flex flex-col min-h-screen"
        )}
      >
        {children}
      </body>
    </html>
  );
}
