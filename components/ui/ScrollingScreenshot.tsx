"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { getGSAP } from "@/lib/gsap";

type ScrollingScreenshotProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
};

export function ScrollingScreenshot({
  src,
  alt,
  width,
  height,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px",
}: ScrollingScreenshotProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: ReturnType<typeof import("gsap").gsap.context> | undefined;

    async function init() {
      const { gsap, ScrollTrigger } = await getGSAP();

      const container = containerRef.current;
      const imageWrap = imageWrapRef.current;
      if (!container || !imageWrap) return;

      ctx = gsap.context(() => {
        const mm = gsap.matchMedia();

        mm.add("(prefers-reduced-motion: no-preference)", () => {
          const img = imageWrap.querySelector("img");

          const setup = () => {
            ScrollTrigger.refresh();
            const scrollDistance = imageWrap.scrollHeight - container.clientHeight;
            if (scrollDistance <= 0) return;

            // Scale the scroll runway to match how much image we need to
            // reveal. On tall screens there's less to scroll, so the runway
            // shrinks — preventing white space at the bottom.
            const runwayPx = scrollDistance + container.clientHeight;

            gsap.to(imageWrap, {
              y: -scrollDistance,
              ease: "none",
              scrollTrigger: {
                trigger: container,
                start: "center center",
                end: `+=${runwayPx}`,
                scrub: 0.8,
              },
            });
          };

          if (img?.complete && img.naturalHeight > 0) {
            setup();
          } else {
            img?.addEventListener("load", setup, { once: true });
          }
        });
      });
    }

    init();
    return () => ctx?.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative aspect-video overflow-hidden">
      <div ref={imageWrapRef} className="w-full will-change-transform">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto"
          sizes={sizes}
          quality={80}
        />
      </div>
    </div>
  );
}
