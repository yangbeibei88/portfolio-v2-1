import { APP_AUTHOR } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-full border-t bg-accent-foreground">
      <footer className="flex flex-col items-center justify-between py-4">
        {/* Contact */}
        <address className="flex flex-col items-center justify-center gap-2"></address>
        <small>
          &copy; 2023 - {currentYear} | {APP_AUTHOR}
        </small>
      </footer>
    </div>
  );
}
