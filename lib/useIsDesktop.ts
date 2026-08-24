"use client";

import { useMediaQuery } from "react-responsive";

/**
 * Mirrors the 1224px desktop/mobile cutoff from the reference project's
 * `App.js`. The visual desktop/mobile split itself is done with CSS
 * (`hidden dt:block` / `dt:hidden`) so there is zero hydration-mismatch
 * risk; this hook is only used to skip attaching scroll listeners /
 * IntersectionObservers on the tree that CSS is already hiding, so we
 * don't run duplicate scroll-jacking or stagger logic in the background.
 */
export function useIsDesktop(): boolean {
  return useMediaQuery({ minWidth: 1224 });
}
