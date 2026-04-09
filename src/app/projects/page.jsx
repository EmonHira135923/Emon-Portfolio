import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Projects | Emon Hossain Hira Portfolio",
  description:
    "I am Emon Hossain Hira, a Full Stack Developer specializing in React, Next.js, and modern web technologies. Explore my portfolio, projects, and skills.",

  keywords: [
    "Emon Hossain Hira",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Web Developer Portfolio",
    "JavaScript Developer",
  ],

  authors: [{ name: "Emon Hossain Hira" }],

  creator: "Emon Hossain Hira",
  publisher: "Emon Hossain Hira",

  metadataBase: new URL("https://yourdomain.com"), // 👉 নিজের domain বসাও

  openGraph: {
    title: "Emon Hossain Hira | Portfolio",
    description:
      "Explore the portfolio of Emon Hossain Hira, a Full Stack Developer building modern web applications.",
    url: "https://yourdomain.com",
    siteName: "Emon Portfolio",
    images: [
      {
        url: "/og-image.png", // 👉 public folder এ image রাখো
        width: 1200,
        height: 630,
        alt: "Emon Hossain Hira Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Emon Hossain Hira",
    description: "Full Stack Developer | React & Next.js Specialist",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const MyProjectPage = () => {
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default MyProjectPage;
