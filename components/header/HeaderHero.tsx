import { SectionContainer } from "../shared/section/SectionContainer";
import { WaveGreeting } from "./Greeting";

export function HeaderHero() {
  return (
    <SectionContainer id="portfolio-hero">
      <div className="md:w-2/3" id="short_intro">
        <WaveGreeting />
        <h2 className="text-2xl font-semibold">
          Digital Systems & Fullstack Web Developer
          {/* Fullstack Web Developer - focusing on TypeScript and React */}
        </h2>
        <hr />
        <p>
          I am a digital systems and web development professional with
          experience in building scalable, data-centric solutions across web
          platforms, business systems, and internal tools. With a strong
          foundation in web development, database design, and systems
          integration, I bring efficiency, accuracy, and reliability to both
          customer-facing and internal digital environments.
          {/* I am a full-stack TypeScript web developer specialising in creating
          robust, scalable, and database-driven applications. Leveraging
          TypeScript, React, NodeJS, and relational/NoSQL databases, I build
          solutions where the database serves as a reliable single source of
          truth. With experience spanning business systems, custom applications,
          and modern web technologies, I bring efficiency and reliability to
          every project I work on. */}
        </p>
      </div>
    </SectionContainer>
  );
}
