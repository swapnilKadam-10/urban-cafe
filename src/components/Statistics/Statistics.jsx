import { useEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'

const stats = [
  [5000, '+', 'Happy Customers'],
  [50, '+', 'Coffee Varieties'],
  [8, '+', 'Years Experience'],
  [48, '', 'Google Rating'],
]

function Stat({ target, suffix, label }) {
  const [active, setActive] = useState(false)
  const ref = useRef(null)
  const count = useCounter(target, active)
  const value = label === 'Google Rating' ? (count / 10).toFixed(1) : count

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), { threshold: 0.35 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="text-center">
      <p className="font-heading text-5xl font-bold text-accent">{value}{suffix}</p>
      <p className="mt-2 font-semibold text-white/82">{label}</p>
    </div>
  )
}

function Statistics() {
  return (
    <section className="bg-primary py-16 text-white">
      <div className="container grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => <Stat key={stat[2]} target={stat[0]} suffix={stat[1]} label={stat[2]} />)}
      </div>
    </section>
  )
}

export default Statistics
