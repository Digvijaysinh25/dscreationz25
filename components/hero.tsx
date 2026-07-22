'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { site } from '@/lib/site-data'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 2.0 },
    },
  }
  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section id="top" ref={ref} className="relative h-[100svh] w-full overflow-hidden">
      {/* Cinematic background (Ken Burns) */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 z-0"
      >
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6, ease: 'easeOut' }}
          className="h-full w-full"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/gallery/hero-drone.png"
            alt="Aerial cinematic drone shot at golden hour"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-background/70 via-background/40 to-background" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-background/80 to-transparent" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-4 pb-16 sm:px-6 sm:pb-20"
      >
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl">
          <motion.span
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-4 py-2 text-xs uppercase tracking-[0.3em] text-muted-foreground backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {site.location}
          </motion.span>

          <motion.h1
            variants={item}
            className="font-display text-[16vw] font-bold leading-[0.85] tracking-tighter text-balance sm:text-[12vw] lg:text-[9rem]"
          >
            DScreationz<span className="text-primary">25</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base"
          >
            {site.roles.join('  •  ')}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              View Portfolio
              <ArrowUpRight size={18} className="transition-transform group-hover:rotate-45" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/30 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:bg-secondary"
            >
              Let&apos;s Connect
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 1 }}
        className="absolute bottom-8 right-4 z-10 hidden items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground sm:right-6 sm:flex"
      >
        Scroll
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.6 }}
        >
          <ArrowDown size={16} className="text-primary" />
        </motion.span>
      </motion.div>
    </section>
  )
}
