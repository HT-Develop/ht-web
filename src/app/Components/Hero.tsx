'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const services = ['Residential', 'Villas', 'Commercial', 'Renovations'];

  const stats = [
    { value: 150, label: 'Homes Built' },
    { value: 50, label: 'Villas Completed' },
    { value: 27, label: 'Commercial Projects' },
    { value: 25, label: 'Years of Experience' },
  ];

  const [statsReached, setStatsReached] = useState<boolean[]>(
    new Array(stats.length).fill(false)
  );

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (isInView) {
      setStatsReached(stats.map(() => true));
    }
  }, [isInView]);

  const formatNumber = (num: number) => num.toLocaleString();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full bg-white text-gray-900 relative"
    >
      {/* Bottom black overlay */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-black z-0" />

      {/* === Headline + Right Blurb === */}
      <section
        id="home"
        className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 pt-20"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.0] tracking-tight"
        >
          BUILDING
          <br />
          YOUR
          <br />
          <span className="text-yellow-400">DREAMS</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-md lg:ml-auto mt-4"
        >
          <p className="text-gray-600 mb-4 text-sm sm:text-base">
            <br />
            We are a leading construction company specializing in building
            modern homes, luxury villas, and commercial spaces. With years of
            experience and a strong commitment to quality, we turn your vision
            into reality delivering projects on time and within budget.
          </p>
        </motion.div>
      </section>

      {/* === Hero Image with Services overlay === */}
      <section className="relative max-w-[1400px] mx-auto px-6 mt-8 mb-12">
        <div className="relative">
          {/* Solid black overlay bottom 50% */}
          <div className="absolute bottom-0 left-0 w-full h-[50%] bg-black z-0" />

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl z-10"
            style={{ marginBottom: '-60px' }}
          >
            <img
              src="/construction_image.png"
              alt="Modern construction showcase"
              className="w-full h-[55vh] object-cover transition-all duration-700 ease-in-out"
              loading="eager"
            />

            {/* Glassy phone-style overlay */}
            <div className="absolute left-2 sm:left-4 md:left-6 top-2 sm:top-4 md:top-6 z-20">
              <div className="backdrop-blur-xl bg-white/30 border border-white/50 rounded-2xl p-2 sm:p-3 w-36 sm:w-44 md:w-56 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
                {/* Services header */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-4 w-4 sm:h-5 sm:w-5 rounded-md bg-white/80" />
                  <span className="text-[10px] sm:text-xs font-semibold">
                    Our Services
                  </span>
                </div>

                {/* Static Services list */}
                <div className="space-y-1 sm:space-y-2 text-[9px] sm:text-[11px]">
                  {services.map((label) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: services.indexOf(label) * 0.1 }}
                      className="flex items-center justify-between bg-white/70 rounded-lg px-2 sm:px-3 py-1 sm:py-2"
                    >
                      <span>{label}</span>
                      <span className="inline-flex h-3 w-6 sm:h-4 sm:w-8 items-center rounded-full bg-gray-200">
                        <motion.span
                          className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 rounded-full bg-green-400 shadow"
                          initial={{ x: 0 }}
                          animate={{ x: 'calc(100% - 0.5rem)' }}
                          transition={{
                            duration: 0.5,
                            delay: services.indexOf(label) * 0.1,
                          }}
                        />
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Preview image */}
                <div className="mt-2 sm:mt-3 h-20 sm:h-24 rounded-xl overflow-hidden border border-white/60">
                  <img
                    src="/construction_image.png"
                    alt="preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* === Bottom dark stats band with animation === */}
      <section ref={ref} className="bg-black text-white relative z-0">
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-6 text-lg font-semibold opacity-90"
          >
            Our Construction Achievements
          </motion.div>
          <div className="grid sm:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="rounded-2xl bg-neutral-900 p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <motion.div
                  className="text-3xl font-bold"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={
                    statsReached[index]
                      ? { scale: 1, opacity: 1 }
                      : { scale: 0.8, opacity: 0 }
                  }
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                >
                  {isInView && statsReached[index] ? (
                    <motion.span>
                      {formatNumber(Math.floor(stat.value))}+
                    </motion.span>
                  ) : (
                    '0'
                  )}
                </motion.div>
                <div className="text-sm text-neutral-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default HeroSection;
