import { lazy, Suspense } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Loader from '../components/Loader/Loader'

const Home = lazy(() => import('../pages/Home'))
// const About = lazy(() => import('../pages/About'))
const Menu = lazy(() => import('../pages/Menu'))
const Specials = lazy(() => import('../pages/Specials'))
const Gallery = lazy(() => import('../pages/Gallery'))
const Reviews = lazy(() => import('../pages/Reviews'))
const Contact = lazy(() => import('../pages/Contact'))
const Reservation = lazy(() => import('../pages/Reservation'))

function Page({ children }) {
  return (
    <motion.main initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }} transition={{ duration: 0.35 }}>
      {children}
    </motion.main>
  )
}

function AppRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<Loader />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Page><Home /></Page>} />
          {/* <Route path="/about" element={<Page><About /></Page>} /> */}
          <Route path="/menu" element={<Page><Menu /></Page>} />
          <Route path="/specials" element={<Page><Specials /></Page>} />
          <Route path="/gallery" element={<Page><Gallery /></Page>} />
          <Route path="/reviews" element={<Page><Reviews /></Page>} />
          <Route path="/contact" element={<Page><Contact /></Page>} />
          <Route path="/reservation" element={<Page><Reservation /></Page>} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  )
}

export default AppRoutes
