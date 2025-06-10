import { Logo } from "./Logo";
import { MainNavMenu } from "./MainNavMenu";

export function MainNav() {
  return (
    <div className="w-full border-b">
      <div className="sticky top-0 z-30 flex flex-wrap items-center justify-between">
        <Logo />
        <MainNavMenu />
      </div>
    </div>
  );
}
