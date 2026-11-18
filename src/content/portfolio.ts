/** All portfolio copy lives here; the components only lay it out. */

export const profile = {
  name: "Satish Gurung",
  badge: "PLAYER 1 · COPENHAGEN, DK",
  headline: "Software developer building modern web applications. Based in Copenhagen, Denmark.",
  greeting: "Hi! I'm Satish. Scroll down to play through my work.",
  stats: [
    { label: "CLASS", value: "Software Developer" },
    { label: "GUILD", value: "Operations Engineer, Franklin" },
    { label: "TRAINING", value: "MSc Computer Science, DTU" },
    { label: "MAIN GEAR", value: "Next.js, TypeScript, React, Node.js" },
  ],
  cv: "/Satish_Gurung_CV.pdf",
  email: "satish.grg627@gmail.com",
  links: [
    { label: "PHONE", value: "+45 53 78 17 26", href: "tel:+4553781726" },
    { label: "LINKEDIN", value: "satish-gurung", href: "https://linkedin.com/in/satish-gurung-3a2781223" },
    { label: "GITHUB", value: "Satish627", href: "https://github.com/Satish627" },
  ],
} as const;

export const thesis = {
  title: "READING THE READER",
  summary:
    "A full-stack adaptive reading research platform that uses eye-tracking to follow how people read, with a real-time architecture built on React, .NET, Python and WebSockets.",
  stats: [
    { label: "GRADE", value: "12 (top grade)", highlight: true },
    { label: "SCHOOL", value: "DTU, 2026", highlight: false },
    { label: "STACK", value: "React · .NET · Python · WebSockets", highlight: false },
  ],
  href: "https://github.com/Satish627/Master-Thesis-Report",
} as const;

type Project = {
  title: string;
  category: string;
  summary: string;
  stack: readonly string[];
  /** Public repo only; private or missing repos get no link. */
  href?: string;
};

export const projects: readonly Project[] = [
  {
    title: "Process-Oriented Event-Driven Software Project",
    category: "Master's project",
    summary: "Course project on process-oriented and event-driven software design, built as a team.",
    stack: ["TypeScript", "Event-driven", "Process-oriented"],
    href: "https://github.com/MrSachin7/-02268-Process-Oriented-Event-Driven-Software-Project",
  },
  {
    title: "RoboRally Platform",
    category: "Master's team project",
    summary: "Team-built RoboRally system with separate frontend and backend repositories under a shared org.",
    stack: ["TypeScript", "C#", "Team project"],
    href: "https://github.com/SoftwareEngineering2-G",
  },
  {
    title: "MiniCraft",
    category: "Graphics / systems",
    summary: "Experimental project exploring mini game and simulation mechanics and system-level implementation.",
    stack: ["Interactive systems", "Architecture"],
  },
  {
    title: "DataSecurityA2",
    category: "Security assignment",
    summary: "Hands-on Java implementation of practical data protection and secure coding concepts.",
    stack: ["Java", "Data security"],
    href: "https://github.com/Satish627/DataSecurityA2",
  },
  {
    title: "ExpenseTrackerApp",
    category: "App development",
    summary: "Personal finance tracker for managing expenses and basic budgeting workflows.",
    stack: ["Java", "App design"],
    href: "https://github.com/Satish627/ExpenseTrackerApp",
  },
  {
    title: "Restaurant Ordering App",
    category: "Bachelor project",
    summary: "Full-stack ordering platform with menu browsing, ordering, payment simulation and secure auth.",
    stack: ["MERN", "Redux", "Stripe", "Docker"],
  },
  {
    title: "Employee Management System",
    category: "Client-server",
    summary: "Java system with a JavaFX client, RMI communication and PostgreSQL persistence, using MVVM.",
    stack: ["Java", "JavaFX", "RMI", "PostgreSQL"],
  },
  {
    title: "Sauna Monitoring IoT",
    category: "Data & IoT",
    summary: "Real-time sauna temperature and moisture monitoring with Power BI dashboards on a data warehouse.",
    stack: ["IoT", "Android", "Power BI", "ETL"],
  },
  {
    title: "Real-Time Chat App",
    category: "Hobby project",
    summary: "Secure chat with real-time messaging over Socket.io, authenticated sessions and Zustand state.",
    stack: ["React", "Node.js", "Socket.io", "MongoDB"],
    href: "https://github.com/Satish627/ChatApp",
  },
];

export const jobs = [
  {
    period: "JUL 2026 - NOW",
    type: "CURRENT ROLE",
    role: "Operations Engineer",
    where: "Franklin · Copenhagen",
    summary:
      "Franklin is a Copenhagen fintech building corporate cards, cashback and automated bookkeeping for e-commerce businesses. I work where engineering meets operations, building the systems that keep things running behind the scenes.",
    highlights: [
      "Automate manual workflows and turn one-off fixes into tooling the whole team can use.",
      "Dig into data to find where customers get stuck.",
      "Work on customer onboarding flows, internal process automation and the data infrastructure behind them.",
    ],
  },
  {
    period: "SEP 2025 - MAY 2026",
    type: "PART-TIME",
    role: "Student Developer",
    where: "Nearby Rentals · Copenhagen",
    summary: "Developed and shipped full-stack features with Next.js and TypeScript in production.",
    highlights: [
      "Built reusable, responsive UI components for a more consistent experience.",
      "Integrated REST APIs and backend services for data-driven features.",
      "Improved performance and production stability through optimization, testing and debugging.",
    ],
  },
  {
    period: "JAN 2022 - JUN 2022",
    type: "INTERNSHIP",
    role: "Frontend Developer Intern",
    where: "ParkShare · Aarhus",
    summary:
      "Built responsive frontend features with React and Tailwind CSS for a parking search platform serving users in Aarhus.",
    highlights: [
      "Built reusable UI components for consistency and maintainability.",
      "Worked with the design team on modern, user-friendly interfaces.",
      "Optimized responsiveness and layout performance across devices.",
    ],
  },
] as const;

export const skillGroups = [
  { name: "FRONTEND", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML & CSS"] },
  { name: "BACKEND", items: ["Node.js", "Java", "PostgreSQL", "MongoDB", "REST APIs"] },
  { name: "TOOLS", items: ["Git & GitHub", "Docker", "Redux / Zustand", "Socket.io", "Stripe API"] },
] as const;

export const schools = [
  {
    period: "2024 - 2026",
    status: "GRADUATED",
    school: "Technical University of Denmark",
    program: "MSc Computer Science and Engineering · Copenhagen",
    summary:
      "Focused on software engineering and data communications. Thesis “Reading the Reader”: an eye-tracking reading research platform, graded 12, the top Danish grade.",
    focus: ["React", ".NET", "Python", "WebSockets"],
  },
  {
    period: "2020 - 2024",
    status: "GRADUATED",
    school: "VIA University College",
    program: "BEng Software Technology · Horsens",
    summary:
      "Software engineering principles, object-oriented development and collaborative project delivery.",
    focus: ["Programming", "Data structures", "Team projects"],
  },
] as const;
