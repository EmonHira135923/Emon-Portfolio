import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "../Componets/Shared/Header";
import Footer from "../Componets/Shared/Footer";

const roboto = Roboto({
  weight: ["100", "200", "400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Emon Hossain Hira | Full Stack Developer",
    template: "%s | Emon Hossain Hira",
  },

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
        url: "/Emon-image.jpeg", // 👉 public folder এ image রাখো
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
    images: ["/Emon-image.jpeg"],
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
