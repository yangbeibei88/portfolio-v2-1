"use client";

import { useState } from "react";
import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
  SheetDescription,
} from "@/components/ui/sheet";
import { MainNavMenu } from "./MainNavMenu";
import { SocialIconGroup } from "./SocialIconGroup";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          className="p-2 rounded hover:bg-muted transition"
          aria-label="Toggle menu"
        >
          <MenuIcon className="w-6 h-6" />
        </button>
      </SheetTrigger>

      <SheetContent side="right" className="p-6">
        <SheetHeader className="text-center">
          <SheetTitle>Beibei's Portfolio</SheetTitle>
          <SheetDescription>Mobile Menu</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-6 items-center justify-center">
          {/* Ensure nav menu collapses the sheet on click */}
          <MainNavMenu onItemClick={() => setOpen(false)} />
          <SocialIconGroup />
        </div>
      </SheetContent>
    </Sheet>
  );
}
