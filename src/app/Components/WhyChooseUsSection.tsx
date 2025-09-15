'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Hammer, Clock, Eye, DollarSign } from 'lucide-react';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: <CheckCircle size={32} />,
      title: "High-Quality Materials",
      description:
        "We use only the finest, rigorously tested materials to ensure durability and sustainability—without compromising on elegance.",
    },
    {
      icon: <Hammer size={32} />,
      title: "Expert Craftsmanship",
      description:
        "Our skilled architects and builders combine decades of expertise with modern innovation to perfect every detail.",
    },
    {
      icon: <Clock size={32} />,
      title: "On-Time Delivery",
      description:
        "Through efficient planning and resource management, we guarantee your project is completed on schedule without sacrificing quality.",
    },
    {
      icon: <Eye size={32} />,
      title: "Transparent Process",
      description:
        "Stay informed at every step with real-time updates, detailed reports, and open communication.",
    },
    {
      icon: <DollarSign size={32} />,
      title: "Affordable Pricing",
      description:
        "We deliver premium construction at competitive rates, giving you the best value without compromise.",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="bg-white py-24 px-6 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-10"
        >
          Why <span className="text-yellow-400">Choose</span> Us
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 text-center mb-16 max-w-4xl mx-auto text-lg leading-relaxed"
        >
          We blend bold engineering with timeless craftsmanship to create
          bespoke solutions that transform your architectural vision into
          reality.
        </motion.p>

        <div className="relative">
          <motion.div
            className="absolute top-0 left-0 w-[calc(100%+200px)] h-[calc(100%+200px)] -rotate-12 bg-gradient-to-br from-gray-100/50 to-transparent"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            viewport={{ once: true }}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-20">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group cursor-pointer"
              >
                {/* Icon container */}
                <div
                  className="w-28 h-28 bg-gradient-to-br from-gray-100 to-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg 
                  group-hover:from-gray-900 group-hover:to-black group-hover:shadow-2xl transition-all duration-500 relative overflow-hidden transform group-hover:-translate-y-2"
                >
                  <motion.div
                    className="flex items-center justify-center w-full h-full"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    {React.cloneElement(feature.icon, {
                      className:
                        'text-gray-900 transition-colors duration-300 group-hover:text-white',
                    })}
                  </motion.div>
                </div>

                {/* Title */}
                <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 transition-colors duration-300 group-hover:text-black line-clamp-2 h-16 flex items-center justify-center">
                  {feature.title}
                </h4>

                {/* Description */}
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-xs mx-auto transition-colors duration-300 group-hover:text-black">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Background curve */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Cpath d=\'M10 90 Q50 10 90 90\' fill=\'none\' stroke=\'%23e5e7eb33\' stroke-width=\'1\'/%3E%3C/svg%3E')] opacity-20"></div>
    </section>
  );
};

export default WhyChooseUsSection;
