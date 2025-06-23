import { ModeToggle } from "./ModeToggle";
import { GithubLink } from "./socialLinks";

export function SocialIconGroup() {
  return (
    <ul className="flex items-center justify-between gap-2">
      <li>
        <ModeToggle />
      </li>
      <li>
        <GithubLink />
      </li>
    </ul>
  );
}
