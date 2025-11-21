import { Experience, Education, SkillCategory } from './types';

export const EXPERIENCES: Experience[] = [
  {
    company: "Asana Inc",
    role: "Backend Framework Engineer",
    period: "June 2022 - Present",
    description: [
      "Modernizing and improving Asana’s in-house distributed asynchronous task system using MySQL, Redis, and Kubernetes.",
      "Architecting the migration of mutation systems to GraphQL, streamlining API architecture.",
      "Reduced CSV import time by 50% through in-depth performance investigation and optimization.",
      "Developed an internal email record lookup page using React, gRPC, and Flask.",
      "Built a GitHub Action metrics framework using AWS Lambda to automate data collection to Datadog.",
      "Led TypeScript conversion initiatives, converting 95% of Asana’s backend JavaScript into TypeScript."
    ],
    technologies: ["MySQL", "Redis", "Kubernetes", "GraphQL", "React", "gRPC", "Flask", "AWS Lambda", "TypeScript"]
  },
  {
    company: "Dartmouth College",
    role: "ML Researcher",
    period: "June 2024 - Present",
    description: [
      "Researching methods to preserve safety-alignment in pre-trained LLMs during fine-tuning.",
      "Ensuring robustness against adversarial manipulation in Large Language Models."
    ],
    technologies: ["LLMs", "Python", "PyTorch"]
  },
  {
    company: "UC Berkeley",
    role: "ML Researcher",
    period: "August 2020 - June 2022",
    description: [
      "Conducted research on Federated Learning focusing on backdoor attacks in Computer Vision and LLM settings.",
      "Collaborated to develop novel defense mechanisms, leading to a paper published at ICML."
    ],
    technologies: ["Federated Learning", "Computer Vision", "ICML"]
  },
  {
    company: "Lawrence Berkeley National Laboratory",
    role: "Software Development Assistant",
    period: "February 2020 - December 2020",
    description: [
      "Built a Python API for a non-relational database BTrDB to support Pandas development.",
      "Implemented an HTTPS web application with user authentication using Flask.",
      "Assisted in developing a framework for control applications handling parallelization and data logging."
    ],
    technologies: ["Python", "Pandas", "Flask", "SQLite3", "GitHub Actions"]
  },
  {
    company: "Picovoice Inc",
    role: "Software Engineer Intern",
    period: "June 2019 - August 2019",
    description: [
      "Designed and implemented Akita, an offline speech recognition program.",
      "Utilized multiprocessing to analyze 6 hours of audio within 25 minutes on a 4-core machine."
    ],
    technologies: ["C", "Python", "Multiprocessing", "Qt GUI"]
  }
];

export const EDUCATION: Education[] = [
  {
    school: "University of California, Berkeley",
    degree: "MS in Electrical Engineering and Computer Sciences",
    period: "August 2021 - May 2022",
    gpa: "3.96"
  },
  {
    school: "University of California, Berkeley",
    degree: "BA in Computer Science",
    period: "August 2017 - May 2021",
    gpa: "3.88"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "Go", "C", "R", "Risc-V asm", "x-86 asm"]
  },
  {
    name: "Infrastructure & Tools",
    skills: ["Docker", "Kubernetes", "AWS", "Bazel", "Jenkins", "CI/CD", "Terraform", "Git"]
  },
  {
    name: "Backend & Web",
    skills: ["Redis", "MySQL", "MongoDB", "gRPC", "GraphQL", "Flask", "React", "HTML/CSS"]
  },
  {
    name: "Machine Learning",
    skills: ["PyTorch", "LLMs", "Computer Vision", "Pandas", "Federated Learning"]
  }
];

export const CONTACT_INFO = {
  email: "oliversong4@gmail.com",
  phone: "864-382-7139",
  location: "Hayward, CA",
  github: "github.com/linyue-song", // Inferred pattern
  linkedin: "linkedin.com/in/linyue-song" // Inferred pattern
};
