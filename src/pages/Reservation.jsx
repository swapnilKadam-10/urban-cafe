import { Helmet } from 'react-helmet-async'
import ReservationForm from '../components/ReservationForm/ReservationForm'
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

function Reservation() {

  // const whatsappLink =
  //   "https://wa.me/919359370996?text=Hello%20The%20Urban%20Cafe!%0A%0AI%20would%20like%20to%20reserve%20a%20table.%0A%0AName:%20%0ADate:%20%0ATime:%20%0ANumber%20of%20Guests:%20";

  const whatsappLink = "https://wa.me/919359370996?text=Hi%20The%20URBAN%20Cafe%2C%20I%20would%20like%20to%20reserve%20a%20table.";

  return (
    <>
      <Helmet><title>Reserve Table | The URBAN Cafe</title><meta name="description" content="Reserve a table online at The URBAN Cafe." /></Helmet>
      <section className="page-hero text-center"><div className="container"><p className="script text-6xl text-accent">Book a table</p><h1 className="hero-title">Reservation</h1></div></section>
      <section className="section-padding warm-surface">
        <div className="container mx-auto max-w-5xl grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <h2 className="section-title">Plan your perfect cafe moment.</h2>
            <p className="mt-6 text-lg leading-8 text-secondary">Share your preferred date, time, and occasion. Our team will prepare a cozy table and confirm your reservation as soon as possible.</p>
          </div>
          <div className="rounded-3xl border border-accent/20 bg-white p-8 md:p-10 shadow-xl text-center">
  <FaWhatsapp className="mx-auto mb-5 text-6xl text-green-500" />

  <h3 className="mb-3 text-2xl font-bold text-primary">
    Quick Reservation via WhatsApp
  </h3>

  <p className="mb-8 text-secondary leading-7">
    Reserve your table instantly through WhatsApp. Share your preferred date,
    time, and number of guests, and we'll confirm your booking shortly.
  </p>

  <a
    href={whatsappLink}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-3 rounded-full bg-green-500 px-8 py-4 text-lg font-semibold text-white transition duration-300 hover:scale-105 hover:bg-green-600"
  >
    <FaWhatsapp />
    Reserve on WhatsApp
  </a>

  {/* Divider */}
  <div className="my-8 border-t border-accent/20"></div>

  {/* Call Section */}
  <div>
    <p className="mb-3 text-sm uppercase tracking-widest text-accent">
      Or Call Us
    </p>

    <a
      href="tel:+919359370996"
      className="inline-flex items-center gap-2 text-lg font-semibold text-primary transition hover:text-accent"
    >
      <FaPhoneAlt />
      +91 93593 70996
    </a>
  </div>

  {/* Divider */}
  {/* <div className="my-8 border-t border-accent/20"></div> */}

  {/* Opening Hours */}
  {/* <div>
    <h4 className="mb-4 text-lg font-semibold text-primary">
      Opening Hours
    </h4>

    <div className="space-y-2 text-secondary">
      <p>Monday - Friday: 8:00 AM - 10:00 PM</p>
      <p>Saturday: 8:00 AM - 11:00 PM</p>
      <p>Sunday: 9:00 AM - 9:00 PM</p>
    </div>
  </div> */}
</div>
        </div>
      </section>
    </>
  )
}

export default Reservation
