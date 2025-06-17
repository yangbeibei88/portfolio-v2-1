import { ExperienceType } from "@/lib/types";
import { SectionContainer } from "../shared/section/SectionContainer";
import { SectionTitle } from "../shared/section/SectionTitle";
import { Timeline } from "./Timeline";

export function ExperienceSection({
  experiences,
}: {
  experiences: ExperienceType[];
}) {
  return (
    <SectionContainer id="experience">
      <SectionTitle title="My Experience" />
      <Timeline experiences={experiences} />
    </SectionContainer>
  );
}
