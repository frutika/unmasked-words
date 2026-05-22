import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Policy — What We Collect and What We Don't",
  description:
    "UnmaskedWords privacy policy. No accounts, no tracking, no personal data collected. What we store and why.",
  keywords: ["unmaskedwords privacy policy", "anonymous platform privacy", "no tracking privacy"],
  alternates: { canonical: "https://unmaskedwords.com/privacy" },
  openGraph: {
    title: "Privacy Policy | UnmaskedWords",
    description: "No accounts. No tracking. No personal data. What we store and why.",
    url: "https://unmaskedwords.com/privacy",
    siteName: "UnmaskedWords",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "UnmaskedWords Privacy Policy" }],
  },
};

const sections = [
  {
    id: "overview",
    heading: "The short version",
    body: `UnmaskedWords does not collect personal data. There are no user accounts, no sign-up flows, and no mechanism by which a post can be traced back to the person who wrote it. The platform is designed to be anonymous by default — not as a feature, but as its fundamental architecture.

What follows is the complete technical account of what data is processed and why.`,
  },
  {
    id: "posts",
    heading: "What happens when you post",
    body: `When you submit a post, the following is stored in our database:

— The text content of the post (up to 500 characters)
— An optional alias (a name you choose, which can be random or invented — no verification is performed)
— A timestamp of when the post was submitted

Nothing else is stored with the post. No IP address. No device fingerprint. No browser identifier. No cookie is written to identify you as the author.

The alias is not linked to any account. You can use a different alias every time. You can leave it blank. There is no way to aggregate posts by author.`,
  },
  {
    id: "cookies",
    heading: "Cookies and tracking",
    body: `UnmaskedWords does not use tracking cookies. No third-party analytics scripts (Google Analytics, Meta Pixel, etc.) are loaded on this site.

Technical cookies may be set by the Next.js framework for session management purposes. These contain no personally identifiable information and are not used for advertising or behavioral tracking.

No data is sold to or shared with third parties for marketing purposes.`,
  },
  {
    id: "newsletter",
    heading: "Newsletter",
    body: `If you subscribe to the newsletter, your email address is stored and used only to send the newsletter. It is not shared with third parties. You can unsubscribe at any time via the unsubscribe link included in every email.

Email addresses are stored on our server and processed by no external email marketing service. They are not aggregated with post data — there is no way to link a newsletter subscriber to any post.`,
  },
  {
    id: "server",
    heading: "Server logs",
    body: `Our web server (Nginx) generates access logs that include IP addresses as part of standard HTTP request logging. These logs are used only for server security and troubleshooting purposes. They are not analyzed for behavioral patterns and are rotated regularly.

These logs are not connected to post content in any way.`,
  },
  {
    id: "third-party",
    heading: "Third-party services",
    body: `The GoMining hashrate widget displayed in the header makes a request to an external API to display Bitcoin network hashrate data. This is a read-only data display with no user data transmitted.

Individual post pages generate Open Graph metadata for social sharing. When a post link is shared on social platforms, those platforms may fetch the URL to generate a preview. This is standard web behavior and involves no data we transmit.`,
  },
  {
    id: "rights",
    heading: "Your rights",
    body: `Because no personal data is collected with posts, there is no personal data to access, correct, or delete on your behalf. We cannot identify which posts belong to you.

If you subscribed to the newsletter and wish to have your email removed, contact us at root@unmaskedwords.com and we will remove it promptly.

For any other privacy-related questions, contact: root@unmaskedwords.com`,
  },
  {
    id: "changes",
    heading: "Changes to this policy",
    body: `If this policy changes materially, we will update this page. The architecture of this platform — no accounts, no personal data collection — is not subject to change as a matter of design principle.

Last updated: May 2026`,
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] flex flex-col">
      <SiteHeader
        right={
          <Link
            href="/"
            className="font-mono text-[#888888] text-xs tracking-widest uppercase hover:text-[#f0f0f0] transition-colors"
          >
            ← feed
          </Link>
        }
      />

      <article className="flex-1 px-6 py-14">
        <div className="max-w-xl mx-auto">

          <p className="font-mono text-[#888888] text-xs tracking-widest uppercase mb-6">
            // privacy policy
          </p>
          <h1
            className="font-mono font-black text-[#f0f0f0] leading-none mb-16"
            style={{ fontSize: "clamp(2rem, 7vw, 3.5rem)", letterSpacing: "-0.03em" }}
          >
            WHAT WE COLLECT.<br />
            <span className="text-[#ff3c00]">ALMOST NOTHING.</span>
          </h1>

          <div className="flex flex-col">
            {sections.map((section) => (
              <div key={section.id} id={section.id} className="border-t border-[#1a1a1a] pt-8 pb-8">
                <h2 className="font-mono font-black text-[#f0f0f0] text-sm mb-4 tracking-tight">
                  {section.heading}
                </h2>
                <div className="space-y-3">
                  {section.body.split("\n\n").map((paragraph, i) => (
                    <p key={i} className="font-mono text-[#888888] text-sm leading-relaxed whitespace-pre-line">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </article>

      <SiteFooter />
    </main>
  );
}
