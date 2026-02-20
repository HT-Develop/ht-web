'use client';

import React from 'react';

const ProjectsSection = () => {
  const projects = [
    { id: 1, category: "Residential", title: "Modern Villa", image: "/Gallery/img1.jpeg", description: "A beautiful modern villa with sustainable design." },
    { id: 2, category: "Commercial", title: "City Plaza", image: "/Gallery/img2.jpeg", description: "State-of-the-art office complex in the city heart." },
    { id: 3, category: "Industrial", title: "Smart Factory", image: "/Gallery/img3.jpeg", description: "Automated manufacturing facility with solar power." },
    { id: 4, category: "Residential", title: "Luxury Apartment", image: "/Gallery/img4.jpeg", description: "High-end apartments with panoramic views." },
    {
      id: 5,
      image:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Contemporary Family Home',
      description:
        'A beautifully designed family home that blends contemporary architecture with functional, comfortable living spaces.',
    },
    {
      id: 6,
      image:
        'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Luxury Modern Villa',
      description:
        'An exclusive luxury villa that showcases modern elegance, premium materials, and seamless indoor-outdoor living.',
    },
  ];

  return (
    <section id="projects" className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* === Header === */}
        <div className="mb-12">
          <p className="text-yellow-400 uppercase text-sm font-medium tracking-wide mb-2">
            Recent Work
          </p>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Take a Look at Our Latest <br />
            <span className="text-yellow-400">Projects</span>
          </h2>
          <hr className="border-gray-700 mt-6" />
        </div>

        {/* === Projects Grid === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project) => (
            <div key={project.id}>
              {/* Image */}
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] mb-4 group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
