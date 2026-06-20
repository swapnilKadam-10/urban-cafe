import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowDown, FaMugSaucer } from 'react-icons/fa6'

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      <img src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=2200&q=84" alt="Warm premium cafe interior with coffee bar" className="absolute inset-0 h-full w-full object-cover" loading="eager" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/92 via-primary/62 to-secondary/50" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cafe-bg to-transparent" />
      <div className="container relative z-10 flex min-h-screen items-center pb-16 pt-28">
        <div className="max-w-4xl">
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="script mb-4 text-5xl text-accent md:text-7xl">The URBAN Cafe</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className=" section-title">Your Cozy Place for Yummy Food, Coffee and Conversations!</motion.h1>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }} className="mt-6 max-w-2xl text-lg leading-8 text-white/86 md:text-xl">
            Experience premium coffee, delicious food, and unforgettable ambience.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.36 }} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link to="/reservation" className="premium-button"><FaMugSaucer /> Reserve Table</Link>
            <Link to="/menu" className="outline-button">Explore Menu</Link>
          </motion.div>
        </div>
      </div>
      <a href="#about-preview" aria-label="Scroll to about section" className="absolute bottom-9 left-1/2 z-10 grid -translate-x-1/2 place-items-center text-white/80">
        <FaArrowDown className="animate-bounce" />
      </a>
    </section>
  )
}

export default Hero
