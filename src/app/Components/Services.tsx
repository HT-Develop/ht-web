'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Home, Building2, Wrench, PaintBucket, TreePine, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  image: string;
}

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('services');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const services: Service[] = [
    {
      id: 'residential',
      icon: <Home size={28} className="text-gray-900" />,
      title: 'Residential Construction',
      description:
        'Custom homes, villas, and residential complexes built with premium materials and exceptional craftsmanship.',
      features: ['Custom Home Design', 'Villa Construction', 'Apartment Complexes', 'Interior Design'],
      image: '/residential.jpg',
    },
    {
      id: 'commercial',
      icon: <Building2 size={28} className="text-gray-900" />,
      title: 'Commercial Construction',
      description:
        'Modern office buildings, retail spaces, and commercial complexes designed for functionality and long-lasting performance.',
      features: ['Office Buildings', 'Retail Spaces', 'Warehouses', 'Industrial Units'],
      image: '/commercial.jpg',
    },
    {
      id: 'renovation',
      icon: <Wrench size={28} className="text-gray-900" />,
      title: 'Renovation & Remodeling',
      description:
        'From minor updates to complete transformations, we deliver innovative renovation and remodeling solutions.',
      features: ['Home Renovations', 'Office Remodeling', 'Kitchen & Bathrooms', 'Space Optimization'],
      image: '/renovation.jpg',
    },
    {
      id: 'interior',
      icon: <PaintBucket size={28} className="text-gray-900" />,
      title: 'Interior & Exterior Design',
      description:
        'Elegant interior and exterior design services including painting, flooring, and decorative finishing touches.',
      features: ['Interior Design', 'Exterior Finishing', 'Painting Services', 'Flooring Solutions'],
      image: '/interior.png',
    },
    {
      id: 'landscaping',
      icon: <TreePine size={28} className="text-gray-900" />,
      title: 'Landscaping',
      description:
        'Beautiful outdoor environments with professional landscaping, gardens, and custom outdoor living solutions.',
      features: ['Garden Design', 'Outdoor Living', 'Lawn Installation', 'Irrigation Systems'],
      image: '/landscaping.jpg',
    },
    {
      id: 'maintenance',
      icon: <ShieldCheck size={28} className="text-gray-900" />,
      title: 'Maintenance & Support',
      description:
        'Comprehensive property maintenance services including inspections, emergency repairs, and ongoing support.',
      features: ['Regular Maintenance', 'Emergency Repairs', 'Inspection Services', 'Warranty Support'],
      image: '/maintenance.png',
    },
  ];

  return (
    <section id="services" className="bg-white py-20 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-12 sm:mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
            Our <span className="text-yellow-400">Services</span>
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-8">
            From concept to completion, we deliver comprehensive construction solutions with a focus on
            quality, reliability, and timeless design.
          </p>
          <div className="w-20 sm:w-24 h-1 bg-gray-900 rounded-full mx-auto"></div>
        </div>

        {/* Services Grid / Slider */}
        <div
          ref={scrollRef}
          className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory scroll-px-4"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white border border-gray-200 rounded-2xl shadow-lg flex-shrink-0 w-full md:w-auto snap-center overflow-visible group"
            >
              {/* Top Image */}
              <div className="relative h-40 sm:h-48 w-full">
                <Image src={service.image} alt={service.title} fill className="object-cover rounded-t-2xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-t-2xl"></div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 overflow-visible">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                  {service.icon}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{service.title}</h3>

                <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed overflow-visible">
                  {service.description}
                </p>

                <ul className="space-y-1 sm:space-y-2 text-gray-700 text-xs sm:text-sm overflow-visible">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-gray-900 rounded-full flex-shrink-0"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
