/** All portfolio copy lives here; the pages only lay it out. */

export const profile = {
  name: "Satish Gurung",
  role: "SOFTWARE DEVELOPER",
  kicker: "A COPENHAGEN STORY · SINCE 2020",
  intro:
    "I build modern web applications and the systems behind them. Operations Engineer at Franklin in Copenhagen, with an MSc in Computer Science from DTU.",
  nowPlaying: "OPERATIONS ENGINEER @ FRANKLIN",
  photo: "/satish.jpg",
  cv: "/Satish_Gurung_CV.pdf",
  email: "satish.grg627@gmail.com",
  links: [
    { label: "LINKEDIN", value: "satish-gurung", href: "https://linkedin.com/in/satish-gurung-3a2781223" },
    { label: "GITHUB", value: "Satish627", href: "https://github.com/Satish627" },
    { label: "PHONE", value: "+45 53 78 17 26", href: "tel:+4553781726" },
  ],
} as const;

/** Home page "Story so far": one card per city. */
export const episodes = [
  {
    id: "EP. 01",
    years: "2020 – 2024",
    city: "HORSENS",
    title: "BEng Software Technology, VIA University College",
    text: "Learned to ship software in teams, from Java desktop apps to a full-stack ordering platform.",
    background: "linear-gradient(160deg, #1B5E6B 0%, #0B0B1E 75%)",
    current: false,
  },
  {
    id: "EP. 02",
    years: "2022",
    city: "AARHUS",
    title: "Frontend Developer Intern, ParkShare",
    text: "Shipped React and Tailwind features for a parking search platform.",
    background: "linear-gradient(160deg, #C8366F 0%, #2A0F3E 75%)",
    current: false,
  },
  {
    id: "EP. 03",
    years: "2024 – 2026",
    city: "LYNGBY",
    title: "MSc Computer Science and Engineering, DTU",
    text: "Thesis on eye-tracking and adaptive reading, graded 12, the top mark.",
    background: "linear-gradient(160deg, #5B2A86 0%, #0B0B1E 75%)",
    current: false,
  },
  {
    id: "EP. 04",
    years: "2025 – NOW",
    city: "COPENHAGEN",
    title: "Nearby Rentals, then Franklin",
    text: "Full-stack features at a rental startup; now Operations Engineer at a Copenhagen fintech.",
    background: "linear-gradient(160deg, #FF7E3D 0%, #C8366F 45%, #2A0F3E 85%)",
    current: true,
  },
] as const;

export const thesis = {
  title: "READING THE READER",
  tag: "MAIN STORY · MASTER'S THESIS",
  meta: "BRIEFING · DTU 2026",
  summary:
    "A full-stack adaptive reading research platform that uses eye-tracking to follow how people read, with a real-time architecture built on React, .NET, Python and WebSockets.",
  stack: "React · .NET · Python · WebSockets",
  href: "https://github.com/Satish627/Master-Thesis-Report",
} as const;

type Project = {
  title: string;
  category: string;
  summary: string;
  stack: readonly string[];
  /** Card art behind the mission number. */
  art: string;
  /** Public repo only; private or missing repos get no link. */
  href?: string;
};

export const projects: readonly Project[] = [
  {
    title: "Process-Oriented Event-Driven Software",
    category: "MASTER'S PROJECT",
    summary: "Course project on process-oriented and event-driven software design, built as a team.",
    stack: ["TypeScript", "Event-driven"],
    art: "linear-gradient(135deg, #C8366F, #4A1A66)",
    href: "https://github.com/MrSachin7/-02268-Process-Oriented-Event-Driven-Software-Project",
  },
  {
    title: "RoboRally Platform",
    category: "TEAM PROJECT",
    summary: "Team-built RoboRally system with separate frontend and backend repositories under a shared org.",
    stack: ["TypeScript", "C#"],
    art: "linear-gradient(135deg, #FF7E3D, #C8366F)",
    href: "https://github.com/SoftwareEngineering2-G",
  },
  {
    title: "MiniCraft",
    category: "GRAPHICS / SYSTEMS",
    summary: "Experimental project exploring mini game and simulation mechanics and system-level implementation.",
    stack: ["Interactive systems"],
    art: "linear-gradient(135deg, #1B5E6B, #12112B)",
  },
  {
    title: "DataSecurityA2",
    category: "SECURITY",
    summary: "Hands-on Java implementation of practical data protection and secure coding concepts.",
    stack: ["Java", "Data security"],
    art: "linear-gradient(135deg, #5B2A86, #C8366F)",
    href: "https://github.com/Satish627/DataSecurityA2",
  },
  {
    title: "ExpenseTrackerApp",
    category: "APP DEVELOPMENT",
    summary: "Personal finance tracker for managing expenses and basic budgeting workflows.",
    stack: ["Java"],
    art: "linear-gradient(135deg, #E0457B, #FF7E3D)",
    href: "https://github.com/Satish627/ExpenseTrackerApp",
  },
  {
    title: "Restaurant Ordering App",
    category: "BACHELOR PROJECT",
    summary: "Full-stack ordering platform with menu browsing, ordering, payment simulation and secure auth.",
    stack: ["MERN", "Redux", "Stripe", "Docker"],
    art: "linear-gradient(135deg, #1B5E6B, #5B2A86)",
  },
  {
    title: "Employee Management System",
    category: "CLIENT-SERVER",
    summary: "Java system with a JavaFX client, RMI communication and PostgreSQL persistence, using MVVM.",
    stack: ["Java", "JavaFX", "PostgreSQL"],
    art: "linear-gradient(135deg, #FF7E3D, #4A1A66)",
  },
  {
    title: "Sauna Monitoring IoT",
    category: "DATA & IOT",
    summary: "Real-time sauna temperature and moisture monitoring with Power BI dashboards on a data warehouse.",
    stack: ["IoT", "Android", "Power BI"],
    art: "linear-gradient(135deg, #12112B, #1B5E6B)",
  },
  {
    title: "Real-Time Chat App",
    category: "HOBBY PROJECT",
    summary: "Secure chat with real-time messaging over Socket.io, authenticated sessions and Zustand state.",
    stack: ["React", "Node.js", "Socket.io"],
    art: "linear-gradient(135deg, #C8366F, #12112B)",
    href: "https://github.com/Satish627/ChatApp",
  },
];

