import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#050505] text-white px-4 selection:bg-cyan-500/30">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full -z-10" />

      <div className="space-y-6 max-w-md">
        {/* Large stylized 404 */}
        <h1 className="text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-[#333]">
          404
        </h1>

        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight">
            Lost in the code?
          </h2>
          <p className="text-gray-400 leading-relaxed">
            The page you're looking for has been moved, deleted, or never
            existed in the first place.
          </p>
        </div>

        <div className="pt-4">
          <Link
            href="/"
            className="group relative inline-flex items-center justify-center px-8 py-3 font-medium transition-all bg-white text-black rounded-full hover:bg-gray-200 active:scale-95"
          >
            <span>Return to Portfolio</span>
            <svg
              className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
