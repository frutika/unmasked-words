import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import HashrateWidget from "@/components/HashrateWidget";

export const metadata: Metadata = {
  title: "UnmaskedWords — Say it without a face",
  description:
    "A brutalist anonymous space to speak without filters. Post your unmasked thoughts in real-time.",
  keywords: ["anonymous", "unmasked", "thoughts", "brutalist", "feed"],
  metadataBase: new URL("https://unmaskedwords.com"),
  verification: {
    google: "qkZIkfLgt4NrWHByRjxzwa7EKH5Bn2hUuZuwLxaif3M",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "UnmaskedWords — Say it without a face",
    description: "Post unmasked thoughts. No account. No trace.",
    url: "https://unmaskedwords.com",
    siteName: "UnmaskedWords",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "UnmaskedWords",
    description: "Say it without a face.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistMono.variable} h-full`}>
      <body className="min-h-full bg-[#0a0a0a] text-[#f0f0f0]">
        {children}
        <HashrateWidget />
      </body>
    </html>
  );
}
