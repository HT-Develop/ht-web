'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const HowItWorksSection = () => {
  const steps = [
    { title: 'Raise a Request', description: 'Begin your journey by submitting your project details and requirements. Our team reviews your input to tailor a solution that fits your vision perfectly.', illustration: '/Raise_a_Request.svg' },
    { title: 'Meet our Expert', description: 'Connect with one of our seasoned construction experts for a personalized consultation, where we discuss your goals and provide initial insights.', illustration: '/Meet_our_Expert.svg' },
    { title: 'Book with Us', description: 'Secure your project slot with a simple booking process, locking in timelines and resources to kickstart your construction journey.', illustration: '/Book_with_Us.svg' },
    { title: 'Receive Designs', description: 'Explore detailed architectural designs and 3D renderings crafted by our team, ensuring every aspect aligns with your expectations.', illustration: '/Receive_Designs.svg' },
    { title: 'Weekly Updates', description: 'Stay informed with regular weekly updates from our project team, ensuring you are always aligned with the progress and milestones.', illustration: '/Track&Transact.svg' },
    { title: 'Settle In', description: 'Celebrate the completion with a final walkthrough, quality assurance, and support as you move into your newly constructed space.', illustration: '/Settle_In.svg' },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [isPaused, setIsPaused] = useState(true); // start paused
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const nextStep = () => setCurrentStep((prev) => (prev + 1) % steps.length);
  const prevStep = () => setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);

  // Intersection Observer to detect visibility
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsPaused(false);
          setCurrentStep(0); // start from Step 1
        } else {
          setIsPaused(true);
        }
      },
      { threshold: 0.5 } // section is 50% visible
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // Auto-rotate with pause support
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextStep, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="bg-black text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center"
      style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
    >
      <div className="max-w-6xl mx-auto w-full text-center">
        {/* Section Heading */}
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
        >
          How It <span className="text-yellow-400">Works</span>
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-300 text-base sm:text-lg md:text-xl mb-12 leading-relaxed max-w-3xl mx-auto"
        >
          Experience a seamless six-step process designed to bring your
          construction vision to life with precision, transparency, and
          excellence.
        </motion.p>

        {/* Step Content */}
        <div
          className="relative flex flex-col items-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex flex-col items-center text-center gap-4 bg-[#111] border border-gray-800 rounded-2xl shadow-xl w-full max-w-2xl p-6 sm:p-8 min-h-[360px] sm:min-h-[420px]"
            style={{ willChange: 'transform' }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="flex flex-col items-center text-center gap-4 w-full"
                style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
              >
                {/* SVG Illustration */}
                <div className="w-full flex justify-center flex-1">
                  <Image
                    src={steps[currentStep].illustration}
                    alt={steps[currentStep].title}
                    width={300}
                    height={200}
                    className="object-contain h-auto max-h-32 sm:max-h-48 w-full"
                  />
                </div>

                {/* Title */}
                <h4 className="text-xl sm:text-2xl font-semibold text-white mt-2">
                  {steps[currentStep].title}
                </h4>

                {/* Description */}
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-lg">
                  {steps[currentStep].description}
                </p>

                {/* Step Counter */}
                <p className="text-gray-500 text-xs mt-2">
                  Step {currentStep + 1} of {steps.length}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-6 gap-3">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentStep === index
                    ? 'bg-yellow-400'
                    : 'bg-gray-700 hover:bg-yellow-500'
                }`}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>

          {/* Prev / Next Buttons */}
          <div className="flex justify-between mt-6 w-full max-w-xs mx-auto">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevStep}
              className="text-white hover:text-yellow-400 font-semibold"
            >
              Previous
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextStep}
              className="text-white hover:text-yellow-400 font-semibold"
            >
              Next
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
