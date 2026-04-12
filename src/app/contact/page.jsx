import ContactPage from "@/src/Componets/AllPages/Contact";
import React from "react";

export const metadata = {
  title: "Contact | Emon Hossain Hira - Full Stack Developer",
  description:
    "Get in touch with Emon Hossain Hira, a Full Stack Developer specializing in React, Next.js, and modern web development. Let's build something amazing together.",
  keywords: [
    "Emon Hossain Hira",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Portfolio Contact",
    "Hire Developer",
  ],
  openGraph: {
    title: "Contact | Emon Hossain Hira - Full Stack Developer",
    description:
      "Contact Emon Hossain Hira for freelance or full-time web development projects using React, Next.js, and modern technologies.",
    url: "https://yourdomain.com/contact",
    siteName: "Emon Hossain Hira Portfolio",
    type: "website",
  },
};

const Contactpage = () => {
  return (
    <div>
      <ContactPage />
    </div>
  );
};

export default Contactpage;
