import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Terms of Use — The Rules of an Anonymous Space",
  description:
    "UnmaskedWords terms of use. Who runs the site, what you may and may not post, how moderation works, and what the AI features are.",
  keywords: ["unmaskedwords terms", "anonymous platform rules", "terms of use"],
  alternates: { canonical: "https://unmaskedwords.com/terms" },
  openGraph: {
    title: "Terms of Use | UnmaskedWords",
    description: "The rules of an anonymous space. Short, plain, and binding.",
    url: "https://unmaskedwords.com/terms",
    siteName: "UnmaskedWords",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "UnmaskedWords Terms of Use" }],
  },
};

const sections = [
  {
    id: "agreement",
    heading: "1. Agreement",
    body: `By using unmaskedwords.com — reading, posting, voting, or using any of its features — you agree to these terms. If you do not agree, do not use the site.

These terms work together with our privacy policy, which explains what little data is processed.`,
  },
  {
    id: "operator",
    heading: "2. Who runs this site",
    body: `UnmaskedWords is operated by LUMENTA LABS, obrt za računalne usluge, trgovinu i prijevoz robe, owner Denis Šehić, Bunarić V 6, 23234 Vir, Croatia (OIB 36229460035, MBO 99388324).

Contact: root@unmaskedwords.com`,
  },
  {
    id: "service",
    heading: "3. What the service is",
    body: `UnmaskedWords is a place to write thoughts anonymously. There are no accounts. Posts are published without any link to the person who wrote them.

— The feed, threads and topics hold posts that stay up until they are removed.
— Black Box thoughts disappear after 24 hours; a fragment may be kept anonymously as a "voice".
— Duel shows two anonymous answers side by side for others to vote on.
— Mirror and Creed are AI features (see section 7).

The service is free. We may change, pause or remove any feature at any time.`,
  },
  {
    id: "age",
    heading: "4. Who may use it",
    body: `You must be at least 16 years old to post on UnmaskedWords. Some posts deal with difficult subjects; reading them is at your own discretion.`,
  },
  {
    id: "rules",
    heading: "5. What you may not post",
    body: `Anonymity is not a licence to harm. Do not post:

— anything illegal, or anything that encourages or plans a crime;
— threats of violence against any person or group;
— names, photos, addresses, phone numbers or any other detail that identifies a real person other than yourself, or lets others find them;
— harassment, hate speech, or content that targets people for who they are;
— sexual content involving minors, of any kind;
— content that encourages or instructs self-harm or suicide;
— spam, advertising, links to scams, or automated submissions;
— material you do not have the right to share.

Write about your own experience. Leave other people unidentifiable.`,
  },
  {
    id: "content",
    heading: "6. Your words and what happens to them",
    body: `You keep whatever rights you have in what you write. By posting, you give us a free, worldwide, non-exclusive licence to store, display and reproduce it on UnmaskedWords and in link previews and shares of UnmaskedWords pages, for as long as it stays on the site.

Because there are no accounts, we cannot tell which posts are yours, and you cannot edit or delete a post yourself. Think before you publish. If you want a post removed, write to root@unmaskedwords.com with its link; we will act on reasonable requests.`,
  },
  {
    id: "ai",
    heading: "7. AI features",
    body: `Mirror and Creed send the text you type to our AI provider, Anthropic, to generate a response. That text is not saved in our database.

The responses are generated automatically. They can be wrong, strange or unhelpful, and they are not advice of any kind — not medical, psychological, legal or financial. Do not enter details that identify you or anyone else.`,
  },
  {
    id: "crisis",
    heading: "8. Not a crisis service",
    body: `UnmaskedWords is not therapy and is not monitored in real time. Nobody will see your post and come to help.

If you are in danger or thinking about ending your life, call your local emergency number (112 in the EU) or a crisis line in your country now.`,
  },
  {
    id: "moderation",
    heading: "9. Moderation and reporting",
    body: `We do not review posts before they appear, and we are not responsible for what users write. We may remove any post, at any time, without notice — especially if it breaks section 5.

To report illegal content or content that breaks these rules, write to root@unmaskedwords.com with the link and a short explanation of why it should be removed. We review reports and act on them without undue delay. This address is also our point of contact under the EU Digital Services Act.`,
  },
  {
    id: "newsletter",
    heading: "10. Newsletter",
    body: `The newsletter is optional. You can unsubscribe at any time through the link in every email.`,
  },
  {
    id: "liability",
    heading: "11. No guarantees",
    body: `The site is provided as it is, without any promise that it will always be available, error-free, or that posts will be kept. Posts express the views of their anonymous authors, not ours.

To the extent the law allows, we are not liable for indirect loss or for damage arising from content posted by users or from the use of AI responses. Nothing in these terms limits liability for intent or gross negligence, or any right you have under mandatory consumer law.`,
  },
  {
    id: "changes",
    heading: "12. Changes",
    body: `We may update these terms. The date below changes when we do. Continuing to use the site after a change means you accept the new version.`,
  },
  {
    id: "law",
    heading: "13. Governing law",
    body: `These terms are governed by the law of the Republic of Croatia. Disputes go to the competent court in Croatia, unless mandatory consumer law gives you the right to bring proceedings where you live.

Last updated: October 2026`,
  },
];

export default function TermsPage() {
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
            // terms of use
          </p>
          <h1
            className="font-mono font-black text-[#f0f0f0] leading-none mb-16"
            style={{ fontSize: "clamp(2rem, 7vw, 3.5rem)", letterSpacing: "-0.03em" }}
          >
            SPEAK FREELY.<br />
            <span className="text-[#ff3c00]">HARM NO ONE.</span>
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

          <p className="font-mono text-[#555555] text-xs mt-4">
            See also: <Link href="/privacy" className="hover:text-[#ff3c00] transition-colors">privacy policy</Link>
          </p>

        </div>
      </article>

      <SiteFooter />
    </main>
  );
}
