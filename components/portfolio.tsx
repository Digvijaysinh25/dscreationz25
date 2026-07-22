'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { categories } from '@/lib/site-data'

export function Portfolio() {
  return (
    <section id="work" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Portfolio</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-balance sm:text-5xl">
            Selected work across <br className="hidden sm:block" />
            every frame.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
            Six disciplines, one obsession — telling stories that people remember.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid auto-rows-[240px] grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[280px]">
        {categories.map((cat, i) => (
          <motion.a
            key={cat.title}
            href="#contact"
            data-cursor="hover"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className={`group relative overflow-hidden rounded-3xl border border-border ${cat.span ?? ''}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={cat.image || '/placeholder.svg'}
              alt={`${cat.title} work by DScreationz25`}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-95" />

            <div className="relative flex h-full flex-col justify-end p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                  {cat.title}
                </h3>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={18} />
                </span>
              </div>
              <p className="mt-2 max-w-sm translate-y-2 text-pretty text-sm leading-relaxed text-muted-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {cat.description}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
