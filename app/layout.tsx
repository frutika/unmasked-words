import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const SITE_URL = "https://unmaskedwords.com";
const OG_IMAGE = { url: "/og-image.png", width: 1200, height: 630, alt: "UnmaskedWords — Say it without a face" };

export const metadata: Metadata = {
  title: {
    default: "UnmaskedWords — Say it without a face",
    template: "%s | UnmaskedWords",
  },
  description:
    "A brutalist anonymous platform to post raw thoughts in real-time. No account. No trace. No filters. Just unmasked honesty.",
  keywords: [
    "anonymous posting", "unmasked thoughts", "anonymous confession",
    "brutalist social", "raw honesty", "anonymous platform", "speak without a face",
  ],
  applicationName: "UnmaskedWords",
  metadataBase: new URL(SITE_URL),
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
    description: "Post your unmasked truth. No account required. No trace left behind. No filters. Just raw, anonymous honesty in real time.",
    url: SITE_URL,
    siteName: "UnmaskedWords",
    type: "website",
    locale: "en_US",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "UnmaskedWords — Say it without a face",
    description: "Post your unmasked truth. No account required. No trace left behind. No filters. Just raw, anonymous honesty in real time.",
    images: [OG_IMAGE.url],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "UnmaskedWords",
    url: SITE_URL,
    description: "A brutalist anonymous platform to post raw thoughts in real-time. No account. No trace. No filters.",
    inLanguage: "en-US",
  },
  {
    "@context": "https://schema.org",
    "@type": "DiscussionForum",
    name: "UnmaskedWords",
    url: SITE_URL,
    description: "Anonymous discussion forum for raw, unfiltered thoughts. No account. No trace. No filters.",
    inLanguage: "en-US",
    isPartOf: { "@type": "WebSite", name: "UnmaskedWords", url: SITE_URL },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "UnmaskedWords",
    url: SITE_URL,
    description: "A brutalist anonymous platform to post raw thoughts in real-time. No account. No trace. No filters.",
    applicationCategory: "SocialNetworkingApplication",
    operatingSystem: "All",
    inLanguage: "en-US",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList: [
      "Anonymous posting — no account required",
      "Mirror Mode — AI reflection of your thoughts",
      "The Black Box — ephemeral posts that vanish in 24h",
      "Anonymous Duel — two strangers, one question",
      "Deep Threads — themed emotional voids",
    ],
    publisher: { "@type": "Organization", name: "UnmaskedWords", url: SITE_URL },
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistMono.variable} h-full`}>
      <body className="min-h-full bg-[#0a0a0a] text-[#f0f0f0]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          key="json-ld-root"
        />
        {children}
      </body>
    </html>
  );
}
