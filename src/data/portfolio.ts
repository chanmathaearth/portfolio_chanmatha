import type { PortfolioData } from "../types";
import childhoodImg from "../assets/project-childhood.png";

export const portfolioData: PortfolioData = {
  name: "Chanmatha Sanguansap",
  role: "Junior Full-Stack Developer",
  summary:
    "Junior Full-Stack Developer with hands-on experience building real-world applications used by healthcare staff and end users. Experienced in developing and deploying containerized web systems across frontend and backend, with a focus on practical, user-centered solutions. Fast learner with strong problem-solving skills, ready to contribute in a professional development team.",
  contact: {
    phone: "0631174147",
    email: "chanmathaearth@gmail.com",
    github: "https://github.com/chanmathaearth",
    linkedin: "https://www.linkedin.com/in/chanmatha-sanguansap",
  },
  skills: [
    {
      category: "Frontend",
      skills: ["React", "Vue.js", "Next.js", "Tailwind CSS"],
    },
    {
      category: "Backend",
      skills: ["Django REST Framework", "Node.js", "Express", "NestJS"],
    },
    {
      category: "Database",
      skills: ["PostgreSQL", "MySQL", "MongoDB"],
    },
    {
      category: "Tools",
      skills: ["Docker", "Git", "Postman", "Swagger"],
    },
    {
      category: "Cloud",
      skills: ["GCP", "Vercel"],
    },
  ],
  projects: [
    {
      title: "Child Development Monitoring & Evaluation System",
      date: "Aug 2025 - Aug 2026",
      description:
        "Developed a full-stack child development monitoring system actively used by healthcare staff, in collaboration with the Faculty of Nursing, Burapha University.",
      highlights: [
        "Built RESTful APIs and frontend using Django REST Framework and React",
        "Integrated LINE chatbot with LLM Gemini to provide personalized insights for parents",
        "Reduced reliance on paper-based processes by digitizing data management",
        "Improved workflow efficiency for healthcare staff",
        "Deployed containerized applications using Docker on GCP VM and Vercel",
      ],
      tech: ["React", "Django REST Framework", "MySQL", "Docker", "GCP", "LINE API", "LLM Gemini"],
      links: {
        github: "https://github.com/chanmathaearth/Youthapp",
        demo: "https://drive.google.com/file/d/11hUyFy-Z7475JLHbw8-tZTXDyPfgPSGB/view?pli=1",
      },
      image: childhoodImg,
    },
  ],
  experience: [
    {
      role: "Full Stack Developer Intern",
      company: "FIRMER CO TH",
      date: "Nov 2024 - Mar 2025",
      description:
        "Developed a full-stack Smart Medical Inventory system for hospital equipment management using React, Node.js, and MongoDB.",
      highlights: [
        "Implemented Purchase Order PO management system",
        "Built inventory tracking and reporting features",
        "Developed responsive web application for procurement workflows",
        "Collaborated in Agile team environment with developers and designers",
        "Improved workflow efficiency and reduced manual errors in procurement process",
      ],
      tech: ["React", "Node.js Express", "MongoDB", "Docker", "Storybook"],
      links: {
        demo: "https://www.youtube.com/watch?v=fFXxmLqnIyI",
      },
    },
  ],
  education: [
    {
      degree: "Bachelor of Science Information Technology",
      major: "Information Technology",
      school: "King Mongkut's Institute of Technology Ladkrabang",
      gpa: "3.05",
    },
  ],
  certifications: [
    {
      name: "Huawei Certified DataCom Associate HCCDA",
      image: "https://media.licdn.com/dms/image/v2/D562DAQEM75c0131mGg/profile-treasury-image-shrink_800_800/B56Zz1tVXXI0AY-/0/1773648828477?e=1778590800&v=beta&t=xZVCQbMBRE8W-wxVWdJD9ZG5u8-EpVhLSmr3ByUpsc0",
    },
  ],
  languages: [
    { name: "Thai", level: "Native" },
    { name: "English", level: "B2 Upper Intermediate" },
  ],
};
