import { SectionContainer } from "../shared/section/SectionContainer";
import { SectionTitle } from "../shared/section/SectionTitle";
import { ContactCard } from "./ContactCard";

export function ContactSection() {
  return (
    <SectionContainer id="contact">
      <SectionTitle title="my contact" />
      <ContactCard />
    </SectionContainer>
  );
}
