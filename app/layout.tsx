import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// GeistSans already comes with its own variable (--font-geist-sans)

export const metadata: Metadata = {
  title: "Beezi — AI Teammate That Fits Right In",
  description:
    "Delegate the tedious work, accelerate delivery, improve code quality, and cut cost per feature by 45%",
  openGraph: {
    title: "Beezi — AI Teammate That Fits Right In",
    description:
      "Delegate the tedious work, accelerate delivery, improve code quality, and cut cost per feature by 45%",
    images: [
      {
        url: "https://beezi-landing-prod.azurewebsites.net/assets/og-preview.png",
        width: 1200,
        height: 630,
      },
    ],
    url: "https://beezi.ai",
    siteName: "Beezi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beezi — AI Teammate That Fits Right In",
    description:
      "Delegate the tedious work, accelerate delivery, improve code quality, and cut cost per feature by 45%",
    images: [
      "https://beezi-landing-prod.azurewebsites.net/assets/og-preview.png",
    ],
    site: "@beezi",
  },
  other: {
    "og:title": "Beezi — AI Teammate That Fits Right In",
    "og:description":
      "Delegate the tedious work, accelerate delivery, improve code quality, and cut cost per feature by 45%",
    "og:image": "/assets/og-preview.png",
    "og:url": "https://beezi.ai",
    "image:":
      "https://beezi-landing-prod.azurewebsites.net/assets/og-preview.png",
    url: "https://beezi.ai",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
