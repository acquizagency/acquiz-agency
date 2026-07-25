import type { Metadata } from "next";
import { Onest, Inter } from "next/font/google";
import "./globals.css";

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Acquiz Agency — Publicité en ligne qui génère de vrais résultats",
  description:
    "Consultant freelance en acquisition digitale : Meta Ads, Google Ads, TikTok Ads, LinkedIn Ads. Audit gratuit et sans engagement.",
  robots: "noindex, nofollow",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${onest.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
