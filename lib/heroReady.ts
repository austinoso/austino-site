/**
 * Tiny pub/sub so scroll-triggered sections wait for the hero
 * intro timeline to finish before initialising their animations.
 */

let ready = false;
const listeners: (() => void)[] = [];

/** Call once at the end of the hero timeline. */
export function signalHeroReady() {
  ready = true;
  listeners.forEach((fn) => fn());
  listeners.length = 0;
}

/** Fires `fn` immediately if hero is done, otherwise queues it. */
export function onHeroReady(fn: () => void) {
  if (ready) {
    fn();
  } else {
    listeners.push(fn);
  }
}
