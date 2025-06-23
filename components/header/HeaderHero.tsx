import { SectionContainer } from "../shared/section/SectionContainer";
import { WaveGreeting } from "./Greeting";

export function HeaderHero() {
  return (
    <SectionContainer id="portfolio-hero">
      <div className="md:w-2/3" id="short_intro">
        <WaveGreeting />
        <h2 className="text-2xl font-semibold">
          Fullstack Web Developer - focusing on TypeScript and React
        </h2>
        <hr />
        <p>
          I am a fullstack TypeScript developer passionate about TypeSafe and
          performant code. I&apos;m a passionate full-stack web developer
          specialising in creating robust, scalable, and database-driven
          applications. Leveraging TypeScript, React, NodeJS, and
          relational/NoSQL databases, I build solutions where the database
          serves as a reliable single source of truth. With experience spanning
          business systems, custom applications, and modern web technologies, I
          bring efficiency and reliability to every project I work on.
        </p>
      </div>
    </SectionContainer>
  );
}
