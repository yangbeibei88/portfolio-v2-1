import React, {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

type NavItemContextType = {
  activeMenuItemId: string | null;
  registerSection: (
    id: string,
    ref: React.RefObject<HTMLElement | null>
  ) => void;
};

export const NavItemContext = createContext<NavItemContextType | undefined>(
  undefined
);

export function NavItemScrollProvider({ children }: { children: ReactNode }) {
  const [activeMenuItemId, setActiveMenuItemId] = useState<string | null>(null);
  const sectionsRef = useRef(
    new Map<string, React.RefObject<HTMLElement | null>>()
  );
  const registerSection = useCallback(
    (id: string, ref: React.RefObject<HTMLElement | null>) => {
      sectionsRef.current.set(id, ref);
    },
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveMenuItemId(visible[0].target.id);
        }
      },
      {
        rootMargin: "0px 0px -60% 0px",
        threshold: 0.3,
      }
    );
    sectionsRef.current.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <NavItemContext.Provider value={{ activeMenuItemId, registerSection }}>
      {children}
    </NavItemContext.Provider>
  );
}
