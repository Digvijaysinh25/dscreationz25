'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springX = useSpring(cursorX, { stiffness: 500, damping: 40, mass: 0.4 })
  const springY = useSpring(cursorY, { stiffness: 500, damping: 40, mass: 0.4 })

  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // only enable on fine pointers
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    document.documentElement.classList.add('custom-cursor-active')

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      setVisible(true)

      const target = e.target as HTMLElement
      const interactive = target.closest('a, button, [data-cursor="hover"]')
      setHovering(Boolean(interactive))
    }

    const leave = () => setVisible(false)

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseleave', leave)
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseleave', leave)
      document.documentElement.classList.remove('custom-cursor-active')
    }
  }, [cursorX, cursorY])

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[90] hidden md:block"
      style={{ x: springX, y: springY, opacity: visible ? 1 : 0 }}
    >
      <motion.div
        className="-ml-1 -mt-1 rounded-full bg-primary mix-blend-difference"
        animate={{
          width: hovering ? 48 : 10,
          height: hovering ? 48 : 10,
          marginLeft: hovering ? -24 : -5,
          marginTop: hovering ? -24 : -5,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      />
    </motion.div>
  )
}
