import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { GithubLink, LinkedinLink } from "../shared/topNav/socialLinks";

export function ContactCard() {
  return (
    <Card>
      <CardHeader className="flex flex-col items-center justify-center gap-3">
        <CardTitle className="text-2xl">Beibei Yang</CardTitle>
      </CardHeader>
      <CardContent>
        <address className="flex flex-col items-center justify-center gap-2">
          <span>
            {"Email: "}
            <Link href="mailto:beibeiyang88@hotmail.com">
              beibeiyang88@hotmail.com
            </Link>
          </span>
          <span>
            {"Mobile: "}
            <Link href="tel:0452641620">0452 641 620</Link>
          </span>
        </address>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 items-center justify-center">
        <div className="flex gap-2 items-center justify-center">
          <GithubLink />
          <LinkedinLink />
        </div>
        <mark>
          Open to opportunities in web development, digital systems, analyst
          roles, and operations improvement.
        </mark>
      </CardFooter>
    </Card>
  );
}
