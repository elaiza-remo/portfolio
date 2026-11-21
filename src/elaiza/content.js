// All the words and links on the site live here. Edit this file to update the portfolio.

export const links = {
  email: "remoelaiza@gmail.com",
  github: "https://github.com/elaiza-remo",
  linkedin: "https://www.linkedin.com/in/elaiza-remo-2836b1349",
  resume:
    "https://drive.google.com/file/d/1GwIdqZgOB_0ueFm1Q_LNsHujJmTvPcnE/view?usp=sharing"
};

// Pictures go in public/assets/.
//   image: a screenshot that fills the box (16:10 looks best)
//   icon:  a logo/icon shown on a tile, used until you have a screenshot
//   neither: shows a "Screenshots coming soon" card
//   wip: true shows "work in progress" tape across the box
export const projects = [
  {
    title: "Shelf: A Personal Reading Library",
    category: "Full-stack · Web app",
    status: "Live",
    desc: "Track everything you read — books, articles, psychology papers. Take notes, save quotes, link sources together, generate citations, and share your shelf publicly, with friends, or keep it private.",
    stack: "Next.js · React · TypeScript · Tailwind CSS · Supabase · Vercel",
    link: { label: "Visit Shelf", url: "https://shelf-ashy-six.vercel.app/" },
    site: "shelf-ashy-six.vercel.app", // shown in the little browser frame
    image: "shelf.png",
    why: "I read lots. On different topics. Using different sources. Nowhere I could keep track of all of them in one place."
  },
  {
    title: "eFit: Fitness Analytics Platform",
    category: "Data · AI coaching",
    status: "In progress", // change to "Live" once deployed
    desc: "A dashboard that pulls biometric data from Apple HealthKit and Strava to visualize training load and generate AI-powered coaching recommendations.",
    stack: "Next.js · React · TypeScript · Tailwind CSS · REST APIs",
    link: null, // e.g. { label: "Visit eFit", url: "https://..." }
    wip: true, // shows "work in progress" tape over the picture box
    site: "efit",
    why: "I love staying active and keeping track of my stats + I'm a visual learner + learning how to integrate AI = eFit"
  },
  {
    title: "Workbench: Interview Prep & Dev Journal",
    category: "Full-stack · Productivity",
    status: "Live",
    desc: "A personal workspace for getting interview-ready: a story bank and practice mode for technical and behavioural questions, growing into a project journal that captures notes, commits, why decisions were made, issues hit, and where AI was used.",
    stack: "Django · Python · Supabase · Vercel",
    link: { label: "Try the live demo", url: "https://workbench-theta-five.vercel.app/" },
    site: "workbench-theta-five.vercel.app",
    image: "workbench.png",
    why: "Interview preparation is stressful enough, keeping track of my interview questions and answers, as well as keeping track of my projects"
  }
];

export const pillars = [
  {
    title: "FRONTEND",
    text: "Responsive, intuitive interfaces with React, Next.js, TypeScript and Tailwind, with attention to usability and detail."
  },
  {
    title: "BACKEND",
    text: "Reliable APIs and services with Spring Boot, Django and Python, written to be clean and maintainable."
  },
  {
    title: "DATA",
    text: "Data analysis and forecasting with Python, SQL and Pandas, turning raw data into actionable insights."
  }
];

export const jobs = [
  {
    current: true,
    dates: "Jul 2026 — Present",
    role: "Technical Support Specialist",
    org: "Catalis",
    desc: "Primary technical contact for SaaS users. Diagnosing web app issues, triaging bugs, and writing support docs."
  },
  {
    dates: "Sep — Dec 2025",
    role: "Full Stack Software Developer",
    org: "Nestuity · University of Alberta",
    desc: "Built a parenting supply-tracker with Spring Boot, Next.js, PostgreSQL and Docker. Features usage forecasting, price analysis and a responsive dashboard."
  },
  {
    dates: "Jun 2023 — Aug 2025",
    role: "Science Summer Camp Leader",
    org: "University of Alberta",
    desc: "Designed and led camp activities, teaching kids hands-on computer skills and internet safety."
  }
];

export const education = {
  dates: "Sep 2021 — May 2026",
  degree: "BSc in Computing Science",
  school: "University of Alberta · Edmonton",
  points: [
    "Machine learning and large language models: model training, evaluation and modern AI applications",
    "Data structures and algorithms, with a focus on efficient problem-solving",
    "Software development: object-oriented design, testing and team-based Agile development",
    "Database management, including relational design and SQL"
  ]
};

export const skills = [
  { label: "Languages", items: ["Python", "Java", "TypeScript", "SQL", "HTML", "CSS"] },
  { label: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
  { label: "Backend", items: ["Spring Boot", "Django", "PostgreSQL", "Supabase", "REST APIs", "Docker"] },
  { label: "Data & AI", items: ["Pandas", "Data pipelines", "Machine learning", "LLMs"] },
  { label: "Tools", items: ["GitHub", "Vercel", "Browser dev tools", "Agile"] }
];

export const ticker =
  "React · Next.js · TypeScript · Spring Boot · Django · Python · SQL · Docker · Supabase · Pandas · Tailwind · ";
