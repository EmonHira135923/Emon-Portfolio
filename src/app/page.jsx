import React from "react";
import Hero from "../Componets/AllPages/Hero";
import LatestProjectsSection from "../Componets/AllPages/LatestProjectsSection";

export const metadata = {
  title: "Home | Emon Hossain Hira Portfolio",
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

  metadataBase: new URL("https://emon-portfolio-seven.vercel.app"), // 👉 নিজের domain বসাও

  openGraph: {
    title: "Emon Hossain Hira | Portfolio",
    description:
      "Explore the portfolio of Emon Hossain Hira, a Full Stack Developer building modern web applications.",
    url: "https://emon-portfolio-seven.vercel.app",
    siteName: "Emon Portfolio",
    images: [
      {
        url: "/Emon-image.jpeg.png", // 👉 public folder এ image রাখো
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
    images: ["/Emon-image.jpeg.png"],
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

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestProjectsSection />
    </div>
  );
};

export default Home;
