import {
  FiBookOpen,
  FiBriefcase,
  FiTarget,
  FiZap,
  FiCode,
  FiCpu,
} from "react-icons/fi";
import SkillsMarquee from "./SkillsMarquee";
import SkillsOverview from "./SkillsOverview";

/* ── Duration calculator ── */
function calcDuration(start, end = new Date()) {
  const totalDays = Math.floor((end - start) / (1000 * 60 * 60 * 24));
  const months = Math.floor(totalDays / 30.44);
  return { months, days: totalDays };
}

function formatDate(d) {
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

/* ── Section label ── */
const SectionLabel = ({ icon, text }) => (
  <div className="flex items-center gap-3 mb-10 md:mb-14">
    <span className="text-cyan-400 text-xl md:text-2xl">{icon}</span>
    <span className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-white/30">
      {text}
    </span>
    <span className="flex-1 h-px bg-white/[0.06]" />
  </div>
);

/* ── Timeline item ── */
const TimelineItem = ({ joinDate, endDate, role, org, desc, current }) => {
  const { months, days } = calcDuration(joinDate, endDate ?? new Date());
  const period = `${formatDate(joinDate)} — ${current ? "Present" : formatDate(endDate)}`;
  const label = `${months} month${months !== 1 ? "s" : ""} · ${days} days`;

  return (
    <div className="relative pl-7 md:pl-10 border-l border-white/[0.08] pb-10 last:pb-0">
      <span
        className={`absolute -left-[6px] top-1.5 w-3 h-3 md:w-3.5 md:h-3.5 rounded-full border-2
        ${
          current
            ? "bg-cyan-400 border-cyan-400 shadow-[0_0_14px_rgba(0,200,255,0.7)]"
            : "bg-[#050508] border-white/20"
        }`}
      />
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-white/25 font-mono">
          {period}
        </span>
        {current && (
          <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 text-[10px] md:text-xs font-bold tracking-widest uppercase">
            Running
          </span>
        )}
      </div>
      <h3 className="text-white font-bold text-base md:text-xl mb-0.5">
        {role}
      </h3>
      <p className="text-cyan-400/80 text-sm md:text-base font-semibold mb-1">
        {org}
      </p>
      <p className="text-white/30 text-xs font-mono mb-3 tracking-wide">
        {label}
      </p>
      <p className="text-white/35 text-sm md:text-[15px] leading-relaxed max-w-2xl">
        {desc}
      </p>
    </div>
  );
};

/* ── Education card ── */
const EduCard = ({ level, board, gpa, year, status, institution }) => (
  <div className="relative p-6 md:p-8 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-cyan-400/20 transition-all duration-200 group overflow-hidden">
    <div className="absolute top-0 right-0 w-28 h-28 bg-cyan-500/[0.04] rounded-full blur-2xl group-hover:bg-cyan-500/[0.08] transition-all" />
    <div className="flex items-start justify-between gap-3">
      <div className="flex-1">
        <p className="text-white font-black text-base md:text-xl mb-1">
          {level}
        </p>
        <p className="text-white/35 text-xs md:text-sm leading-relaxed">
          {board}
        </p>
        {institution && (
          <p className="text-cyan-400/70 text-xs md:text-sm font-medium mt-1">
            {institution}
          </p>
        )}
      </div>
      {gpa && (
        <div className="text-right flex-shrink-0">
          <p className="text-cyan-400 font-black text-2xl md:text-3xl leading-none">
            {gpa}
          </p>
          <p className="text-white/25 text-[11px] md:text-xs mt-0.5">GPA</p>
        </div>
      )}
      {status && (
        <span className="px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-400/20 text-purple-300 text-[10px] md:text-xs font-bold tracking-wide uppercase flex-shrink-0">
          {status}
        </span>
      )}
    </div>
    <p className="text-white/20 text-xs md:text-sm font-mono mt-4 tracking-widest">
      {year}
    </p>
  </div>
);

/* ── Tool chip ── */
const ToolChip = ({ label, sub }) => (
  <div className="flex flex-col px-4 py-3 md:px-5 md:py-3.5 rounded-xl border border-white/[0.07] bg-white/[0.02] hover:border-cyan-400/20 hover:bg-cyan-500/[0.04] transition-all duration-200 cursor-default">
    <span className="text-white/70 text-sm md:text-base font-semibold">
      {label}
    </span>
    {sub && (
      <span className="text-white/25 text-xs md:text-sm mt-0.5">{sub}</span>
    )}
  </div>
);

/* ══════════════════════════════════ PAGE ══════════════════════════════════ */
const AboutPage = () => {
  return (
    <main className="relative min-h-screen bg-[#050508] overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute top-0 left-[-10%] w-[500px] h-[600px] bg-cyan-500/[0.05] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-[-8%] w-[450px] h-[450px] bg-purple-600/[0.05] rounded-full blur-[120px] pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.14]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 pt-28 md:pt-36 pb-28 space-y-28 md:space-y-36">
        {/* ── HERO INTRO ── */}
        <div className="space-y-6 md:space-y-8 max-w-4xl">
          <p className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-cyan-400">
            About Me
          </p>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-[0.9]">
            Emon Hossain
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">
              Hira
            </span>
          </h1>
          <p className="text-white/30 text-base md:text-lg font-semibold tracking-wide">
            Full Stack Developer &nbsp;·&nbsp; Diploma in CSE &nbsp;·&nbsp;
            Future AI/ML Engineer
          </p>
          <p className="text-white/40 text-base md:text-lg lg:text-xl leading-[1.9] max-w-3xl">
            I'm a Diploma student in Computer Science & Technology with a strong
            foundation in C, C++, Python, and core Data Structures. I work with
            modern web technologies including JavaScript, React, and Next.js,
            while actively advancing my full-stack skills in Node.js, MongoDB,
            Laravel, and Firebase. Currently working at{" "}
            <span className="text-cyan-400 font-semibold">Omni Katalyst</span>{" "}
            with professional experience. Fast learner, problem solver, and
            driven to build impactful real-world projects.
          </p>
        </div>

        {/* ── EXPERIENCE ── */}
        <div>
          <SectionLabel icon={<FiBriefcase />} text="Experience" />
          <div>
            <TimelineItem
              joinDate={new Date(2025, 11, 15)}
              current
              role="Full Stack Developer"
              org="Omni Katalyst"
              desc="Working on real-world React and Node.js projects. Involved in product development, feature building, and gaining hands-on professional experience in a team environment."
            />
            <TimelineItem
              joinDate={new Date(2025, 10, 8)}
              endDate={new Date(2025, 11, 11)}
              role="Frontend Intern"
              org="Ragory"
              desc="Completed a 1-month internship gaining real-world industry exposure — working on UI components, collaborative workflows, and professional development practices."
            />
          </div>
        </div>

        {/* ── SKILLS OVERVIEW ── */}
        <div>
          <SkillsOverview />
        </div>

        {/* ── SKILLS MARQUEE ── */}
        <div>
          <SectionLabel icon={<FiCode />} text="Tech Stack & Skills" />
          <SkillsMarquee />
        </div>

        {/* ── EDUCATION ── */}
        <div>
          <SectionLabel icon={<FiBookOpen />} text="Education" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            <EduCard
              level="SSC"
              institution="Hazirhat Government Millat Academy"
              board="Science — Cumilla Board"
              gpa="4.11"
              year="Passed 2020"
            />
            <EduCard
              level="HSC"
              institution="Government Bangla College"
              board="Science — Dhaka Board"
              gpa="3.58"
              year="Passed 2023"
            />
            <EduCard
              level="Diploma — CSE"
              institution="Lakshmipur Polytechnic Institute"
              board="Bangladesh Technical Education Board"
              year="8th Semester Completed"
              status="Result Pending"
            />
          </div>
        </div>

        {/* ── TOOLS ── */}
        <div>
          <SectionLabel icon={<FiCpu />} text="Tools & Software" />
          <div className="space-y-8">
            <div>
              <p className="text-white/25 text-xs md:text-sm font-bold tracking-widest uppercase mb-4">
                AI Tools
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "ChatGPT", sub: "OpenAI" },
                  { label: "Claude", sub: "Anthropic" },
                  { label: "Gemini", sub: "Google" },
                  { label: "ElevenLabs", sub: "Voice AI" },
                  { label: "NotebookLM", sub: "Research" },
                ].map((t) => (
                  <ToolChip key={t.label} {...t} />
                ))}
              </div>
            </div>
            <div>
              <p className="text-white/25 text-xs md:text-sm font-bold tracking-widest uppercase mb-4">
                Productivity & Design
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "Canva", sub: "Design" },
                  { label: "Notion", sub: "Planning" },
                  { label: "Excel", sub: "Data" },
                  { label: "PowerPoint", sub: "Slides" },
                  { label: "Word", sub: "Docs" },
                ].map((t) => (
                  <ToolChip key={t.label} {...t} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── FUTURE GOAL ── */}
        <div>
          <SectionLabel icon={<FiTarget />} text="Future Goal" />
          <div className="relative p-8 md:p-12 rounded-2xl border border-purple-400/15 bg-gradient-to-br from-purple-500/[0.06] to-cyan-500/[0.03] overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/[0.07] rounded-full blur-3xl pointer-events-none" />
            <p className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-purple-400/70 mb-4">
              Long-term Vision
            </p>
            <h3 className="text-white font-black text-3xl md:text-5xl tracking-tight mb-5">
              AI / ML Engineer
            </h3>
            <p className="text-white/40 text-base md:text-lg leading-relaxed max-w-2xl">
              Currently focused on reaching mid-level Next.js proficiency. After
              that, I plan to dive deep into Machine Learning and AI engineering
              — building intelligent systems that solve real-world problems at
              scale.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {[
                "Next.js Mid-level",
                "Machine Learning",
                "AI Engineering",
                "Intelligent Systems",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full border border-purple-400/15 bg-purple-500/[0.06] text-purple-300/70 text-sm font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── MOTIVATION QUOTE ── */}
        <div className="relative p-8 md:p-14 rounded-2xl border border-white/[0.06] bg-white/[0.02] text-center overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
          <FiZap className="text-cyan-400 text-3xl md:text-4xl mx-auto mb-6" />
          <p className="text-white/60 text-lg md:text-2xl lg:text-3xl font-semibold leading-relaxed italic max-w-3xl mx-auto">
            "I learn everything the present world demands — so I can build
            anything the future requires."
          </p>
          <p className="text-white/20 text-sm md:text-base font-mono tracking-widest mt-6">
            — Emon Hossain Hira
          </p>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
