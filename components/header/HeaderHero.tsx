import { SectionContainer } from "../shared/section/SectionContainer";
import { WaveGreeting } from "./Greeting";

export function HeaderHero() {
  return (
    <SectionContainer id="portfolio-hero">
      <div className="w-2/3" id="short_intro">
        <WaveGreeting />
        <h2>
          I am a fullstack TypeScript developer passionate about TypeSafe and
          performant code.
        </h2>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          consectetur dolore, voluptatibus delectus eum deserunt mollitia dicta
          sint, et officiis at harum, ullam distinctio id? Quo dolor fuga optio
          inventore!
        </p>
      </div>
    </SectionContainer>
  );
}
