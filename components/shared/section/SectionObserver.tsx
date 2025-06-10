import { useNavItemScroll } from "@/components/hooks/useNavItemScroll";
import { ReactNode, useEffect, useRef } from "react";

type SectionObserverProps = {
  id: string;
  children: ReactNode;
};

export function SectionObserver({ id, children }: SectionObserverProps) {
  const ref = useRef<HTMLElement>(null);
  const { registerSection } = useNavItemScroll();

  useEffect(() => {
    registerSection(id, ref);
  }, []);

  return (
    <section id={id} ref={ref}>
      {children}
    </section>
  );
}
