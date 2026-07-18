export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
  featured: boolean;
  category: string;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  duration: string;
  location: string;
  description: string[];
  tags: string[];
}

export interface Achievement {
  id: string;
  date: string;
  title: string;
  description: string;
  category: 'education' | 'milestone' | 'hackathon' | 'leadership';
}

export interface Skill {
  name: string;
  iconName: string; // lucide icon name or simple label
  color: string; // for border/glow
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}
