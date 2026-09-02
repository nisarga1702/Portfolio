export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI/ML' | 'Full-Stack' | 'IoT & Security' | 'Signal Processing';
  description: string;
  details: string[];
  keySkills: string[];
  award?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; level: number; tags?: string[] }[];
}

export interface Achievement {
  id: string;
  title: string;
  competition: string;
  result: string;
  date: string;
  description: string;
  prizePool?: string;
  badgeColor: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  score: string;
  period: string;
  location: string;
}

export interface InternshipItem {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}
