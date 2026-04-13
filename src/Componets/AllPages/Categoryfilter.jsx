"use client";

// CategoryFilter.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Horizontal scrollable pill tabs for switching project categories.
// ─────────────────────────────────────────────────────────────────────────────

const ACCENT_ACTIVE = {
  cyan: "bg-cyan-500/15 text-cyan-300 border-cyan-400/30",
  purple: "bg-purple-500/15 text-purple-300 border-purple-400/30",
  green: "bg-green-500/15 text-green-300 border-green-400/30",
  amber: "bg-amber-500/15 text-amber-300 border-amber-400/30",
};

const CategoryFilter = ({ categories, active, onChange }) => (
  <div
    className="
      flex gap-2 overflow-x-auto pb-1
      scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none]
    "
    role="tablist"
    aria-label="Project categories"
  >
    {/* All tab */}
    <button
      role="tab"
      aria-selected={active === "all"}
      onClick={() => onChange("all")}
      className={`
        flex-shrink-0 px-4 py-2 rounded-xl
        border text-xs font-bold tracking-widest uppercase
        transition-all duration-200
        ${
          active === "all"
            ? "bg-white/10 text-white border-white/20"
            : "text-white/35 border-white/[0.07] hover:text-white/60 hover:border-white/15"
        }
      `}
    >
      All
    </button>

    {categories.map((cat) => (
      <button
        key={cat.id}
        role="tab"
        aria-selected={active === cat.id}
        onClick={() => onChange(cat.id)}
        className={`
          flex-shrink-0 px-4 py-2 rounded-xl
          border text-xs font-bold tracking-widest uppercase
          transition-all duration-200
          ${
            active === cat.id
              ? (ACCENT_ACTIVE[cat.accentColor] ??
                "bg-white/10 text-white border-white/20")
              : "text-white/35 border-white/[0.07] hover:text-white/60 hover:border-white/15"
          }
        `}
      >
        {cat.label}
      </button>
    ))}
  </div>
);

export default CategoryFilter;
