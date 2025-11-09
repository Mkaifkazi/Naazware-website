'use client'

import { useEffect, useRef } from 'react'

export default function SmoothScroll() {
  const scrollRef = useRef<{ destroy: () => void } | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // @ts-expect-error - locomotive-scroll types issue
      import('locomotive-scroll').then((LocomotiveScroll) => {
        scrollRef.current = new LocomotiveScroll.default({
          lenisOptions: {
            duration: 1.2,
            smoothWheel: true,
            smoothTouch: false,
          },
        })
      })

      return () => {
        scrollRef.current?.destroy()
      }
    }
  }, [])

  return null
}
