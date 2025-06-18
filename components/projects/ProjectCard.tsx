import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProjectType } from "@/lib/types";
import { stackMap } from "@/lib/utils/stackMap";
import Link from "next/link";
import Image from "next/image";
import { BiLinkExternal, BiCodeAlt } from "react-icons/bi";

type ProjectCardProps = Pick<
  ProjectType,
  | "project_name"
  | "description"
  | "key_features"
  | "technologies"
  | "images"
  | "demo_url"
  | "codebase_url"
>;

export function ProjectCard({
  project_name,
  description,
  key_features,
  technologies,
  images,
  demo_url,
  codebase_url,
}: ProjectCardProps) {
  return (
    <Card>
      <div className="flex flex-col lg:flex-row gap-6 rounded-2xl">
        <div className="lg:w-1/3">
          {/* The first image is the primary image, others are in image gallery */}
          <Image
            src={images[0].image_path || "/assets/image_placeholder_2.jpg"}
            alt={`${project_name} image ${images[0].position}`}
            width={640}
            height={429}
          />
        </div>
        <div className="flex flex-col lg:w-2/3">
          <CardHeader>
            <CardTitle>
              <h3 className="text-2xl font-bold">{project_name}</h3>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>{description}</p>
            <h4 className="text-lg font-semibold">Key Features</h4>
            <ul className="list-disc">
              {key_features &&
                key_features.map((k, idx) => <li key={idx}>{k}</li>)}
            </ul>
            <ul className="flex w-full flex-wrap gap-2">
              {technologies &&
                technologies.map((s) => {
                  const tech = stackMap[s];
                  if (!tech) {
                    console.warn(`Unknown technology key: ${s}`);
                    return null;
                  }
                  const IconComponent = tech.icon;
                  return (
                    <li
                      key={s}
                      className="flex items-center justify-center px-2 py-1 text-xs"
                      style={{
                        border: `${stackMap[s]["color"]} 1px solid`,
                        borderRadius: "20px",
                      }}
                    >
                      <IconComponent
                        style={{
                          color: stackMap[s]["color"] || "",
                          backgroundColor:
                            stackMap[s]["bgColor"] || "transparent",
                        }}
                      />
                      {s}
                    </li>
                  );
                })}
            </ul>
          </CardContent>
          <CardFooter>
            <div className="flex justify-end gap-2">
              <Button asChild variant="outline" size="sm">
                <Link
                  href={demo_url || ""}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`Open ${project_name} demo site in new tab`}
                >
                  <BiLinkExternal />
                  Demo
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link
                  href={codebase_url || ""}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`Open ${project_name} repo in new tab`}
                >
                  <BiCodeAlt />
                  Repo
                </Link>
              </Button>
            </div>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}
