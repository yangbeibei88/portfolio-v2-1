import {
  SiBootstrap,
  SiCss3,
  SiExpress,
  SiHtml5,
  SiLeaflet,
  SiNestjs,
  SiSass,
  SiSupabase,
  SiTailwindcss,
  SiWordpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiNodedotjs,
  SiDeno,
  SiPhp,
  SiJavascript,
  SiTypescript,
  SiReact,
} from "react-icons/si";
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
  | "WordPress";

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

interface StackItem {
  name: StackKey;
  icon: IconType;
  color?: string;
  bgColor?: string;
}

type StackMap = {
  [key in StackKey]: StackItem;
};

export const stackMap: StackMap = {
  HTML: { name: "HTML", icon: SiHtml5, color: "#f06524", bgColor: "#ffffff" },
  CSS: { name: "CSS", icon: SiCss3 },
  React: { name: "React", icon: SiReact },
  TailwindCSS: { name: "TailwindCSS", icon: SiTailwindcss },
  BootStrap: { name: "BootStrap", icon: SiBootstrap },
  MongoDB: { name: "MongoDB", icon: SiMongodb },
  MySQL: { name: "MySQL", icon: SiMysql },
  PostgreSQL: { name: "PostgreSQL", icon: SiPostgresql },
  NodeJS: { name: "NodeJS", icon: SiNodedotjs },
  Deno: { name: "Deno", icon: SiDeno },
  JavaScript: {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#f6df17",
    bgColor: "#000000",
  },
  TypeScript: { name: "TypeScript", icon: SiTypescript },
  PHP: { name: "PHP", icon: SiPhp },
  ExpressJS: { name: "ExpressJS", icon: SiExpress },
  Leaflet: { name: "Leaflet", icon: SiLeaflet, color: "#82c041" },
  NestJS: { name: "NestJS", icon: SiNestjs },
  NextJS: { name: "NextJS", icon: SiNestjs },
  SASS: { name: "SASS", icon: SiSass, color: "#cd669b" },
  Supabase: { name: "Supabase", icon: SiSupabase },
  WordPress: { name: "WordPress", icon: SiWordpress },
};
