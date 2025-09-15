import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | HT Developer",
  description:
    "Privacy Policy of HT Developer. Learn how we collect, use, and protect your data. Developed by TechMystry in September 2025.",
  keywords: [
    "HT Developer",
    "construction privacy policy",
    "data protection",
    "TechMystry",
    "user privacy",
    "construction services",
  ],
};

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-6 md:px-20 text-gray-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-2 border-b-4 border-[#f9f871] inline-block">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-600 mb-8">
          Last Updated: September 2025
        </p>

        <p className="mb-6">
          At <strong>HT Developer</strong>, your privacy is important to us. This
          Privacy Policy explains how we collect, use, and protect your personal
          information. This website is developed and maintained by{" "}
          <strong>TechMystry</strong>.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">1. Information We Collect</h2>
        <p className="mb-4">
          We may collect the following types of personal information:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Name, email address, and phone number</li>
          <li>Residential or project site address</li>
          <li>Project requirements, preferences, and feedback</li>
          <li>Payment details for processing invoices</li>
          <li>Technical information such as IP address and browser type</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-3">2. How We Use Information</h2>
        <p className="mb-4">We use the information we collect to:</p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Provide and manage construction and consultation services</li>
          <li>Communicate project progress, timelines, and updates</li>
          <li>Improve website performance and user experience</li>
          <li>Process payments and maintain financial records</li>
          <li>Comply with legal and regulatory obligations</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-3">3. Data Protection</h2>
        <p className="mb-4">
          We implement industry-standard security practices such as encryption,
          firewalls, and secure access protocols. However, while we strive to
          protect your personal data, no online system can be guaranteed as
          completely secure.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">4. Sharing of Information</h2>
        <p className="mb-4">
          We do not sell or rent personal data. Information may only be shared with:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Trusted contractors or partners involved in delivering your project</li>
          <li>Payment processors to complete financial transactions</li>
          <li>Authorities when required by law</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-3">5. Cookies & Tracking</h2>
        <p className="mb-4">
          Our website may use cookies to analyze traffic, remember preferences,
          and enhance user experience. You may disable cookies in your browser,
          but some features of our site may not function properly.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">6. Your Rights</h2>
        <p className="mb-4">
          You have the right to request access, update, or deletion of your
          personal data. To exercise these rights, please contact us at{" "}
          <strong>support@htdeveloper.com</strong>.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">7. Changes to This Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. Changes will be
          posted on this page with a revised update date.
        </p>

        <p className="mt-8 text-gray-600 text-sm border-t pt-4">
          © 2025 HT Developer | Developed by TechMystry
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
