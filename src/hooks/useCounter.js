import { useEffect, useState } from 'react'

export function useCounter(target, active, duration = 1400) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return undefined
    let frame
    const start = performance.now()
    const tick = (time) => {
      const progress = Math.min((time - start) / duration, 1)
      setValue(Math.floor(progress * target))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [active, duration, target])

  return value
}
