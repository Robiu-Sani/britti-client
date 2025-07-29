import type { Metadata } from "next";
import { Geist, Geist_Mono, Tiro_Bangla } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import HomeNavBar from "./_default/HomeNavBar";
import HomeFooter from "./_default/HomeFooter";
import AosWrapper from "./AosWrapper";
import NextTopLoader from "nextjs-toploader";

// ✅ Fonts setup
const tiroBangla = Tiro_Bangla({
  weight: "400",
  subsets: ["latin", "bengali"],
  variable: "--font-tiro-bangla",
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

// ✅ SEO Meta Data
export const metadata: Metadata = {
  title:
    "বাংলাদেশ প্রাইভেট মাদ্রাসা ওয়েলফেয়ার এসোসিয়েশন | Madrasha Association of Bangladesh",
  description:
    "আলেম সমাজের ঐক্য ও মাদ্রাসার উন্নয়নই আমাদের লক্ষ্য। মেধাবী শিক্ষার্থীদের বৃত্তি, শিক্ষক প্রশিক্ষণ এবং দ্বীনি শিক্ষার পরিবেশ উন্নয়নে কাজ করছি।",
  keywords: [
    "বাংলাদেশ মাদ্রাসা",
    "মাদ্রাসা বৃত্তি",
    "মাদ্রাসা এসোসিয়েশন",
    "Islamic education",
    "Bangladesh Madrasha Association",
    "Scholarship madrasha",
    "Teacher training",
    "দ্বীনি শিক্ষা",
    "আলেম ঐক্য",
    "হিফজুল কুরআন প্রতিযোগিতা",
    "ইসলামী সংস্কৃতি",
    "Bangla Madrasha Welfare",
    "madrasah development",
    "madrasah training program",
    "private madrasa",
  ],
  authors: [{ name: "Bangladesh Madrasha Association" }],
  openGraph: {
    type: "website",
    locale: "bn_BD",
    url: "https://madrasha-shhociation-britti.vercel.app",
    title: "বাংলাদেশ প্রাইভেট মাদ্রাসা ওয়েলফেয়ার এসোসিয়েশন",
    description:
      "আলেম সমাজের ঐক্য, মাদ্রাসার উন্নয়ন এবং দ্বীনি শিক্ষার পরিবেশ উন্নয়নই আমাদের লক্ষ্য। মেধাবী শিক্ষার্থীদের জন্য বৃত্তি এবং শিক্ষক প্রশিক্ষণের ব্যবস্থা রয়েছে।",
    siteName: "Madrasha Association",
    images: [
      {
        url: "https://madrasha-shhociation-britti.vercel.app/banner.jpg",
        width: 1200,
        height: 630,
        alt: "বাংলাদেশ প্রাইভেট মাদ্রাসা ওয়েলফেয়ার এসোসিয়েশন",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "বাংলাদেশ প্রাইভেট মাদ্রাসা ওয়েলফেয়ার এসোসিয়েশন",
    description:
      "দ্বীনি শিক্ষার মান উন্নয়ন এবং আলেম সমাজের ঐক্যের মাধ্যমে সমাজে নৈতিক উন্নয়ন সাধনই আমাদের মিশন।",
    site: "@madrasah_welfare",
    images: ["https://madrasha-shhociation-britti.vercel.app/banner.jpg"],
  },
  metadataBase: new URL("https://madrasha-shhociation-britti.vercel.app"),
  verification: {
    google: "548jsiiwBxZPY3ss4bgLIk-tirGmZGrJTzHE0DKx2Uo",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${tiroBangla.variable} antialiased`}
      >
        {/* Optional fallback if JS is disabled */}
        <noscript>
          আপনার ব্রাউজারে জাভাস্ক্রিপ্ট সক্রিয় করুন সম্পূর্ণ অভিজ্ঞতা পেতে।
        </noscript>

        <AosWrapper>
          <NextTopLoader
            color="#008000"
            showSpinner={true}
            height={3}
            zIndex={99999999999}
          />
          <Toaster />
          <HomeNavBar />
          {children}
          <HomeFooter />
        </AosWrapper>
      </body>
    </html>
  );
}
