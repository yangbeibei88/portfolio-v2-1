import { APP_AUTHOR } from "@/lib/constants";
import Link from "next/link";
import { GithubLink, LinkedinLink } from "../topNav/socialLinks";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-full border-t">
      <footer className="flex flex-col items-center justify-between">
        {/* Contact */}
        <address className="flex flex-col items-center justify-center gap-2"></address>
        <small>
          &copy; 2023 - {currentYear} | {APP_AUTHOR}
        </small>
      </footer>
    </div>
  );
}
