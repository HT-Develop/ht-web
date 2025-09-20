"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [finalConfirmOpen, setFinalConfirmOpen] = useState(false);

  // === Form State ===
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });

  const navItems = [
    { name: "Home", href: "home" },
    { name: "Services", href: "services" },
    { name: "Projects", href: "projects" },
    { name: "About", href: "about-us" },
    { name: "Contact", href: "contact-us" },
  ];

  // === Validation ===
  const validate = () => {
    return {
      name:
        /^[A-Za-z\s]+$/.test(formData.name) && formData.name.length > 1
          ? ""
          : "Name must contain only letters.",
      email: /\S+@\S+\.\S+/.test(formData.email)
        ? ""
        : "Enter a valid email address.",
      phone:
        formData.phone.replace(/\D/g, "").length >= 10
          ? ""
          : "Enter a valid phone number.",
      message:
        formData.message === "" || formData.message.length >= 5
          ? ""
          : "Message must be at least 5 characters.",
    };
  };

  const errors = validate();
  const isValid =
    !errors.name && !errors.email && !errors.phone && !errors.message;

  // === Submit Handlers ===
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      setFormOpen(false);
      setConfirmOpen(true);
    }
  };

  const handleConfirm = () => {
    setConfirmOpen(false);
    setSuccessOpen(true);

    // Show "Processing" first, then final success
    setTimeout(() => {
      setSuccessOpen(false);
      setFinalConfirmOpen(true);
    }, 2000);
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent pt-2 md:pt-0">
      <div className="max-w-7xl mx-auto pl-0 pr-6 flex justify-between items-center h-16 relative">
        {/* === Logo === */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer flex-shrink-0"
        >
          <img
            src="/LOGOHT1.png"
            alt="HT Developer Logo"
            className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-18 w-auto pl-2 md:pl-4"
          />
        </motion.div>

        {/* === Desktop Menu === */}
        <div className="hidden md:flex space-x-6 text-base md:text-base font-medium text-black">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={`#${item.href}`}
              className="relative hover:text-yellow-400 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* === Right-Side "Get Quote" Button === */}
        <motion.button
          onClick={() => setFormOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-400 text-black font-bold px-4 py-2 rounded-sm hidden md:block"
        >
          Get a Quote
        </motion.button>

        {/* === Mobile Menu Toggle === */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  menuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* === Mobile Menu === */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col space-y-4 px-6 py-4 text-black font-medium">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={`#${item.href}`}
                onClick={() => setMenuOpen(false)}
                className="hover:text-yellow-400 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={() => {
                setMenuOpen(false);
                setFormOpen(true);
              }}
              className="bg-yellow-400 text-black font-bold px-4 py-2 rounded-sm text-center"
            >
              Get a Quote
            </button>
          </div>
        </div>
      )}

      {/* === Quote Form Modal === */}
      {formOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-black">Get a Quote</h2>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  onBlur={() => setTouched({ ...touched, name: true })}
                  className="w-full p-2 border border-yellow-400 rounded text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
                {touched.name && errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  onBlur={() => setTouched({ ...touched, email: true })}
                  className="w-full p-2 border border-yellow-400 rounded text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
                {touched.email && errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <PhoneInput
                  country={"in"}
                  value={formData.phone}
                  onChange={(phone) => setFormData({ ...formData, phone })}
                  inputStyle={{
                    width: "100%",
                    border: "1px solid #facc15",
                    borderRadius: "0.375rem",
                    color: "black",
                  }}
                  buttonStyle={{
                    border: "1px solid #facc15",
                    backgroundColor: "white",
                  }}
                  dropdownStyle={{
                    color: "black",
                  }}
                />
                {touched.phone && errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <textarea
                  placeholder="Your Message (optional)"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  onBlur={() => setTouched({ ...touched, message: true })}
                  className="w-full p-2 border border-yellow-400 rounded text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  rows={3}
                />
                {touched.message && errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Buttons */}
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setFormOpen(false)}
                  className="px-4 py-2 bg-gray-300 text-black rounded"
                >
                  Cancel
                </button>

                <motion.button
                  type="submit"
                  disabled={!isValid}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  className="px-4 py-2 bg-yellow-400 text-black font-bold rounded disabled:opacity-50"
                >
                  Submit
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* === Confirmation Modal === */}
      {confirmOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-80 shadow-xl text-center">
            <h3 className="text-lg font-bold mb-4 text-black">
              Confirm Submission
            </h3>
            <p className="mb-4 text-gray-700">
              Are you sure you want to submit this request?
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setConfirmOpen(false)}
                className="px-4 py-2 bg-gray-300 text-black rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="px-4 py-2 bg-yellow-400 text-black font-bold rounded"
              >
                Yes, Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* === Processing Popup === */}
      {successOpen && (
        <div className="fixed bottom-6 right-6 bg-yellow-400 text-black font-bold px-6 py-3 rounded shadow-lg z-50">
          ✅ Your request is being processed...
        </div>
      )}

      {/* === Final Confirmation === */}
      {finalConfirmOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 shadow-xl text-center">
            <h3 className="text-xl font-bold text-black mb-4">
              🎉 Submission Successful!
            </h3>
            <p className="text-gray-700 mb-6">
              Thank you! We’ll contact you shortly.
            </p>
            <button
              onClick={() => setFinalConfirmOpen(false)}
              className="px-4 py-2 bg-yellow-400 text-black font-bold rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
