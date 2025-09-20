"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const images: string[] = [
  "/Gallary/img1.jpeg",
  "/Gallary/img2.jpeg",
  "/Gallary/img3.jpeg",
  "/Gallary/img4.jpeg",
];

const InfiniteScrollGallery = () => {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [duplicatedImages, setDuplicatedImages] = useState<string[]>([]);

  useEffect(() => {
    // duplicate images multiple times for smooth scrolling
    setDuplicatedImages([...images, ...images, ...images, ...images]);
  }, []);

  useEffect(() => {
    if (duplicatedImages.length > 0) startScrolling();
  }, [duplicatedImages]);

  const startScrolling = () => {
    if (!containerRef.current) return;

    const containerWidth = containerRef.current.scrollWidth / 2;

    controls.start({
      x: [`0px`, `-${containerWidth}px`],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 25,
          ease: "linear",
        },
      },
    });
  };

  const stopScrolling = () => {
    controls.stop(); // pause without resetting
  };

  return (
    <div className="w-full overflow-hidden bg-white py-0">
      {/* Removed padding/margin for top/bottom */}
      <motion.div
        className="flex gap-4 sm:gap-6 md:gap-8 px-0"
        animate={controls}
        onMouseEnter={stopScrolling}
        onMouseLeave={startScrolling}
        ref={containerRef}
      >
        {duplicatedImages.map((src, index) => (
          <div
            key={index}
            className="
              flex-shrink-0 
              w-full sm:w-[48%] 
              md:w-[32%] lg:w-[24%] 
              xl:w-[20%] 
              h-[200px] 
              rounded-xl 
              overflow-hidden 
              shadow-lg 
              hover:shadow-2xl 
              transition-shadow 
              duration-300 
              bg-white
            "
          >
            <img
              src={src}
              alt={`gallery-${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteScrollGallery;
