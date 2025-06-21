import { ExperienceType } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

type TimelineItemProps = Pick<
  ExperienceType,
  | "position"
  | "org"
  | "location"
  | "description"
  | "desc_array"
  | "started_at"
  | "ended_at"
  | "type"
>;

export function TimelineItem({
  type,
  position,
  org,
  location,
  description,
  desc_array,
  started_at,
  ended_at,
}: TimelineItemProps) {
  const startDate = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "short",
  }).format(new Date(started_at));
  const endDate = ended_at
    ? new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "short",
      }).format(new Date(ended_at))
    : "present";
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.5fr_4fr] p-4">
      <div className="flex flex-col">
        <small className="font-mono">
          {startDate} - {endDate}
        </small>
        <Badge
          className={`${type === "work" ? "bg-neutral-900" : "bg-indigo-700"}`}
        >
          {type}
        </Badge>
      </div>
      <div className="border-l-4 border-gray-400"></div>
      <div className="">
        <hgroup>
          <h3 className="text-lg font-bold">{position}</h3>
          <p className="font-medium">
            {org} | {location}
          </p>
        </hgroup>
        {type === "study" ? (
          <p>{description}</p>
        ) : (
          <ul className="flex flex-col list-disc ml-0">
            {desc_array?.length &&
              desc_array.map((i, idx) => <li key={idx}>{i}</li>)}
          </ul>
        )}
      </div>
    </div>
  );
}
