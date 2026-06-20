import { FaEnvelope, FaLocationDot, FaPhone, FaInstagram, FaFacebookF, FaXTwitter } from 'react-icons/fa6'

function ContactSection() {
  return (
    <section className="section-padding warm-surface">
      <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="script text-5xl text-accent">Visit us</p>
          <h2 className="section-title">Your table is waiting.</h2>
          <div className="mt-8 space-y-4">
            {[
              [FaLocationDot, 'Shop No. G-9, Dynamix Residential Colony, Jalochi Rd, beside of Schreiber, near Vidya Nagari, Rui, Maharashtra 413133'],
              [FaPhone, '+91 9359370996'],
              [FaEnvelope, 'theurbancafe1@gmail.com'],
            ].map(([Icon, text]) => (
              <p key={text} className="flex items-center gap-4 rounded-2xl bg-white/70 p-4 shadow-sm"><Icon className="text-accent" /> {text}</p>
            ))}
          </div>
          <div className="mt-8 rounded-[28px] bg-primary p-6 text-white">
            <h3 className="font-heading text-2xl font-bold">Opening Hours</h3>
            <p className="mt-4">Monday-Friday: 8:00 AM - 10:00 PM</p>
            <p>Saturday: 8:00 AM - 11:00 PM</p>
            <p>Sunday: 9:00 AM - 9:00 PM</p>
          </div>
          <div className="mt-7 flex gap-3 text-white">
            {[FaInstagram, FaFacebookF, FaXTwitter].map((Icon, index) => <a key={index} href="https://example.com" aria-label="Social media profile" className="grid size-11 place-items-center rounded-full bg-primary hover:bg-accent hover:text-primary"><Icon /></a>)}
          </div>
        </div>
        <iframe
          title="Google map showing The URBAN Cafe location"
          className="min-h-[460px] w-full rounded-[32px] border-0 shadow-2xl"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.1160852790304!2d74.6096947!3d18.1757428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc39f4f8edc4655%3A0x69b6aa938499962b!2sThe%20URBAN%20Cafe%20%7C%20Food%20%26%20Beverage!5e1!3m2!1sen!2sin!4v1781919806514!5m2!1sen!2sin"
          
        />
        
      </div>
    </section>
  )
}

export default ContactSection
