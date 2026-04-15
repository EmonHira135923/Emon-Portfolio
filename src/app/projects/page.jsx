import ProjectsSection from "@/src/Componets/AllPages/Projectssection";
export const metadata = {
  title: "Projects | Emon Hossain Hira Portfolio",
  description:
    "My Projects are a showcase of my work as a Full Stack Developer specializing in React, Next.js, and modern web technologies. Explore my portfolio, projects, and skills.",

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
    url: "https://emon-portfolio-seven.vercel.app/projects",
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

  // 👇 Social links / SEO extra data
  other: {
    whatsapp: "https://wa.me/8801817516654",
    messenger: "https://www.facebook.com/messages/t/1504054170712783",
    youtube: "https://www.youtube.com/channel/UC_8DU_tTTHeCwSMDPPVcfjw",
    linkedin: "https://www.linkedin.com/in/emon135923/",
  },
};
const ProjectsPage = () => {
  return (
    <main className="relative min-h-screen bg-[#050508] overflow-hidden">
      {/* ── Ambient blobs (match About page) ── */}
      <div className="absolute top-0 left-[-10%] w-[500px] h-[600px] bg-cyan-500/[0.05] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-[-8%] w-[450px] h-[450px] bg-purple-600/[0.05] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-amber-500/[0.03] rounded-full blur-[160px] pointer-events-none" />

      {/* ── Dot grid ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.14]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 pt-28 md:pt-36 pb-28">
        {/* Page hero */}
        <div className="space-y-5 md:space-y-6 max-w-3xl mb-20 md:mb-28">
          <p className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-cyan-400">
            Portfolio
          </p>
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter text-white leading-[0.9]">
            Things I've
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">
              Built
            </span>
          </h1>
          <p className="text-white/35 text-base md:text-lg leading-relaxed max-w-2xl">
            Real-world projects spanning full-stack web apps, open-source tools,
            competitive programming utilities, and frontend experiments — each
            one built to solve a genuine problem.
          </p>
        </div>
        {/* Projects section */}
        <ProjectsSection />
      </div>
    </main>
  );
};

export default ProjectsPage;
