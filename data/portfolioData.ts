export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI / Full Stack' | 'MERN Stack' | 'Web Apps';
  date: string;
  summary: string;
  description: string;
  techStack: string[];
  keyHighlights: string[];
  architectureNotes?: string;
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
  metrics?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  type: string;
  location: string;
  period: string;
  bullets: string[];
  skills: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  details?: string;
}

export interface Achievement {
  id: string;
  title: string;
  platform: string;
  metric: string;
  description: string;
  icon: string;
  link?: string;
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: { name: string; level: number; iconName?: string; highlight?: boolean }[];
}

export const PERSONAL_INFO = {
  name: "Santu Pramanik",
  title: "Full-Stack Developer & AI Integrations Specialist",
  tagline: "Building scalable MERN stack solutions, TypeScript architectures, and intelligent AI workflows.",
  location: "Bengaluru, Karnataka 560024",
  phone: "+91-9832487454",
  email: "santu700141@gmail.com",
  linkedin: "https://www.linkedin.com/in/santu-pramanik/",
  github: "https://github.com/santupramanik1",
  leetcode: "https://leetcode.com/u/santu700141",
  careerObjective: "Innovative and detail-oriented Full-Stack Developer with a strong foundation in the MERN stack, TypeScript, and AI integrations. Passionate about building scalable, responsive web applications and writing clean, modular code. Seeking to leverage hands-on project experience and strong problem-solving skills to drive impactful software solutions at a forward-thinking tech company.",
  stats: [
    { label: "LeetCode Solved", value: "300+", color: "from-amber-400 to-orange-500" },
    { label: "Backend Uptime", value: "99.9%", color: "from-emerald-400 to-teal-500" },
    { label: "MCA CGPA", value: "9.05", color: "from-cyan-400 to-blue-500" },
    { label: "BCA CGPA", value: "8.76", color: "from-purple-400 to-indigo-500" },
  ]
};

export const EXPERIENCES: Experience[] = [
  {
    id: "inquesta-intern",
    role: "Web Development Intern",
    company: "Inquesta",
    type: "Remote",
    location: "Remote",
    period: "Apr 2026 – Jun 2026",
    bullets: [
      "Co-developed a highly responsive EdTech platform scaling to 50+ users, establishing a rigorous staging pipeline that ensured 99.9% backend uptime over a 30-day period.",
      "Designed optimized relational database schemas and implemented clean, modular code architectures to manage complex course catalogs, transactions, and site alerts."
    ],
    skills: ["React.js", "Node.js", "Express.js", "MySQL", "REST API", "Database Schemas", "System Reliability"]
  }
];

export const EDUCATION_LIST: Education[] = [
  {
    id: "mca",
    degree: "Master of Computer Applications (MCA)",
    institution: "Presidency College (Autonomous)",
    location: "Bengaluru, Karnataka",
    period: "Nov 2024 – July 2026",
    grade: "CGPA: 9.05",
    details: "Advanced software engineering, distributed systems, cloud applications, and AI integrations."
  },
  {
    id: "bca",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Panskura Banamali College (Autonomous)",
    location: "Panskura, West Bengal",
    period: "Jun 2021 – Jun 2024",
    grade: "CGPA: 8.76",
    details: "Core Computer Science foundation: Data Structures, Algorithms, DBMS, OOPs in C++/Java, and Web Technologies."
  }
];

