'use client'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const WhatsAppButton = () => {
  const phoneNumber = "919420781681"
  const message = "Hello! I'm interested in your construction services. Can we discuss my project?"

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        delay: 2,
        type: "spring",
        stiffness: 260,
        damping: 20 
      }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.button
        onClick={handleWhatsAppClick}
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 10px 30px rgba(37, 211, 102, 0.4)"
        }}
        whileTap={{ scale: 0.9 }}
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          y: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center group transition-all duration-300 relative overflow-hidden"
        aria-label="Contact us on WhatsApp"
      >
        {/* Background pulse effect */}
        <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20"></div>
        
        {/* WhatsApp Icon */}
        <MessageCircle size={28} className="relative z-10" />
        
        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap pointer-events-none"
        >
          Chat with us!
          <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
        </motion.div>
      </motion.button>

      {/* Floating notification bubble */}
      <motion.div
        initial={{ opacity: 0, scale: 0, x: 20, y: -20 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ delay: 3, duration: 0.5 }}
        className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold"
      >
        1
      </motion.div>
    </motion.div>
  )
}

export default WhatsAppButton