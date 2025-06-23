"use client";

import * as React from "react";
import Link from "next/link";
import clsx from "clsx";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { useNavItemScroll } from "@/components/hooks/useNavItemScroll";

type MainNavItemType = {
  name: string;
  href: string;
};

const mainNavItems: MainNavItemType[] = [
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function MainNavMenu() {
  const { activeMenuItemId } = useNavItemScroll();
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex flex-col md:flex-row">
        {mainNavItems.map((item) => {
          const sectionId = item.href.replace("#", "");
          const isActive = sectionId === activeMenuItemId;
          return (
            <NavigationMenuItem key={item.name}>
              <NavigationMenuLink asChild active={isActive}>
                <a
                  href={item.href}
                  className={clsx(
                    "transition-colors",
                    isActive
                      ? "underline underline-offset-4 text-primary"
                      : "hover:underline"
                  )}
                >
                  {item.name}
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
