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

  const handleChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#050508] overflow-hidden px-4 sm:px-6 py-20 md:py-28">
      {/* Background blobs - Adjusted sizes for mobile */}
      <div className="absolute top-[-5%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan-500/[0.06] rounded-full blur-[80px] md:blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-5%] right-[-10%] w-[250px] md:w-[450px] h-[250px] md:h-[450px] bg-purple-600/[0.06] rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.12] md:opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 w-full max-w-xl mx-auto">
        {/* Header */}
        <div className="mb-8 md:mb-12 space-y-3 text-center sm:text-left">
          <p className="text-cyan-400 text-[10px] md:text-[11px] font-bold tracking-[0.2em] md:tracking-[0.25em] uppercase">
            Get In Touch
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-white leading-tight">
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Connect
            </span>
          </h1>
          <p className="text-white/35 text-xs md:text-sm leading-relaxed max-w-md mx-auto sm:mx-0">
            Have a project in mind or want to work together? Drop a message and
            I'll get back to you.
          </p>
        </div>

        {/* Glass Card */}
        <div className="relative rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl shadow-[0_8px_48px_rgba(0,0,0,0.5)] p-6 md:p-10">
          {/* Top edge glow */}
          <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent rounded-full" />

          {submitted ? (
            <div className="flex flex-col items-center justify-center py-10 md:py-16 space-y-4 text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center">
                <FiSend className="text-cyan-400 text-xl md:text-2xl" />
              </div>
              <h3 className="text-white font-bold text-xl">Message Sent!</h3>
              <p className="text-white/40 text-sm max-w-xs px-4">
                Thanks for reaching out. I'll get back to you as soon as
                possible.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: "", email: "", phone: "", message: "" });
                }}
                className="mt-2 text-cyan-400 text-xs font-semibold hover:text-cyan-300 transition-colors"
              >
                Send another message →
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-white/50 text-[10px] md:text-xs font-semibold tracking-wide uppercase flex items-center gap-1.5">
                  <FiUser className="text-cyan-400/70" /> Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Emon Hossain"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-cyan-400/30 focus:bg-white/[0.06] transition-all duration-200"
                />
              </div>

              {/* Email & Phone Group (Grid for larger screens) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-white/50 text-[10px] md:text-xs font-semibold tracking-wide uppercase flex items-center gap-1.5">
                    <FiMail className="text-cyan-400/70" /> Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="emon@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-cyan-400/30 focus:bg-white/[0.06] transition-all duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-white/50 text-[10px] md:text-xs font-semibold tracking-wide uppercase flex items-center gap-1.5">
                    <FiPhone className="text-cyan-400/70" /> Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+880..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-cyan-400/30 focus:bg-white/[0.06] transition-all duration-200"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-white/50 text-[10px] md:text-xs font-semibold tracking-wide uppercase flex items-center gap-1.5">
                  <FiMessageSquare className="text-cyan-400/70" /> Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-cyan-400/30 focus:bg-white/[0.06] transition-all duration-200 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-bold hover:shadow-[0_0_25px_rgba(0,200,255,0.2)] active:scale-[0.98] disabled:opacity-60 transition-all duration-200"
              >
                {loading ? (
                  <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <FiSend className="text-sm" />
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
