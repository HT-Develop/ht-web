'use client'

import React from 'react';
import { ArrowRight } from 'lucide-react';

const AboutUsSection = () => {
  return (
    <section id="about-us" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-20">
          {/* Left Side - Title */}
          <div className="mb-8 lg:mb-0">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              About
              <br />
              <span className="text-yellow-400">Us</span>
            </h2>
          </div>

          {/* Right Side - Description */}
          <div className="lg:max-w-md lg:ml-12">
            <p className="text-gray-700 text-base leading-relaxed mb-8">
              Founded by <strong>Javed Shaikh</strong>, HT Developer has been at
              the forefront of premium construction services across residential
              and commercial sectors for over a decade. Our commitment to
              excellence drives every project we deliver.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left Content - Company Story */}
          <div className="space-y-6">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Since 2000, we have turned architectural visions into reality,
                building a reputation for craftsmanship, precision, and
                innovative techniques that consistently exceed client
                expectations.
              </p>
              <p>
                From luxury residences to large-scale commercial structures, our
                portfolio reflects a standard of excellence that makes us one of
                the most trusted names in construction.
              </p>
              <p>
                Every project embodies our dedication to quality, sustainability,
                and innovation. We believe in creating not only remarkable
                structures but also long-lasting client relationships.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  200+
                </div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  25+
                </div>
                <div className="text-sm text-gray-600">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  100%
                </div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Founder Card */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-2xl hover:shadow-2xl transition-shadow duration-300">
            {/* Founder Photo Placeholder */}
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-800 rounded-full flex items-center justify-center">
              <span className="text-2xl text-white font-bold">JS</span>
            </div>

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                Javed Shaikh
              </h3>
              <p className="text-gray-600 font-medium">Founder & CEO</p>
              <div className="w-16 h-0.5 bg-gray-800 mx-auto mt-3"></div>
            </div>

            <blockquote className="text-gray-700 text-center mb-6 leading-relaxed italic">
              "Our mission is to transform architectural visions into reality
              while exceeding client expectations through quality, innovation,
              and integrity in every project."
            </blockquote>

            {/* Removed Meet Our Team button */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
