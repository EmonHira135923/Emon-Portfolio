export const PROJECT_CATEGORIES = [
  // Full stack project done
  {
    id: "fullstack",
    label: "Full Stack",
    accentColor: "cyan",
    projects: [
      {
        id: "fs-01",
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
        id: "fs-02",
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
        id: "fs-03",
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
        id: "fs-04",
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
