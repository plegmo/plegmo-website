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
  metadataBase: new URL("https://plegmo.com"),
  title: "Plegmo | The Intelligent CRM & Omnichannel Inbox for Travel Agencies",
  description:
    "Convert inquiries into booked trips faster. Unified WhatsApp, Instagram, and Messenger chat, smart lead pipelines, and demand intelligence built for travel and tourism companies.",
  keywords: ["travel crm", "tourism crm", "whatsapp for travel agencies", "egypt travel crm", "omnichannel travel inbox"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased selection:bg-emerald-500/20 selection:text-emerald-400`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 font-sans">{children}</body>
    </html>
  );
}
