import { useEffect, useState } from "react";

/**
 * Tracks whether a CSS media query currently matches.
 * Used to switch between desktop-only interactions (horizontal scroll,
 * custom cursor, hover states) and simplified mobile layouts.
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => typeof window !== "undefined" && window.matchMedia(query).matches
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const listener = (e) => setMatches(e.matches);
    mql.addEventListener("change", listener);
    setMatches(mql.matches);
    return () => mql.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

export const useIsDesktop = () => useMediaQuery("(min-width: 1025px)");
export const useIsMobile = () => useMediaQuery("(max-width: 767px)");
