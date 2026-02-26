/**
 * Lazy-load GSAP + ScrollTrigger to keep them off the critical rendering path.
 * Webpack caches dynamic imports so the module is fetched only once regardless
 * of how many components call this helper.
 */
export async function getGSAP() {
  const [{ gsap }, { ScrollTrigger }] = await Promise.all([
    import("gsap"),
    import("gsap/ScrollTrigger"),
  ]);
  gsap.registerPlugin(ScrollTrigger);
  return { gsap, ScrollTrigger };
}

/** Load GSAP core only (no ScrollTrigger) — used by the Hero animation */
export async function getGSAPCore() {
  const { gsap } = await import("gsap");
  return gsap;
}