export const PROJECTS: Project[] = [
  {
    id: "hireiq",
    title: "HireIQ",
    subtitle: "AI-Driven Recruitment Platform",
    category: "AI / Full Stack",
    date: "Apr 2026 – Jun 2026",
    summary: "Comprehensive AI-powered recruitment system engineered to automate resume screening, candidate evaluation, and intelligent interview workflows.",
    description: "HireIQ is an end-to-end recruitment solution designed to radically reduce time-to-hire. Built with a modern TypeScript frontend and Python/Node.js micro-architecture, it leverages LangChain and Generative AI models to analyze candidate resumes against job descriptions with high accuracy.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Python", "TypeScript", "LangChain", "Generative AI"],
    keyHighlights: [
      "Architected a comprehensive AI-powered recruitment system locally to streamline candidate evaluation and automated hiring workflows.",
      "Designed a modern, highly responsive frontend dashboard while establishing secure backend REST APIs utilizing clean, modular code structures.",
      "Developed core integration modules for automated resume screening and intelligent candidate interviewing features."
    ],
    architectureNotes: "Uses Node.js REST API gateway with Python LangChain agents processing resume embeddings and scoring candidates dynamically.",
    demoUrl: "https://hire-iq-pi.vercel.app/",
    githubUrl: "https://github.com/santupramanik1/HireIQ",
    featured: true,
    metrics: "Automates candidate scoring with LLM agent pipelines"
  },
  {
    id: "cognisketch",
    title: "CogniSketch",
    subtitle: "AI Chat & Image Generation Platform",
    category: "AI / Full Stack",
    date: "Oct 2025 – Nov 2025",
    summary: "Full-stack generative AI suite integrating Google Gemini and ImageKit with dynamic real-time conversation and AI artwork synthesis.",
    description: "CogniSketch seamlessly combines conversational intelligence with image generation. It features credit-based user subscription management integrated directly with Stripe, allowing seamless pay-per-use and tier upgrades.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Google Gemini API", "ImageKit", "Stripe"],
    keyHighlights: [
      "Engineered a full-stack web platform integrating Google Gemini and ImageKit to support real-time conversational interfaces and dynamic visual synthesis.",
      "Implemented a secure, Stripe-based credit system to efficiently manage tiered user subscription plans and API usage tracking."
    ],
    architectureNotes: "Stripe Webhook integration for atomic credit refills, paired with streaming responses from Gemini API and asset CDN optimization via ImageKit.",
    demoUrl: "https://cogni-sketch.vercel.app/",
    githubUrl: "https://github.com/santupramanik1/CogniSketch",
    featured: true,
    metrics: "Tiered subscription model with real-time credit tracking"
  },
  {
    id: "taskpilot",
    title: "TaskPilot",
    subtitle: "Smart Task Management Platform",
    category: "MERN Stack",
    date: "Jun 2025 – Jul 2025",
    summary: "Feature-rich productivity dashboard with JWT security, custom task workflows, priority matrix sorting, and deadline notifications.",
    description: "TaskPilot is a smart task manager built for power users. It offers drag-and-drop workflow status, granular filtering, priority calculation, and secure JWT session management.",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "JWT"],
    keyHighlights: [
      "Developed secure user authentication and account management workflows leveraging JWT and RESTful APIs.",
      "Engineered comprehensive task management features, including advanced sorting by due date and priority."
    ],
    architectureNotes: "Stateful JWT auth with HTTP-only tokens, index-optimized MongoDB queries for rapid sorting and drag-and-drop state updates.",
    demoUrl: "https://task-manager-tau-snowy-58.vercel.app/",
    githubUrl: "https://github.com/santupramanik1/Task_Management",
    featured: true,
    metrics: "Optimized sorting queries & secure JWT auth"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Languages",
    description: "Core programming languages for algorithmic problem solving and web applications",
    skills: [
      { name: "TypeScript", level: 92, highlight: true },
      { name: "JavaScript (ES6+)", level: 95, highlight: true },
      { name: "C++", level: 88, highlight: true },
      { name: "Python", level: 85, highlight: true },
      { name: "Java", level: 80 }
    ]
  },
  {
    name: "Frontend Development",
    description: "Crafting fast, accessible, high-converting interactive web interfaces",
    skills: [
      { name: "React.js", level: 95, highlight: true },
      { name: "Next.js", level: 90, highlight: true },
      { name: "Tailwind CSS", level: 95, highlight: true },
      { name: "HTML5 & CSS3", level: 98 },
      { name: "Framer Motion", level: 85 }
    ]
  },
  {
    name: "Backend Development",
    description: "Designing robust microservices, REST APIs, and database models",
    skills: [
      { name: "Node.js", level: 92, highlight: true },
      { name: "Express.js", level: 94, highlight: true },
      { name: "REST API Design", level: 95, highlight: true },
      { name: "JWT Authentication", level: 90 },
      { name: "Database Schema Design", level: 90 }
    ]
  },
  {
    name: "Databases",
    description: "Relational and document storage solutions for scalable data systems",
    skills: [
      { name: "MongoDB", level: 90, highlight: true },
      { name: "MySQL", level: 88, highlight: true }
    ]
  },
  {
    name: "Tools & Cloud",
    description: "DevOps, cloud hosting, API testing, and version control tools",
    skills: [
      { name: "Git & GitHub", level: 94, highlight: true },
      { name: "Vercel", level: 90 },
      { name: "Render", level: 85 },
      { name: "Postman", level: 92 },
      { name: "AWS S3", level: 82 }
    ]
  },
  {
    name: "AI & Innovation",
    description: "Integrating Large Language Models and automated developer tools",
    skills: [
      { name: "Generative AI", level: 88, highlight: true },
      { name: "LLMs / LangChain", level: 86, highlight: true },
      { name: "Claude Code", level: 90, highlight: true }
    ]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "leetcode",
    title: "Competitive Programming & DSA Mastery",
    platform: "LeetCode",
    metric: "300+ Problems Solved",
    description: "Solved 300+ Data Structures & Algorithms challenges on LeetCode covering dynamic programming, graph algorithms, trees, and system logic optimization.",
    icon: "Code2",
    link: "https://leetcode.com/u/santu700141"
  },
  {
    id: "academic-mca",
    title: "Academic Excellence - MCA",
    platform: "Presidency College, Bengaluru",
    metric: "CGPA 9.05",
    description: "Maintained outstanding academic record in MCA (2024–2026) specializing in modern web architecture, AI integrations, and cloud systems.",
    icon: "GraduationCap"
  },
  {
    id: "uptime-inquesta",
    title: "99.9% Backend Uptime Milestone",
    platform: "Inquesta Internship",
    metric: "50+ Active Users",
    description: "Architected staging pipelines and database schemas ensuring 99.9% backend uptime over a 30-day production scaling window.",
    icon: "Server"
  }
];
