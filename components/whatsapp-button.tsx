'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { site } from '@/lib/site-data'

export function WhatsAppButton() {
  return (
    <motion.a
      href={site.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2.6, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 sm:bottom-6 sm:right-6"
    >
      <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
      <MessageCircle size={26} className="relative" />
    </motion.a>
  )
}
