import type { PortfolioData } from "../types";
import childhoodImg from "../assets/project-childhood.png";
import studforceImg from "../assets/studforce.png";

export const portfolioData: PortfolioData = {
  name: "Chanmatha Sanguansap",
  role: "Junior Full-Stack Developer",
  summary:
    "Junior Full-Stack Developer with experience building and deploying real-world web applications and LINE-integrated systems for healthcare and operational workflows. Experienced in both frontend and backend development, including RESTful APIs, AI-integrated features, and containerized deployment. Fast learner with strong problem-solving skills, able to adapt quickly, leverage AI tools to improve development efficiency, and contribute effectively within development teams.",
  contact: {
    phone: "0631174147",
    email: "chanmathaearth@gmail.com",
    github: "https://github.com/chanmathaearth",
    linkedin: "https://www.linkedin.com/in/chanmatha-sanguansap",
  },
  skills: [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "Vue.js", "Tailwind CSS"],
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
      skills: ["Docker", "Git", "Postman", "Swagger", "Jest"],
    },
    {
      category: "Cloud",
      skills: ["GCP", "Vercel"],
    },
  ],
  projects: [
    {
      title: "Child Development Monitoring & Evaluation System",
      date: "Apr 2025 - Apr 2026",
      description:
        "Developed a full-stack child development monitoring system actively used by healthcare staff, in collaboration with the Faculty of Nursing, Burapha University.",
      highlights: [
    "Built a full-stack child development monitoring platform for healthcare staff to manage users, classrooms, child records, dashboards, and assessment workflows.",
    "Developed weight and height assessment features with graph-based visualization based on Thai Ministry of Public Health growth standards.",
    "Integrated LINE LIFF and Gemini LLM to build a parent-facing chatbot, allowing parents to securely access personalized child development data through LINE.",
    "Replaced manual paper-based assessment workflows with a centralized web-based system, eliminating paper records and improving data accessibility for healthcare staff.",
    "Deployed containerized applications using Docker on GCP VM and Vercel."
      ],
      tech: ["React", "Django REST Framework", "MySQL", "Docker", "GCP", "LINE API", "LIFF", "LLM Gemini"],
      links: {
        github: "https://github.com/chanmathaearth/Youthapp",
        demo: "https://drive.google.com/file/d/11hUyFy-Z7475JLHbw8-tZTXDyPfgPSGB/view?pli=1",
        web: "https://youthapp-web.vercel.app/",
      },
      image: childhoodImg,
    },
    {
      title: "Studforce — Football Boots E-Commerce Platform",
      date: "Jan 2024 – Mar 2024",
      description:
        "Developed a full-stack e-commerce web application for football boots with a modern UI, secure authentication, and integrated online payment system.",
      highlights: [
        "Implemented JWT authentication, shopping cart, checkout flow, and order history tracking",
        "Built product browsing and filtering by brand, size, and category",
        "Integrated Stripe payment gateway for secure online transactions",
        "Designed admin panel for product and order management",
      ],
      tech: ["Vue.js", "Tailwind CSS", "Django REST Framework", "PostgreSQL", "JWT", "Stripe", "Docker"],
      links: {
        web: "https://studforce.vercel.app/",
        github: "https://github.com/chanmathaearth/STUDFORCE_FE.git",
      },
      image: studforceImg,
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
    "Implemented inventory tracking features for monitoring stock levels and expiration status of medical supplies.",
    "Developed Purchase Order (PO) and requisition workflows to support laboratory procurement processes.",
    "Built responsive internal web interfaces and reporting features for inventory management operations.",
    "Collaborated in an Agile team environment with developers and designers.",
    "Helped reduce manual inventory management tasks through centralized web-based workflows."
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
  activities: [
    "Created coding materials and helped teach programming basics in coding camps",
    "Participated in music and sports competitions, demonstrating teamwork and discipline",
  ],
};
