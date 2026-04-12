"use client";

import { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiUser,
  FiMessageSquare,
  FiSend,
} from "react-icons/fi";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200)); // replace with real API
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass =
    "w-full px-4 py-3 md:px-5 md:py-4 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm md:text-base placeholder:text-white/20 focus:outline-none focus:border-cyan-400/30 focus:bg-white/[0.06] focus:shadow-[0_0_0_3px_rgba(0,200,255,0.05)] transition-all duration-200";

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#050508] overflow-hidden px-4 sm:px-6 py-20 md:py-32">
      {/* Blobs */}
      <div className="absolute top-[-5%] left-[-10%] w-[300px] md:w-[560px] h-[300px] md:h-[560px] bg-cyan-500/[0.06] rounded-full blur-[90px] md:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-5%] right-[-10%] w-[260px] md:w-[480px] h-[260px] md:h-[480px] bg-purple-600/[0.06] rounded-full blur-[80px] md:blur-[130px] pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.13]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 w-full max-w-xl lg:max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-10 md:mb-14 space-y-3 md:space-y-4">
          <p className="text-cyan-400 text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.25em] uppercase">
            Get In Touch
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-[0.92]">
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Connect
            </span>
          </h1>
          <p className="text-white/35 text-sm md:text-base lg:text-lg leading-relaxed max-w-md">
            Have a project in mind or want to work together? Drop a message and
            I'll get back to you.
          </p>
        </div>

        {/* Glass Card */}
        <div className="relative rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-2xl shadow-[0_8px_56px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.04)] p-6 sm:p-8 md:p-10 lg:p-12">
          {/* Top glow line */}
          <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 md:py-20 space-y-5 text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center">
                <FiSend className="text-cyan-400 text-xl md:text-3xl" />
              </div>
              <h3 className="text-white font-black text-2xl md:text-3xl">
                Message Sent!
              </h3>
              <p className="text-white/40 text-sm md:text-base max-w-xs leading-relaxed">
                Thanks for reaching out. I'll get back to you as soon as
                possible.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: "", email: "", phone: "", message: "" });
                }}
                className="mt-1 text-cyan-400 text-sm md:text-base font-semibold hover:text-cyan-300 transition-colors"
              >
                Send another message →
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-white/45 text-[10px] sm:text-xs md:text-sm font-bold tracking-widest uppercase flex items-center gap-1.5">
                  <FiUser className="text-cyan-400/70 text-sm md:text-base" />{" "}
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Emon Hossain"
                  className={inputClass}
                />
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                <div className="space-y-2">
                  <label className="text-white/45 text-[10px] sm:text-xs md:text-sm font-bold tracking-widest uppercase flex items-center gap-1.5">
                    <FiMail className="text-cyan-400/70 text-sm md:text-base" />{" "}
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="emon@example.com"
                    className={inputClass}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-white/45 text-[10px] sm:text-xs md:text-sm font-bold tracking-widest uppercase flex items-center gap-1.5">
                    <FiPhone className="text-cyan-400/70 text-sm md:text-base" />{" "}
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+880 1700 000000"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-white/45 text-[10px] sm:text-xs md:text-sm font-bold tracking-widest uppercase flex items-center gap-1.5">
                  <FiMessageSquare className="text-cyan-400/70 text-sm md:text-base" />{" "}
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 md:py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm md:text-base lg:text-lg font-bold hover:shadow-[0_0_32px_rgba(0,200,255,0.25)] hover:opacity-90 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
              >
                {loading ? (
                  <div className="h-5 w-5 md:h-6 md:w-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <FiSend className="text-sm md:text-base" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
