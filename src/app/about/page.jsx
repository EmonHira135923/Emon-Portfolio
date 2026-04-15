import AboutPage from "@/src/Componets/AllPages/About";
import React from "react";
export const metadata = {
  title: "About | Emon Hossain Hira Portfolio",
  description:
    "Learn more about Emon Hossain Hira, a Full Stack Developer specializing in React, Next.js, and modern web technologies. Explore my portfolio, projects, and skills.",

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

  metadataBase: new URL("https://emon-portfolio-seven.vercel.app/"), // 👉 নিজের domain বসাও

  openGraph: {
    title: "Emon Hossain Hira | Portfolio",
    description:
      "Explore the portfolio of Emon Hossain Hira, a Full Stack Developer building modern web applications.",
    url: "https://emon-portfolio-seven.vercel.app/about",
    siteName: "Emon Portfolio",
    images: [
      {
        url: "https://i.ibb.co.com/bjLbt66j/Emon-image.jpg", // 👉 public folder এ image রাখো
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
    images: ["https://i.ibb.co.com/bjLbt66j/Emon-image.jpg"],
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

const Aboutpages = () => {
  return <AboutPage />;
};

export default Aboutpages;
