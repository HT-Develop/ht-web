import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | HT Developer",
  description:
    "Read the Terms & Conditions of HT Developer, a construction services company developed by TechMystry in September 2025.",
  keywords: [
    "HT Developer",
    "construction terms",
    "construction company policies",
    "TechMystry",
    "building services",
    "construction contracts",
  ],
};

const TermsAndConditions: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-6 md:px-20 text-gray-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-2 border-b-4 border-[#f9f871] inline-block">
          Terms & Conditions
        </h1>
        <p className="text-sm text-gray-600 mb-8">
          Last Updated: September 2025
        </p>

        <p className="mb-6">
          Welcome to <strong>HT Developer</strong>, a construction services
          platform developed by <strong>TechMystry</strong>. By using our
          website or services, you agree to comply with the following Terms &
          Conditions.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">1. General</h2>
        <p className="mb-4">
          HT Developer reserves the right to update or modify these Terms &
          Conditions at any time. Any changes will be posted on this page and
          will be effective immediately upon publication.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">2. Services</h2>
        <p className="mb-4">
          We provide construction, renovation, project management, and
          consultation services. The scope and timeline of each project will be
          detailed in a written contract signed with the client.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">3. Quotes & Payments</h2>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>All quotations are valid for 30 days unless stated otherwise.</li>
          <li>Payments must follow the schedule defined in the project contract.</li>
          <li>Late payments may incur penalties or suspension of services.</li>
          <li>We accept bank transfers, UPI, and other approved payment methods.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-3">4. Project Timelines</h2>
        <p className="mb-4">
          While we strive to deliver projects on time, timelines may be affected
          by weather, supply delays, or unforeseen circumstances. Any changes
          will be communicated to the client promptly.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">5. Liability</h2>
        <p className="mb-4">
          We ensure that all work meets industry standards. However, HT
          Developer is not responsible for:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Damages caused by third-party contractors</li>
          <li>Misuse or modifications made after project completion</li>
          <li>Delays caused by external suppliers or natural events</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-3">6. Intellectual Property</h2>
        <p className="mb-4">
          All content on this website, including logos, text, and designs, are
          the property of HT Developer. Unauthorized use or reproduction is
          prohibited.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">7. Governing Law</h2>
        <p className="mb-4">
          These Terms & Conditions are governed by the laws of your jurisdiction
          and disputes shall be handled by the courts of your region.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">8. Contact Us</h2>
        <p className="mb-4">
          For questions about these Terms & Conditions, please contact us at{" "}
          <strong>support@htdeveloper.com</strong>.
        </p>

        <p className="mt-8 text-gray-600 text-sm border-t pt-4">
          © 2025 HT Developer | Developed by TechMystry
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
