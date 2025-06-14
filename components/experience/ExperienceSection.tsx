import { SectionContainer } from "../shared/section/SectionContainer";
import { SectionTitle } from "../shared/section/SectionTitle";
import { Timeline } from "./Timeline";

export function ExperienceSection() {
  return (
    <SectionContainer id="experience">
      <SectionTitle title="My Experience" />
      <Timeline />
    </SectionContainer>
  );
}
