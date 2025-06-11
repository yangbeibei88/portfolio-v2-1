import { Logo } from "./Logo";
import { MainNavMenu } from "./MainNavMenu";
import { GithubLink } from "./socialLinks";

export function MainNav() {
  return (
    <div className="w-full border-b">
      <div className="sticky top-0 z-30 flex flex-wrap items-center justify-between">
        <Logo />
        <div className="flex items-center justify-end gap-2">
          <MainNavMenu />
          <GithubLink />
        </div>
      </div>
    </div>
  );
}
