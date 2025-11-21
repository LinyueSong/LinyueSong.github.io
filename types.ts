export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies?: string[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  gpa: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}
