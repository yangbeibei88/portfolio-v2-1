import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

export type Mode = "light" | "dark" | "system";

export type StackKey =
  | "HTML"
  | "CSS"
  | "SASS"
  | "React"
  | "TailwindCSS"
  | "BootStrap"
  | "NextJS"
  | "TypeScript"
  | "JavaScript"
  | "PHP"
  | "ExpressJS"
  | "NestJS"
  | "NodeJS"
  | "Deno"
  | "MySQL"
  | "PostgreSQL"
  | "MongoDB"
  | "Supabase"
  | "Leaflet"
  | "WordPress"
  | "PayPal"
  | "Pug"
  | "MVC"
  | "OOP"
  | "CRUD";

export type ExperienceType = {
  id: number;
  type: "work" | "study";
  position: string | null;
  description: string | null;
  desc_array: string[] | null;
  org: string | null;
  location: string | null;
  started_at: string;
  ended_at: string | null;
};

export type ProjectType = {
  id: number;
  project_name: string;
  technologies: StackKey[] | null;
  description: string | null;
  images: { position: number; image_path: string }[];
  demo_url: string | null;
  codebase_url: string | null;
};

export interface StackItem {
  name: StackKey;
  icon: IconType;
  color?: string;
  bgColor?: string;
}

export type StackMap = {
  [key in StackKey]: StackItem;
};

export type SkillType = {
  id: number;
  skill_name: string;
  description: string | null;
  icon: string;
};
