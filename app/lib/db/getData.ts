import path from "node:path";
import fs from "fs/promises";
import { ProjectType, ExperienceType, SkillType } from "@/lib/types";

export async function getProjects(): Promise<ProjectType[]> {
  const filePath = path.join(process.cwd(), "app/lib/db/data/projects.json");
  const data = await fs.readFile(filePath, "utf-8");
  const parsed: ProjectType[] = JSON.parse(data);
  return parsed;
}
export async function getExperiences(): Promise<ExperienceType[]> {
  const filePath = path.join(process.cwd(), "app/lib/db/data/experiences.json");
  const data = await fs.readFile(filePath, "utf-8");
  const parsed: ExperienceType[] = JSON.parse(data);
  return parsed;
}

export async function getSkills(): Promise<SkillType[]> {
  const filePath = path.join(process.cwd(), "app/lib/db/data/skills.json");
  const data = await fs.readFile(filePath, "utf-8");
  const parsed: SkillType[] = JSON.parse(data);
  return parsed;
}
