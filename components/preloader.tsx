'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export function Preloader() {
  const [loading, setLoading] = useState(true)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const start = performance.now()
    const duration = 1900
    let raf = 0

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      // ease-out
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * 100))
      if (progress < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setTimeout(() => setLoading(false), 350)
      }
    }
    raf = requestAnimationFrame(tick)

    document.body.style.overflow = 'hidden'
    return () => {
      cancelAnimationFrame(raf)
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    if (!loading) document.body.style.overflow = ''
  }, [loading])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex flex-col items-center gap-6 px-6 text-center">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-2xl font-bold tracking-tight sm:text-3xl"
            >
              DScreationz<span className="text-primary">25</span>
            </motion.span>
            <span className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
              Visual Stories. Lasting Impact.
            </span>
          </div>

          <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-3 px-6 sm:bottom-14">
            <div className="h-px w-40 overflow-hidden bg-border sm:w-64">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: '0%' }}
                animate={{ width: `${count}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>
            <span className="font-display text-6xl font-bold tabular-nums sm:text-7xl">
              {count}
              <span className="text-primary">%</span>
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
