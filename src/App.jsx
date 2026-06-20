import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import AppRoutes from './routes/AppRoutes'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Loader from './components/Loader/Loader'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'
import ScrollTop from './components/ScrollTop/ScrollTop'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    AOS.init({ duration: 850, easing: 'ease-out-cubic', once: true, offset: 80 })
    const timer = setTimeout(() => setLoading(false), 900)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading && <Loader />}
      <Navbar />
      <ScrollTop />
      <AppRoutes />
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </>
  )
}

export default App
