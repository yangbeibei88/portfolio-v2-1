import { Logo } from "./Logo";
import { MainNavMenu } from "./MainNavMenu";
import { ModeToggle } from "./ModeToggle";
import { GithubLink } from "./socialLinks";

export function MainNav() {
  return (
    // w-full border-b
    <div className="fixed top-0 left-0 right-0 z-50 bg-secondary border-b">
      {/* fixed top-0 left-0 right-0 z-100 mx-auto flex flex-wrap items-center justify-between py-2 px-3 bg-secondary */}
      <div className="mx-auto flex flex-wrap items-center justify-between py-2 px-3">
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
