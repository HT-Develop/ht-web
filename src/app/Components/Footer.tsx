'use client'

import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Mail, Phone, ArrowUp } from 'lucide-react'
import { useState, useEffect } from 'react'

import PrivacyPolicy from './privacy-policy'
import TermsAndConditions from './terms-and-conditions'

interface SocialLink {
  icon: React.ReactNode
  href: string
  label: string
}

interface QuickLink {
  name: string
  href: string
}

const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false)
  const [open, setOpen] = useState<'privacy' | 'terms' | null>(null)

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const socialLinks: SocialLink[] = [
    { icon: <Facebook size={20} />, href: 'https://www.facebook.com', label: 'Facebook' },
    { icon: <Instagram size={20} />, href: 'https://www.instagram.com', label: 'Instagram' },
    { icon: <Twitter size={20} />, href: 'https://twitter.com', label: 'Twitter' },
  ]

  const quickLinks: QuickLink[] = [
    { name: 'Home', href: 'home' },
    { name: 'Why Choose Us', href: 'why-choose-us' },
    { name: 'How It Works', href: 'how-it-works' },
    { name: 'Our Services', href: 'services' },
    { name: 'Projects', href: 'projects' },
    { name: 'About Us', href: 'about-us' },
    { name: 'Contact Us', href: 'contact-us' },
  ]

  const services: string[] = [
    'Residential Construction',
    'Commercial Construction',
    'Renovation & Remodeling',
    'Interior Design',
    'Landscaping',
    'Maintenance Services',
  ]

  return (
    <div className="relative">
      <footer className="bg-black text-white w-full font-sans relative pb-16 sm:pb-24">
        {/* Top Section */}
        <div className="pt-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 text-center lg:text-left">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-5 flex flex-col items-center lg:items-start"
          >
            <h2 className="text-3xl font-extrabold">
              <span className="text-yellow-400">HT</span> Developer
            </h2>
            <p className="text-xs">By Javed Shaikh</p>

            <div className="space-y-2">
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <Phone size={16} className="text-yellow-400" />
                <span>+91 9420781681</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <Mail size={16} className="text-yellow-400" />
                <span>htdeveloper.contact@gmail.com</span>
              </div>
            </div>

            <div className="flex space-x-3 pt-2">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 bg-gray-200 hover:bg-yellow-400 hover:text-white text-black rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Middle Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-4 flex flex-col items-center"
          >
            <h3 className="font-semibold text-base underline underline-offset-4 decoration-yellow-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <motion.button
                    onClick={() => handleScrollToSection(link.href)}
                    className="hover:text-yellow-400 transition-colors"
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 flex flex-col items-center"
          >
            <h3 className="font-semibold text-base underline underline-offset-4 decoration-yellow-400">
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.map((service, i) => (
                <li key={i}>
                  <motion.button
                    onClick={() => handleScrollToSection('services')}
                    className="hover:text-yellow-400 transition-colors"
                  >
                    {service}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

          {/* Footer Bottom */}
          <div className="mt-10 border-t border-gray-700 pt-6 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs px-6 gap-4 text-center md:text-left">
            <div>
              <p>© 2025 HT Developer. All Rights Reserved.</p>
              <p className="text-white/70">
                Website developed by{" "}
                <a
                  href="https://wa.me/918805526198"
                  className="text-yellow-400 font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TechMystry
                </a>
              </p>
            </div>

            <div className="flex space-x-6">
              <button onClick={() => setOpen('privacy')} className="hover:text-yellow-400 transition-colors">
                Privacy Policy
              </button>
              <button onClick={() => setOpen('terms')} className="hover:text-yellow-400 transition-colors">
                Terms & Conditions
              </button>
            </div>
          </div>
      </footer>

      {/* Privacy Policy Modal */}
      {open === 'privacy' && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setOpen(null)}
        >
          <div
            className="bg-white p-8 max-w-3xl w-full max-h-[85vh] overflow-y-auto text-black rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(null)}
              className="mb-4 text-yellow-400 font-semibold text-sm hover:text-black"
            >
              ✕ Close
            </button>
            <PrivacyPolicy />
          </div>
        </div>
      )}

      {/* Terms & Conditions Modal */}
      {open === 'terms' && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setOpen(null)}
        >
          <div
            className="bg-white p-8 max-w-3xl w-full max-h-[85vh] overflow-y-auto text-black rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(null)}
              className="mb-4 text-yellow-400 font-semibold text-sm hover:text-black"
            >
              ✕ Close
            </button>
            <TermsAndConditions />
          </div>
        </div>
      )}

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: showScrollTop ? 1 : 0, scale: showScrollTop ? 1 : 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-28 right-6 w-12 h-12 bg-yellow-400 hover:bg-yellow-500 text-white rounded-full flex items-center justify-center shadow-lg z-40 transition-colors duration-300"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </motion.button>
    </div>
  )
}

export default Footer
