'use client'

import { useEffect, useRef } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/locomotive-scroll.css'

export default function SmoothScroll() {
  const scrollRef = useRef<LocomotiveScroll | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      scrollRef.current = new LocomotiveScroll({
        lenisOptions: {
          duration: 1.2,
          smoothWheel: true,
          smoothTouch: false,
        },
      })

      return () => {
        scrollRef.current?.destroy()
      }
    }
  }, [])

  return null
}
