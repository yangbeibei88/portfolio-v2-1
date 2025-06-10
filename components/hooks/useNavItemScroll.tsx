import { useContext } from "react";
import { NavItemContext } from "../contexts/NavItemContext";

export function useNavItemScroll() {
  const context = useContext(NavItemContext);
  if (!context) {
    throw new Error(
      "useNavItemScroll must be used within NavItemScrollProvider"
    );
  }
  return context;
}
