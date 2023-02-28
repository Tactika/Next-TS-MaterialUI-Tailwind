import { SyntheticEvent } from "react";

export interface ImageObject {
  url: string;
  caption: string;
}

export interface project {
  id: number;
  name: string;
  description: string;
  images: ImageObject[];
  liveUrl: string;
  githubUrl: string;
}

export interface datasetEvent extends SyntheticEvent {
  dataset: {
    projectid: number;
  };
}

// Skills
export interface SkillsObject {
  languages: Skill[];
  frontend: Skill[];
  backend: Skill[];
  frameworks: Skill[];
  database: Skill[];
  tools: Skill[];
}

export interface Skill {
  name: string;
  description: string;
  icon: string;
}

export interface ProjectObject {
  name: string;
  description: string;
  images: ImageObject[];
  technologies: string[];
  links: LinksArray[];
}

export interface LinksArray {
  name: string;
  url: string;
}
