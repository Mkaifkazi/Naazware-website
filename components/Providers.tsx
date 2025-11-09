'use client'

import { useEffect } from 'react'

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Import Bootstrap JS only on client side
    require('bootstrap/dist/js/bootstrap.bundle.min.js')
  }, [])

  return <>{children}</>
}