/** Career map: every step, newest first. Jobs link to their briefing, degrees to Training. */
export const missionLog = [
  { id: "05", title: "Operations Engineer", meta: "Franklin · 2026", active: true, href: "#briefings" },
  { id: "04", title: "Student Developer", meta: "Nearby Rentals · 2025–26", active: false, href: "#briefings" },
  { id: "03", title: "MSc + thesis, graded 12", meta: "DTU, Lyngby · 2024–26", active: false, href: "/training/" },
  { id: "02", title: "Frontend Developer Intern", meta: "ParkShare, Aarhus · 2022", active: false, href: "#briefings" },
  { id: "01", title: "BEng Software Technology", meta: "VIA, Horsens · 2020–24", active: false, href: "/training/" },
] as const;

export const jobs = [
  {
    from: "JUL 2026",
    to: "NOW",
    mission: "MISSION 05 · FRANKLIN · COPENHAGEN",
    role: "Operations Engineer",
    active: true,
    summary:
      "Franklin is a Copenhagen fintech building corporate cards, cashback and automated bookkeeping for e-commerce businesses. I work where engineering meets operations, building the systems that keep things running behind the scenes.",
    objectives: [
      "Automate manual workflows and turn one-off fixes into tooling the whole team can use",
      "Dig into data to find where customers get stuck",
      "Work on customer onboarding flows, internal process automation and the data infrastructure behind them",
    ],
  },
  {
    from: "SEP 2025",
    to: "MAY 2026",
    mission: "MISSION 04 · NEARBY RENTALS · COPENHAGEN",
    role: "Student Developer",
    active: false,
    summary: "Developed and shipped full-stack features with Next.js and TypeScript in production.",
    objectives: [
      "Built reusable, responsive UI components for a more consistent experience",
      "Integrated REST APIs and backend services for data-driven features",
      "Improved performance and production stability through optimization, testing and debugging",
    ],
  },
  {
    from: "JAN 2022",
    to: "JUN 2022",
    mission: "MISSION 02 · PARKSHARE · AARHUS",
    role: "Frontend Developer Intern",
    active: false,
    summary:
      "Built responsive frontend features with React and Tailwind CSS for a parking search platform serving users in Aarhus.",
    objectives: [
      "Built reusable UI components for consistency and maintainability",
      "Worked with the design team on modern, user-friendly interfaces",
      "Optimized responsiveness and layout performance across devices",
    ],
  },
] as const;

export const skillGroups = [
  {
    name: "FRONTEND",
    accent: "#2FD6C9",
    items: [
      { name: "Next.js", used: "Nearby Rentals, this portfolio" },
      { name: "React", used: "ParkShare, master's thesis, chat app" },
      { name: "TypeScript", used: "Nearby Rentals, RoboRally" },
      { name: "Tailwind CSS", used: "ParkShare, this portfolio" },
      { name: "HTML & CSS", used: "Every web project" },
    ],
  },
  {
    name: "BACKEND",
    accent: "#FF3D8B",
    items: [
      { name: "Node.js", used: "Real-time chat app" },
      { name: ".NET & Python", used: "Master's thesis platform" },
      { name: "Java", used: "VIA projects, DataSecurityA2" },
      { name: "PostgreSQL & MongoDB", used: "Employee system, chat and ordering apps" },
      { name: "REST APIs", used: "Nearby Rentals" },
    ],
  },
  {
    name: "TOOLS",
    accent: "#FFC56B",
    items: [
      { name: "Git & GitHub", used: "Every project" },
      { name: "WebSockets / Socket.io", used: "Master's thesis, chat app" },
      { name: "Docker", used: "Restaurant ordering app" },
      { name: "Redux / Zustand", used: "Ordering app, chat app" },
      { name: "Stripe API", used: "Restaurant ordering app" },
    ],
  },
] as const;

export const bonusPerks = ["Agile teams", "Code reviews", "Process automation", "Data analysis"] as const;

export const schools = [
  {
    savePoint: "SAVE POINT 02 · 2024 – 2026 · COPENHAGEN",
    watermark: "LYNGBY",
    degree: "MSc Computer Science and Engineering",
    school: "Technical University of Denmark (DTU)",
    summary:
      "Focused on software engineering and data communications. Thesis “Reading the Reader”: an eye-tracking reading research platform.",
    badges: ["GRADUATED", "THESIS GRADE 12"],
    focus: ["React", ".NET", "Python", "WebSockets"],
    background: "linear-gradient(160deg, #5B2A86 0%, #12112B 70%)",
    featured: true,
  },
  {
    savePoint: "SAVE POINT 01 · 2020 – 2024 · HORSENS",
    watermark: "HORSENS",
    degree: "BEng Software Technology",
    school: "VIA University College",
    summary: "Software engineering principles, object-oriented development and collaborative semester projects.",
    badges: ["GRADUATED"],
    focus: ["Object-oriented programming", "Agile", "Team projects"],
    background: "linear-gradient(160deg, #1B5E6B 0%, #12112B 70%)",
    featured: false,
  },
] as const;
