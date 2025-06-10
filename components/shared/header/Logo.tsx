import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="grid place-items-center text-center rounded-full bg-slate-900 text-white hover:text-purple-400 w-12 h-12 transition-all duration-100"
    >
      <Image
        src="/assets/logo.svg#beibei_logo"
        alt={`${APP_NAME} logo`}
        width={24}
        height={24}
        unoptimized
      />
    </Link>
  );
}
