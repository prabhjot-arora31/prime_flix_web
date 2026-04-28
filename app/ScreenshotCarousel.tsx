"use client";

import { useRef } from "react";
import Image from "next/image";

export function ScreenshotCarousel() {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!ref.current) return;
    const width = ref.current.clientWidth;
    ref.current.scrollBy({
      left: dir === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto relative">

        {/* LEFT BUTTON */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 
          bg-black/40 hover:bg-black/70 
          border border-white/20 
          w-12 h-12 flex items-center justify-center 
          rounded-full backdrop-blur-xl transition"
        >
          ‹
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 
          bg-black/40 hover:bg-black/70 
          border border-white/20 
          w-12 h-12 flex items-center justify-center 
          rounded-full backdrop-blur-xl transition"
        >
          ›
        </button>

        {/* SLIDER */}
        <div
          ref={ref}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar px-10"
        >
          {["/images/second-1.jpeg", "/images/third-1.jpeg", "/images/fourth-1.jpeg" , "/images/fifth-1.jpeg" , "/images/sixth-1.jpeg" , "/images/downloads.jpeg"].map((src, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 
              w-[240px] h-[480px] 
              sm:w-[280px] sm:h-[560px] 
              md:w-[320px] md:h-[640px] 
              rounded-2xl overflow-hidden 
              snap-center 
              border border-white/10 
              hover:scale-105 transition"
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}