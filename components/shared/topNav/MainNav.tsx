import { Logo } from "./Logo";
import { MainNavMenu } from "./MainNavMenu";
import { MobileNav } from "./MobileNav";
import { SocialIconGroup } from "./SocialIconGroup";

export function MainNav() {
  return (
    // w-full border-b
    <div className="fixed top-0 left-0 right-0 z-50 bg-accent-foreground border-b">
      <div className="mx-auto flex flex-wrap items-center justify-between py-2 px-3">
        <Logo />

        {/* Desktop nav menu */}
        <div className="hidden md:flex items-center justify-end gap-2">
          <MainNavMenu />
          <SocialIconGroup />
        </div>

        {/* Mobile hamburger menu */}
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </div>
  );
}
