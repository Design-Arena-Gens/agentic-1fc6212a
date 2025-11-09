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
  title: "Zephyr · AI Drone Delivery Prototype",
  description:
    "Mobile-first prototype for Zephyr, India’s first AI drone delivery platform focused on critical dispatch.",
  openGraph: {
    title: "Zephyr · AI Drone Delivery Prototype",
    description:
      "Experience the Zephyr mobile flight deck—onboarding, dispatch, emergency mode, and more.",
    type: "website",
    url: "https://agentic-1fc6212a.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zephyr · AI Drone Delivery Prototype",
    description:
      "Command India’s first AI drone delivery platform with emergency-first workflows.",
  },
  metadataBase: new URL("https://agentic-1fc6212a.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
