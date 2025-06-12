import { Logo } from "./Logo";
import { MainNavMenu } from "./MainNavMenu";
import { ModeToggle } from "./ModeToggle";
import { GithubLink } from "./socialLinks";

export function MainNav() {
  return (
    <div className="w-full border-b">
      <div className="sticky top-0 z-30 flex flex-wrap items-center justify-between">
        <Logo />
        <div className="flex items-center justify-end gap-2">
          <MainNavMenu />
          <ul className="flex items-center justify-between gap-2">
            <li>
              <ModeToggle />
            </li>
            <li>
              <GithubLink />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
