'use client'

import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Mail, Phone, ArrowUp } from 'lucide-react'
import { useState, useEffect } from 'react'

// Import your components
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
    { icon: <Facebook size={20} />, href: 'https://www.facebook.com/htconstructions', label: 'Facebook' },
    { icon: <Instagram size={20} />, href: 'https://www.instagram.com/htconstructions', label: 'Instagram' },
    { icon: <Twitter size={20} />, href: 'https://twitter.com/htconstructions', label: 'Twitter' },
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
      <footer className="bg-black text-white w-full font-sans relative overflow-visible">
        
        {/* Top Section: Three Columns */}
        <div className="pt-12 max-w-6xl mx-auto flex justify-between px-6 lg:px-12">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-5 flex-1"
          >
            <div>
              <h2 className="text-3xl font-extrabold mb-1 tracking-tight">
                <span className="text-yellow-400">HT</span> Developer
              </h2>
              <p className="text-white text-xs">By Javed Shaikh</p>
            </div>

            <div className="space-y-3 text-white">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-yellow-400" />
                <span>+91 9420781681</span>
              </div>
              <div className="flex items-center space-x-3">
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
            className="space-y-4 flex-1 flex flex-col items-center"
          >
            <h3 className="text-white font-semibold text-base">Quick Links</h3>
            <ul className="space-y-3 text-center">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <motion.button
                    onClick={() => handleScrollToSection(link.href)}
                    className="text-white hover:text-yellow-400 transition-colors flex items-center space-x-2 group cursor-pointer"
                  >
                    <span className="w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span>{link.name}</span>
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
            className="space-y-4 flex-1 flex flex-col items-end"
          >
            <h3 className="text-white font-semibold text-base">Our Services</h3>
            <ul className="space-y-3 text-right">
              {services.map((service, i) => (
                <li key={i}>
                  <motion.button
                    onClick={() => handleScrollToSection('services')}
                    className="text-white hover:text-yellow-400 transition-colors flex items-center space-x-2 group justify-end"
                  >
                    <span className="w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span>{service}</span>
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-6 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-white text-xs px-6 lg:px-12 mb-12">
          <div className="text-left mb-4 md:mb-0">
            <p>© 2025 HT Developer. All Rights Reserved.</p>
            <p className="text-white/70">
              Website developed by{' '}
              <a
                href="https://techmystry.com"
                className="text-yellow-400 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                TechMystry
              </a>
            </p>
          </div>

          <div className="flex items-center space-x-6 text-sm">
            <button
              onClick={() => setOpen('privacy')}
              className="hover:text-yellow-400 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setOpen('terms')}
              className="hover:text-yellow-400 transition-colors"
            >
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
        className="absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-yellow-400 hover:bg-yellow-500 text-white rounded-full flex items-center justify-center shadow-lg z-40 transition-colors duration-300"
        style={{ bottom: '0px' }}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </motion.button>
    </div>
  )
}

export default Footer
