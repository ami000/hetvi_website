import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope, Great_Vibes } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK", "opsz"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} — English & Business Communication Coach`,
  description:
    "Live online English classes for adults — business communication, everyday fluency and one-on-one coaching, taught by a Cambridge CELTA-certified instructor who has taught learners from 20+ countries.",
  openGraph: {
    title: `${site.name} — English & Business Communication Coach`,
    description:
      "Find your voice in English. Live online classes in business communication and everyday fluency.",
    images: ["/classroom.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#fdf9f3",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable} ${greatVibes.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
