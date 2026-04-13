export const PROJECT_CATEGORIES = [
  {
    id: "fullstack",
    label: "Full Stack",
    accentColor: "cyan", // drives card glow + tag color
    projects: [
      {
        id: "fs-01",
        title: "DevBoard",
        shortDescription:
          "A full-stack project management dashboard with real-time updates, role-based auth, and Kanban-style task tracking.",
        fullDescription:
          "DevBoard is a production-grade project management platform built with Next.js 14, MongoDB, and Socket.io. It features JWT-based role auth (Admin / Manager / Member), Kanban drag-and-drop task boards, real-time notifications, file attachment uploads via Cloudinary, and a rich activity log. The backend is a RESTful Node.js / Express API deployed on Railway, with Mongoose for schema management and Redis for session caching.",
        image: null, // placeholder will show
        featured: true,
        techStack: [
          "Next.js",
          "Node.js",
          "MongoDB",
          "Socket.io",
          "Tailwind CSS",
          "Redis",
        ],
        githubLink: "https://github.com/emon/devboard",
        liveLink: "https://devboard.vercel.app",
      },
      {
        id: "fs-02",
        title: "ShopNest",
        shortDescription:
          "E-commerce platform with product catalog, cart, Stripe checkout, and an admin panel for inventory management.",
        fullDescription:
          "ShopNest is a fully functional e-commerce web app using Next.js App Router, Laravel 11 backend API, and MySQL. It supports product variants (size / color), dynamic filtering & sorting, Stripe payment integration with webhooks, order tracking, email confirmations via Mailtrap, and a responsive admin dashboard for inventory & order management. Deployed on Vercel (frontend) and DigitalOcean (backend).",
        image: null,
        featured: true,
        techStack: [
          "Next.js",
          "Laravel",
          "MySQL",
          "Stripe",
          "Tailwind CSS",
          "Firebase",
        ],
        githubLink: "https://github.com/emon/shopnest",
        liveLink: "https://shopnest.vercel.app",
      },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    accentColor: "purple",
    projects: [
      {
        id: "fe-01",
        title: "PortfolioOS",
        shortDescription:
          "An OS-inspired personal portfolio with draggable windows, a taskbar, and an interactive terminal.",
        fullDescription:
          "PortfolioOS simulates a desktop OS experience in the browser using React 18, Framer Motion, and Tailwind CSS. Each 'app' (About, Projects, Contact, Blog) opens as a draggable, resizable window. A custom terminal accepts commands like 'ls projects' or 'open devboard'. Dark/light mode toggling, animated boot screen, and a taskbar with clock complete the immersive experience. Scored 99 on Lighthouse performance.",
        image: null,
        featured: true,
        techStack: ["React", "Framer Motion", "Tailwind CSS", "TypeScript"],
        githubLink: "https://github.com/emon/portfolioos",
        liveLink: "https://emonhira.dev",
      },
      {
        id: "fe-02",
        title: "MotionUI Kit",
        shortDescription:
          "An open-source React component library with 30+ animated UI components and a live interactive playground.",
        fullDescription:
          "MotionUI Kit is a headless + styled React library that ships 30+ production-ready components — modals, toasts, accordions, carousels, step wizards, and more — all animated via Framer Motion. The companion docs site (built with Next.js + MDX) features a live code playground powered by Sandpack, one-click copy snippets, and dark-mode previews. Published on npm with full TypeScript types and tree-shaking support.",
        image: null,
        techStack: [
          "React",
          "TypeScript",
          "Framer Motion",
          "Storybook",
          "Rollup",
        ],
        githubLink: "https://github.com/emon/motionui-kit",
        liveLink: "https://motionui.vercel.app",
      },
      {
        id: "fe-03",
        title: "WeatherGlass",
        shortDescription:
          "A glassmorphism weather app with animated weather scenes, 7-day forecasts, and location auto-detect.",
        fullDescription:
          "WeatherGlass fetches real-time data from the OpenWeatherMap API and renders dynamic weather scenes using CSS animations (rain, clouds, sunshine, snow). Features include: geolocation auto-detect, city search with debouncing, hourly + 7-day forecast, UV index, humidity, and wind speed cards, and full PWA support for offline use. Built with React, Zustand for state, and Axios for API calls.",
        image: null,
        techStack: [
          "React",
          "Zustand",
          "OpenWeatherMap API",
          "CSS Animations",
          "PWA",
        ],
        githubLink: "https://github.com/emon/weatherglass",
        liveLink: "https://weatherglass.vercel.app",
      },
    ],
  },
  {
    id: "backend",
    label: "Backend & API",
    accentColor: "green",
    projects: [
      {
        id: "be-01",
        title: "AuthForge",
        shortDescription:
          "A plug-and-play Node.js authentication microservice with JWT, OAuth2, 2FA, and rate limiting.",
        fullDescription:
          "AuthForge is a standalone Node.js / Express authentication service designed to be dropped into any stack. It supports email/password login, Google & GitHub OAuth2 via Passport.js, TOTP-based 2FA with QR code generation, refresh token rotation, bcrypt password hashing, email verification, brute-force rate limiting via express-rate-limit, and full Swagger API documentation. Dockerised and publishable as an npm package.",
        image: null,
        techStack: [
          "Node.js",
          "Express",
          "MongoDB",
          "Passport.js",
          "Docker",
          "JWT",
        ],
        githubLink: "https://github.com/emon/authforge",
        liveLink: null,
      },
      {
        id: "be-02",
        title: "FireQueue",
        shortDescription:
          "A Firebase-powered background job queue system with retry logic, dead-letter queues, and a monitoring UI.",
        fullDescription:
          "FireQueue uses Firebase Firestore as a persistent job store and Cloud Functions as workers. It supports job priorities, delayed scheduling, configurable retries with exponential backoff, dead-letter queues for failed jobs, and a real-time monitoring dashboard (built with React + Firebase Realtime DB) that shows job throughput, failure rates, and worker logs. Ideal for serverless architectures that need reliable async processing without Redis.",
        image: null,
        techStack: [
          "Firebase",
          "Cloud Functions",
          "Node.js",
          "React",
          "Firestore",
        ],
        githubLink: "https://github.com/emon/firequeue",
        liveLink: null,
      },
    ],
  },
  {
    id: "competitive",
    label: "Competitive Programming",
    accentColor: "amber",
    projects: [
      {
        id: "cp-01",
        title: "CP Tracker",
        shortDescription:
          "A personal competitive programming progress tracker syncing data from Codeforces, LeetCode, and CodeChef.",
        fullDescription:
          "CP Tracker is a Next.js dashboard that pulls live submission data from Codeforces, LeetCode, and CodeChef public APIs. It visualises rating history over time with Recharts, shows problem-difficulty heatmaps (GitHub-style), categorises solved problems by topic (Graph, DP, Greedy…), and tracks streaks. A Node.js cron job refreshes data every 6 hours and caches it in MongoDB. Fully responsive with dark mode.",
        image: null,
        techStack: [
          "Next.js",
          "Node.js",
          "MongoDB",
          "Recharts",
          "Tailwind CSS",
        ],
        githubLink: "https://github.com/emon/cp-tracker",
        liveLink: "https://cptracker.vercel.app",
      },
    ],
  },
];
