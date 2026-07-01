import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-bricolage",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-instrument",
  display: "swap",
});

const SITE = "https://povinpuglia.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "povinpuglia — Let's live in Puglia",
  description:
    "Vita normale in Puglia, ripresa dal vivo. POV senza copione, sottotitoli in inglese. Normal life in Puglia, filmed first-person — Ostuni, Bari, Salento. Follow on Instagram, TikTok and YouTube.",
  keywords: [
    "Puglia",
    "povinpuglia",
    "POV Puglia",
    "life in Puglia",
    "Puglia travel",
    "Ostuni",
    "Bari",
    "Salento",
    "Puglia vlog",
    "learn Italian",
    "Italy first person",
  ],
  authors: [{ name: "povinpuglia", url: SITE }],
  creator: "povinpuglia",
  alternates: { canonical: SITE },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "povinpuglia",
    title: "povinpuglia — Let's live in Puglia",
    description:
      "Normal life in Puglia, filmed first-person. No script, no voiceover, English subtitles.",
    locale: "it_IT",
    alternateLocale: ["en_US"],
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "povinpuglia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "povinpuglia — Let's live in Puglia",
    description:
      "Normal life in Puglia, filmed first-person. No script, no voiceover, English subtitles.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${SITE}/#profilepage`,
      url: SITE,
      name: "povinpuglia",
      inLanguage: "it-IT",
      mainEntity: { "@id": `${SITE}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${SITE}/#person`,
      name: "povinpuglia",
      alternateName: "Poving Puglia",
      description:
        "Vita normale in Puglia ripresa in prima persona, con sottotitoli in inglese.",
      email: "mailto:hello@povinpuglia.com",
      url: SITE,
      knowsLanguage: ["it", "en"],
      sameAs: [
        "https://www.instagram.com/povinpuglia/",
        "https://www.tiktok.com/@povinpuglia",
        "https://www.youtube.com/@povinpuglia",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: "povinpuglia",
      inLanguage: ["it-IT", "en"],
      publisher: { "@id": `${SITE}/#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={`${bricolage.variable} ${instrument.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
