'use client'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const WhatsAppButton = () => {
  const phoneNumber = "919420781681"
  const message =
    "Hello! I'm interested in your construction services. Can we discuss my project?"

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        delay: 2,
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999]"
      style={{ transform: 'translateZ(0)' }} // force GPU layer
    >
      <motion.button
        onClick={handleWhatsAppClick}
        whileHover={{
          scale: 1.1,
          boxShadow: '0 10px 30px rgba(37, 211, 102, 0.4)',
        }}
        whileTap={{ scale: 0.9 }}
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          y: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
        className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center overflow-visible will-change-transform"
        aria-label="Contact us on WhatsApp"
      >
        <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20"></div>
        <MessageCircle size={22} className="sm:w-7 sm:h-7 md:w-8 md:h-8 relative z-10" />
      </motion.button>
    </motion.div>
  )
}

export default WhatsAppButton
