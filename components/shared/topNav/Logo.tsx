import { APP_NAME } from "@/lib/constants";
import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="grid place-items-center text-center rounded-full bg-slate-900 text-white hover:text-primary/80 w-12 h-12 transition-all duration-100"
    >
      {/* <Image
        src="/assets/logo.svg#beibei_logo"
        alt={`${APP_NAME} logo`}
        width={24}
        height={24}
        unoptimized
      /> */}
      <svg className="w-6 h-6 fill-current" aria-label={`${APP_NAME} logo`}>
        <use href="/assets/logo.svg#beibei_logo" />
      </svg>
    </Link>
  );
}
