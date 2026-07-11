export const PROJECT_CATEGORIES = [
  // Full stack project done
  {
    id: "fullstack",
    label: "Full Stack",
    accentColor: "cyan",
    projects: [
      {
        id: "fs-01",
        title: "The Daily Jhalokathi – Modern Bengali News Portal",
        shortDescription:
          "A full-stack modern Bengali news portal built with Next.js 16, React 19, and MongoDB featuring real-time breaking news, secure authentication, and a complete admin dashboard.",
        fullDescription:
          "The Daily Jhalokathi is a modern full-stack Bengali news platform designed to deliver news content through a fast, secure, and scalable digital experience. The platform provides a public news portal where users can explore latest news, categories, breaking news updates, detailed articles, comments, and replies. It also includes a powerful admin dashboard for managing news articles, users, comments, replies, and contact messages with secure JWT-based authentication and role-based access control.",
        image: "https://i.ibb.co.com/F4zGvdPM/The-Daily-Jhalokathi.webp",
        featured: true,
        techStack: [
          "Next.js 16",
          "React 19",
          "MongoDB",
          "Tailwind CSS 4",
          "DaisyUI",
          "JWT Authentication",
          "Jose",
          "bcrypt",
          "Cloudinary",
          "Axios",
          "React Icons",
        ],
        features: [
          "Modern Bengali news publishing platform",
          "Public homepage with latest news and category filtering",
          "Real-time breaking news ticker",
          "News details page with related news",
          "Social sharing functionality",
          "Comment and reply system",
          "JWT authentication with access and refresh tokens",
          "HTTP-only cookie based secure authentication",
          "Role-based admin access control",
          "Complete admin dashboard",
          "News CRUD management system",
          "User management system",
          "Comment and reply moderation",
          "Contact message management",
          "Cloudinary image upload integration",
          "Live weather widget integration",
        ],
        roles: [
          "Admin: Manage news articles, breaking news, users, comments, replies, and contact messages",
          "User: Read news, create comments, reply to discussions, and submit contact messages",
        ],
        architecture:
          "Built with Next.js App Router architecture where frontend pages and backend API routes are handled in a single full-stack application. Public APIs provide optimized DTO responses while protected admin APIs handle complete data operations.",
        authentication:
          "Implemented secure JWT authentication using accessToken and refreshToken stored in HTTP-only cookies. Middleware validates protected routes and automatically refreshes expired access tokens.",
        security:
          "Public users only access filtered DTO-based APIs while sensitive operations are protected through JWT verification and admin authorization checks.",
        database: [
          "Users collection - User accounts, roles, authentication information",
          "News collection - Articles, categories, images, timestamps, and content",
          "Comments collection - User comments and discussion data",
          "Replies collection - Nested comment reply system",
          "Contacts collection - User contact messages",
          "Breaking News collection - Homepage breaking news ticker content",
        ],
        apiFeatures: [
          "Public news API with optimized response data",
          "Admin-only news CRUD APIs",
          "Breaking news management APIs",
          "Protected comment and reply APIs",
          "Secure contact management APIs",
        ],
        additionalServices: [
          "Cloudinary for image hosting",
          "OpenWeatherMap API for weather widget",
          "bcrypt for password hashing",
        ],
        githubLink: "https://github.com/EmonHira135923/The-Daily-Jhalokathi",
        liveLink: "https://the-daily-jhalokathi.vercel.app/",
      },
      {
        id: "fs-02",
        title: "Contest Hub Platform – Full-Stack Contest Management System",
        shortDescription:
          "A full-stack contest management platform where creators publish contests, users participate and submit entries, and admins manage the entire platform through role-based dashboards.",
        fullDescription:
          "Contest Hub Platform is a modern full-stack contest management system built with Next.js App Router. The platform connects contest creators, participants, and administrators through dedicated workflows. Creators can publish contests, manage submissions, and declare winners, while users can browse contests, join paid competitions, submit assignments, and track their performance. Admins have complete control over users, contests, creators, and platform moderation through a powerful dashboard.",
        image: "https://i.ibb.co.com/JRyzWs6b/Contest-Hub-Platform.webp",
        featured: true,
        techStack: [
          "Next.js",
          "React 19",
          "Tailwind CSS v4",
          "MongoDB",
          "Node.js",
          "NextAuth",
          "JWT Authentication",
          "Stripe",
          "Cloudinary",
          "Nodemailer",
          "React Query",
          "Recharts",
          "Framer Motion",
          "React Hook Form",
          "Axios",
          "DaisyUI",
        ],
        features: [
          "Role-based authentication system",
          "Admin, Creator, and User dashboards",
          "Contest creation and approval workflow",
          "Public contest browsing, search, and filtering",
          "Stripe-powered paid contest participation",
          "Assignment submission system",
          "Winner declaration workflow",
          "Contest analytics dashboard",
          "User participation statistics",
          "Creator performance tracking",
          "Admin user and contest management",
          "Google and GitHub social login",
          "JWT access and refresh token authentication",
          "Cloudinary image upload integration",
          "Nodemailer invitation email system",
          "Responsive modern UI",
        ],
        roles: [
          "User: Browse contests, join competitions, make payments, submit assignments, and view participation history",
          "Creator: Create contests, manage own contests, review submissions, and declare winners",
          "Admin: Manage users, approve/reject creator contests, manage creators, invitations, and platform activities",
        ],
        architecture:
          "Built using Next.js App Router with frontend pages, backend API routes, authentication logic, and database utilities inside a single full-stack application. Shared components, hooks, and providers handle reusable UI and application state management.",
        authentication:
          "Implemented hybrid authentication using NextAuth for Google/GitHub OAuth and custom JWT authentication with access and refresh tokens stored in HTTP-only cookies. Middleware validates protected routes and applies role-based authorization.",
        contestWorkflow:
          "Creator creates a contest → Admin reviews and approves → Contest becomes publicly available → Users participate through Stripe payment → Users submit assignments → Creator reviews submissions → Winner is declared and contest status is updated.",
        database: [
          "Users collection - User accounts, roles, profile information, OAuth provider data",
          "Contests collection - Contest details, creator information, prizes, deadlines, and status",
          "Payments collection - Payment records, submission status, and winner information",
        ],
        security: [
          "JWT authentication with HTTP-only cookies",
          "Role-based access control using middleware",
          "Protected admin and creator routes",
          "NextAuth secure session management",
          "Password hashing using bcrypt",
          "Invitation tokens with expiration handling",
          "Server-side session validation",
        ],
        payment:
          "Integrated Stripe checkout system for secure contest participation payments with payment tracking and winner status management.",
        analytics:
          "Implemented role-specific analytics dashboards with Recharts-powered charts for admin platform statistics and creator performance insights.",
        githubLink: "https://github.com/EmonHira135923/Contest-Hub-Platform",
        liveLink: "https://contest-hub-platform.vercel.app/",
      },
      {
        id: "fs-03",
        title: "ZapShift – Parcel Delivery & Courier Management Platform",
        shortDescription:
          "A full-stack parcel delivery management platform for booking, tracking, and managing courier operations with dedicated workflows for users, riders, and admins.",
        fullDescription:
          "ZapShift is a modern full-stack Next.js application that digitizes parcel delivery operations. It provides a complete workflow where users can book parcels, make secure payments, track deliveries, riders can manage delivery tasks, and admins can control the entire courier ecosystem. The platform includes role-based access control, JWT authentication, NextAuth social login, Stripe payment integration, Cloudinary image management, and real-time tracking logs.",
        image: "https://i.ibb.co.com/cc02yt4M/Zap-Shift-Project.webp",
        featured: true,
        techStack: [
          "Next.js 16",
          "React 19",
          "Tailwind CSS",
          "Framer Motion",
          "MongoDB",
          "Node.js",
          "JWT Authentication",
          "NextAuth",
          "Stripe",
          "Cloudinary",
          "Nodemailer",
          "React Hook Form",
          "React Toastify",
          "Recharts",
          "React Leaflet",
        ],
        features: [
          "Role-based authentication system (Admin, Rider, User)",
          "Email/password and Google/GitHub social authentication",
          "JWT-based secure authorization",
          "Parcel booking with automatic cost calculation",
          "Parcel search, filtering, update, and deletion",
          "Rider application and admin approval system",
          "Rider assignment and delivery management workflow",
          "Stripe payment integration",
          "Automatic tracking log generation",
          "Cloudinary profile image upload",
          "Dedicated dashboards for Admin, Rider, and User",
        ],
        roles: [
          "Admin: Manage users, parcels, riders, assignments, and access admin dashboard",
          "Rider: Accept/reject deliveries, update pickup and delivery status",
          "User: Book parcels, make payments, and track delivery progress",
        ],
        architecture:
          "Built with Next.js App Router architecture where frontend pages and backend API route handlers are maintained inside a single application. MongoDB handles data storage while middleware manages authentication and role authorization.",
        database: [
          "Users collection - Account information, roles, authentication data",
          "Parcels collection - Sender, receiver, delivery status, cost, assignment data",
          "Payments collection - Transaction and payment records",
          "Riders collection - Rider applications and operational status",
          "Trackings collection - Delivery tracking history logs",
        ],
        authentication:
          "Hybrid authentication system combining custom JWT authentication with NextAuth social login. Protected routes are secured using middleware-based role validation.",
        payment:
          "Integrated Stripe checkout system for secure parcel payments with automated payment confirmation and parcel status updates.",
        githubLink: "https://github.com/EmonHira135923/Zap-Shift-Project",
        liveLink: "https://zap-shift-project-sooty.vercel.app/",
      },
      {
        id: "fs-04",
        title: "TravelEase – Vehicle Booking & Trip Management Platform",
        shortDescription:
          "A full-stack vehicle rental platform with booking system, dashboard management, and Firebase authentication.",
        fullDescription:
          "TravelEase is a modern full-stack MERN application that connects vehicle owners with travelers. Users can browse vehicles, view details, and book rides, while owners can manage listings via a dashboard. It includes Firebase authentication, protected routes, real-time availability, and a responsive UI with smooth animations.",
        image: "https://i.ibb.co.com/Q3Jj9F43/Final-Easy-Ride-portfolio.png",
        featured: true,
        techStack: [
          "React",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Firebase",
          "Tailwind CSS",
          "Framer Motion",
        ],
        githubLink:
          "https://github.com/EmonHira135923/Easy-Ride-Client-Management",
        liveLink: "https://travel-easy-with-ride-sharing.netlify.app/",
      },
      {
        id: "fs-05",
        title: "Kaptain Planet",
        shortDescription:
          "A full-stack platform with role-based dashboards, authentication, and project/blog management.",
        fullDescription:
          "Kaptain Planet is a full-stack web application with role-based access control. Admins can manage users, assign roles, and perform CRUD operations on projects and blogs. Users can explore content and manage profiles. Built with JWT authentication and Cloudinary image handling.",
        image: "https://i.ibb.co.com/TB2Hgbpy/Final-Kaptain-Portfolio.png",
        featured: true,
        techStack: [
          "React",
          "Node.js",
          "MongoDB",
          "Tailwind CSS",
          "JWT",
          "Cloudinary",
        ],
        githubLink: "https://github.com/OmniKatyalist/Kaptain-Planet-Client",
        liveLink: "https://kaptain-planet-client.vercel.app",
      },
      {
        id: "fs-06",
        title: "Hero Kidzz",
        shortDescription:
          "A full-stack single-vendor e-commerce app with authentication, cart, and checkout flow.",
        fullDescription:
          "Hero Kidzz is a full-stack e-commerce application for children's products. Users can browse products, view details, and add items to their cart after authentication. It includes a complete shopping flow with cart and checkout (without payment integration) and uses NextAuth with Google login.",
        image: "https://i.ibb.co.com/rRP27YT8/Final-Hero-Kids-Portfolio.png",
        featured: true,
        techStack: ["Next.js", "MongoDB", "NextAuth", "Google OAuth", "imgbb"],
        githubLink: "https://github.com/EmonHira135923/Hero-Kids-Project",
        liveLink: "https://hero-kids-project.vercel.app",
      },
      {
        id: "fs-07",
        title: "Smart Deals",
        shortDescription:
          "A full-stack marketplace with Firebase authentication, product management, and bidding system.",
        fullDescription:
          "Smart Deals is a marketplace-style full-stack application where users can browse products, manage listings, and interact through a bidding system. It features Firebase authentication, protected routes, and user-specific dashboards like 'My Items'.",
        image: "https://i.ibb.co.com/YBsHPTMh/Final-Smart-Portfolio.png",
        featured: true,
        techStack: ["React", "Node.js", "MongoDB", "Firebase", "Google OAuth"],
        githubLink: "https://github.com/EmonHira135923/Smart-Deals-Client",
        liveLink: "https://smart-deal-000.netlify.app/",
      },
    ],
  },
  // Template website
  {
    id: "frontend",
    label: "Frontend",
    accentColor: "purple",
    projects: [
      {
        id: "fe-01",
        title: "TechWave",
        shortDescription:
          "A premium dark-themed podcast landing page with glassmorphism UI, animations, and interactive audio player.",
        fullDescription:
          "TechWave is a high-end static podcast landing page built with HTML, Tailwind CSS, and vanilla JavaScript. It features glassmorphism design, animated audio visualizers, custom cursor, scroll animations, and a full podcast UI including player, episodes, pricing, and testimonials. Designed to deliver a premium modern UI/UX experience.",
        image: "https://i.ibb.co.com/cKXtx4DV/Final-Techwave-Portfolio.png",
        featured: true,
        techStack: ["HTML", "Tailwind CSS", "JavaScript"],
        githubLink: "https://github.com/EmonHira135923/TechWave",
        liveLink: "https://emonhira135923.github.io/TechWave/",
      },
      {
        id: "fe-02",
        title: "C Programming Guide",
        shortDescription:
          "A structured documentation-style website covering complete C programming fundamentals.",
        fullDescription:
          "A complete theory-first C programming guide covering topics like variables, data types, operators, conditions, and loops. Includes explanations, tables, and real code examples. Designed as a learning platform for beginners with structured content and clean UI.",
        image: "https://i.ibb.co.com/SXRYWhjQ/Final-C-portfolio.png",
        featured: true,
        techStack: ["HTML", "Tailwind CSS", "JavaScript"],
        githubLink: "https://github.com/EmonHira135923/C-Programming",
        liveLink: "https://c-proggraming-week-01-full-review.netlify.app/",
      },
      {
        id: "fe-03",
        title: "Knowledge Vault",
        shortDescription:
          "A SaaS-style landing page for a personal knowledge management (second brain) system.",
        fullDescription:
          "Knowledge Vault is a modern SaaS landing page focused on structured thinking and knowledge management. It presents a 'second brain' concept with sections for problem-solving, features, and product value, demonstrating strong UI/UX and product thinking.",
        image: "https://i.ibb.co.com/XZgqBGrr/Final-Knowledge-Portfolio.png",
        featured: true,
        techStack: ["HTML", "Tailwind CSS", "React Icons", "JavaScript"],
        githubLink: "https://github.com/EmonHira135923/Knowledge-Vault",
        liveLink: "https://emonhira135923.github.io/Knowledge-Vault/",
      },
      {
        id: "fe-04",
        title: "Worka",
        shortDescription:
          "A modern AI-powered business landing page with clean UI and smooth animations.",
        fullDescription:
          "Worka is a business-focused landing page designed to showcase productivity tools and AI-driven workflow solutions. It includes modern UI sections, feature highlights, and smooth animations for a professional look.",
        image: "https://i.ibb.co.com/PvDM4KkJ/Final-Worka-Portfolio.png",
        featured: false,
        techStack: ["HTML", "Tailwind CSS", "React Icons", "JavaScript"],
        githubLink: "https://github.com/EmonHira135923/Worka",
        liveLink: "https://ragory-project-build.netlify.app/",
      },
      {
        id: "fe-05",
        title: "Personal Portfolio v2",
        shortDescription:
          "A personal portfolio showcasing programming skills, projects, and learning journey.",
        fullDescription:
          "An improved portfolio website highlighting programming knowledge, DSA background, and web development skills. Includes sections for projects, skills, and personal information.",
        image: "https://i.ibb.co.com/93hx2zg4/Final-Demo-portfolio-2.png",
        featured: false,
        techStack: ["HTML", "Tailwind CSS", "React Icons", "JavaScript"],
        githubLink: "https://github.com/EmonHira135923/My-Portfolio",
        liveLink: "https://emonhira135923.github.io/My-Portfolio/",
      },
      {
        id: "fe-06",
        title: "Demo Portfolio",
        shortDescription:
          "A basic personal portfolio website with structured sections and clean layout.",
        fullDescription:
          "A beginner-friendly portfolio project featuring about, skills, resume, and contact sections. Focused on layout structuring and UI basics.",
        image: "https://i.ibb.co.com/67qgYZrj/Final-Demo-portfolio.png",
        featured: false,
        techStack: ["HTML", "Tailwind CSS", "React Icons"],
        githubLink: "https://github.com/EmonHira135923/Demo-Portfolio",
        liveLink: "https://emonhira135923.github.io/Demo-Portfolio/",
      },
      {
        id: "fe-07",
        title: "Flower Shop",
        shortDescription:
          "A responsive flower shop landing page with product showcase and cart UI.",
        fullDescription:
          "A frontend e-commerce style project displaying flower products, pricing, and promotional sections. Designed to practice layout, UI design, and responsiveness.",
        image:
          "https://i.ibb.co.com/84RqhG1Q/Final-flower-planet-portfolio.png",
        featured: false,
        techStack: ["HTML", "CSS"],
        githubLink: "https://github.com/EmonHira135923/PH---Assignment---02",
        liveLink: "https://emonhira135923.github.io/PH---Assignment---02/",
      },
      {
        id: "fe-08",
        title: "New Year Landing Page",
        shortDescription:
          "A simple landing page built to practice HTML and CSS layout concepts.",
        fullDescription:
          "A basic practice project focused on understanding layout, spacing, and structure using pure HTML and CSS.",
        image: "https://i.ibb.co.com/9mWv3KnF/Final-New-Year-Portfolio.png",
        featured: false,
        techStack: ["HTML", "CSS"],
        githubLink: "https://github.com/EmonHira135923/New-Year-Project",
        liveLink: "https://emonhira135923.github.io/New-Year-Project/",
      },
      {
        id: "fe-09",
        title: "Logo UI Template",
        shortDescription:
          "A dark-themed UI template landing page for agency-style websites.",
        fullDescription:
          "A simple UI template project featuring a dark theme layout, CTA sections, and basic form UI. Built for practice and design experimentation.",
        image: "https://i.ibb.co.com/svT4YwYb/Final-LOGO-Portfolio.png",
        featured: false,
        techStack: ["HTML", "CSS"],
        githubLink: "https://github.com/EmonHira135923/PH---Assignment---01",
        liveLink: "https://emonhira135923.github.io/PH---Assignment---01/",
      },
      {
        id: "fe-10",
        title: "JobBox",
        shortDescription:
          "A basic job search landing page with listing and application sections.",
        fullDescription:
          "A beginner-level project that simulates a job listing platform with company cards and application flow UI. Focused on basic layout and structure.",
        image: "https://i.ibb.co.com/60s6GZjc/Final-Job-Search.png",
        featured: false,
        techStack: ["HTML", "CSS"],
        githubLink: "https://github.com/EmonHira135923/Job-Search-Project",
        liveLink: "https://emonhira135923.github.io/Job-Search-Project/",
      },
    ],
  },
  // Advanced frontend projects with vanilla JS and React
  {
    id: "advanced-frontend",
    label: "React & Vanilla JS",
    accentColor: "pink",
    projects: [
      {
        id: "af-01",
        title: "Emergency Service Directory",
        shortDescription:
          "A web app that provides quick access to Bangladesh emergency services with call, copy, and history tracking features.",
        fullDescription:
          "Emergency Service Directory is a web application designed to provide users with quick and easy access to important emergency service contacts in Bangladesh. It includes interactive emergency cards for services like police, ambulance, and fire service. Users can copy hotline numbers, simulate calls with a coin-based system, and track their call history. The project features a responsive UI built with Tailwind CSS and DaisyUI, along with dynamic DOM manipulation using vanilla JavaScript.",
        image: "https://i.ibb.co.com/4g0X5N3b/Final-emergency-portfolio.png",
        featured: true,
        techStack: [
          "HTML",
          "Tailwind CSS",
          "DaisyUI",
          "JavaScript",
          "Font Awesome",
        ],
        githubLink: "https://github.com/EmonHira135923",
        liveLink:
          "https://emonhira135923.github.io/Emergency-Service-Directory/",
      },
      {
        id: "af-02",
        title: "Green Earth",
        shortDescription:
          "A tree plantation web app where users can explore plants, add to cart, and donate to support environmental initiatives.",
        fullDescription:
          "Green Earth is a tree plantation web application designed to promote environmental awareness and encourage users to contribute to a greener planet. Users can browse plants, filter by categories, view detailed information in modal popups, and add items to a cart with real-time price calculation. The platform also includes a donation system where users can input their details and contribute to planting trees. Built using vanilla JavaScript with API integration, it demonstrates dynamic DOM manipulation, responsive UI design, and real-world interaction features.",
        image: "https://i.ibb.co.com/Jwh28cC4/Final-Green-Tree-portfolio.png",
        featured: true,
        techStack: [
          "HTML",
          "CSS",
          "Tailwind CSS",
          "DaisyUI",
          "JavaScript",
          "Font Awesome",
          "API Integration",
        ],
        githubLink: "https://github.com/EmonHira135923",
        liveLink: "https://green-earth-website-project.netlify.app/",
      },
      {
        id: "af-03",
        title: "Customer Support Zone",
        shortDescription:
          "A React-based ticket management system for tracking, updating, and resolving customer support requests.",
        fullDescription:
          "Customer Support Zone is a React-based web application designed to manage customer support tickets efficiently. It allows users to view tickets, track their status, and mark them as resolved. The application features dynamic state management where tickets move between 'In Progress' and 'Resolved' sections based on user interaction. Built following a Figma design, it includes responsive layouts, interactive UI components, and toast notifications using React-Toastify for a better user experience.",
        image:
          "https://i.ibb.co.com/8Ls7f1SM/Final-customer-support-zone-portfolio.png",
        featured: true,
        techStack: [
          "React.js",
          "Tailwind CSS",
          "DaisyUI",
          "JavaScript",
          "React-Toastify",
        ],
        githubLink: "https://github.com/EmonHira135923/Customer-Support-Zone",
        liveLink: "https://customer-supports-zone-project.netlify.app/",
      },
      {
        id: "af-04",
        title: "HERO.IO - Mobile & Web Applications",
        shortDescription:
          "A React-based app platform where users can explore, search, and install trending mobile applications with detailed insights.",
        fullDescription:
          "HERO.IO is a modern React-based web application that allows users to discover trending mobile apps, search through a full app catalog, and view detailed information about each app. It features dynamic routing, search and filter functionality, and interactive UI elements. Users can view app details including downloads, ratings, and descriptions, and simulate app installation using LocalStorage. The platform also includes data visualization with Recharts and responsive design for all devices.",
        image: "https://i.ibb.co.com/hFNLkvYW/Final-Hero-app-Portfolio.png",
        featured: true,
        techStack: [
          "React.js",
          "React Router",
          "Tailwind CSS",
          "Recharts",
          "JavaScript",
          "LocalStorage",
          "React Toastify",
        ],
        githubLink: "https://github.com/EmonHira135923/Hero-App",
        liveLink: "https://hero-app-website.netlify.app/",
      },
    ],
  },
];
