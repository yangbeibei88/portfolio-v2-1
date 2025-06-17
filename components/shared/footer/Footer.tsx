import { APP_AUTHOR } from "@/lib/constants";
import Link from "next/link";
import { GithubLink, LinkedinLink } from "../topNav/socialLinks";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-full border-t">
      <footer className="flex flex-col items-center justify-between">
        {/* Contact */}
        <address className="flex items-center justify-center space-x-2">
          <Link href="mailto:beibeiyang88@hotmail.com">
            beibeiyang88@hotmail.com
          </Link>
          <Link href="tel:0452641620">0452 641 620</Link>
          <GithubLink />
          <LinkedinLink />
        </address>
        <small>
          &copy; 2023 - {currentYear} | {APP_AUTHOR}
        </small>
      </footer>
    </div>
  );
}
