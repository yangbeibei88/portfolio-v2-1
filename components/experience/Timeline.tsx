import { useEffect, useState } from "react";
import { TimelineItem } from "./TimelineItem";
import { ExperienceType } from "@/lib/types";

export function Timeline({ experiences }: { experiences: ExperienceType[] }) {
  // const [experiences, setExperiences] = useState<ExperienceType[]>([]);
  // useEffect(() => {
  //   fetch("/db/experiences.json")
  //     .then((res) => res.json())
  //     .then((data: Record<"result", ExperienceType[]>) =>
  //       setExperiences(data.result)
  //     );
  // }, []);
  return (
    <ul className="grid grid-col-1 place-self-center mx-6 my-4">
      {experiences.map((item) => {
        return (
          <li key={item.id}>
            <TimelineItem
              key={item.id}
              position={item.position}
              org={item.org}
              location={item.location}
              description={item.description}
              started_at={item.started_at}
              ended_at={item.ended_at}
              type={item.type}
            />
          </li>
        );
      })}
    </ul>
  );
}
