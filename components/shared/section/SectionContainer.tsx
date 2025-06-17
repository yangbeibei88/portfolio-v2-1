"use client";

import { useNavItemScroll } from "@/components/hooks/useNavItemScroll";
import { ReactNode, useEffect, useRef } from "react";

type SectionContainerProps = {
  id: string;
  children: ReactNode;
};

export function SectionContainer({ id, children }: SectionContainerProps) {
  const ref = useRef<HTMLElement>(null);
  const { registerSection } = useNavItemScroll();

  useEffect(() => {
    registerSection(id, ref);
  }, []);

  return (
    <section id={id} ref={ref}>
      <div className="container mx-auto px-5 py-4">{children}</div>
    </section>
  );
}
