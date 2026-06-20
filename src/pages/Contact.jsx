import { Helmet } from 'react-helmet-async'
import ContactSection from '../components/ContactSection/ContactSection'

function Contact() {
  return (
    <>
      <Helmet><title>Contact | The URBAN Cafe</title><meta name="description" content="Find The URBAN Cafe address, phone, email, opening hours, and map." /></Helmet>
      <section className="page-hero text-center"><div className="container"><p className="script text-6xl text-accent">Say hello</p><h1 className="hero-title">Contact</h1></div></section>
      <ContactSection />
    </>
  )
}

export default Contact
