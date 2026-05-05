export interface Project {
  title: string;
  date: string;
  description: string;
  highlights: string[];
  tech: string[];
  links: {
    github?: string;
    demo?: string;
    web?: string;
  };
  image?: string;
}

export interface Experience {
  role: string;
  company: string;
  date: string;
  description: string;
  highlights: string[];
  tech: string[];
  links?: {
    demo?: string;
    github?: string;
  };
}

export interface Education {
  degree: string;
  major: string;
  school: string;
  gpa: string;
}

export interface Certification {
  name: string;
  image?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface PortfolioData {
  name: string;
  role: string;
  summary: string;
  contact: {
    phone: string;
    email: string;
    github: string;
    linkedin: string;
  };
  skills: SkillGroup[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  languages: {
    name: string;
    level: string;
  }[];
  activities: string[];
}
