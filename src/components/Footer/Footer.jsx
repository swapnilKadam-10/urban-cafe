import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram } from 'react-icons/fa6'

const quickLinks = [ 'Menu', 'Specials', 'Gallery', 'Reviews', 'Contact']

function Footer() {
  return (
    <footer className="bg-primary pt-16 text-white">
      <div className="container grid gap-10 pb-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-heading text-3xl font-bold">The URBAN</p>
          <p className="script text-4xl text-accent">Cafe</p>
          <p className="mt-4 leading-7 text-white/72">Premium coffee, warm plates, and cozy city evenings.</p>
          <div className="mt-6 flex gap-3">
            {[FaInstagram].map((Icon, index) => <a key={index} href="https://www.instagram.com/theurbancafebaramati/?hl=en" aria-label="Social media profile" className="grid size-10 place-items-center rounded-full bg-white/10 hover:bg-accent hover:text-primary" target="_blank" rel="noopener noreferrer"><Icon /></a>)}
          </div>
        </div>
        <div>
          <h2 className="font-heading text-xl font-bold">Quick Links</h2>
          <div className="mt-4 grid gap-3">
            {quickLinks.map((link) => <Link key={link} to={`/${link.toLowerCase()}`} className="text-white/74 hover:text-accent">{link}</Link>)}
            <Link to="/reservation" className="text-white/74 hover:text-accent">Reserve Table</Link>
          </div>
        </div>
        <div>
          <h2 className="font-heading text-xl font-bold">Contact</h2>
          <div className="mt-4 space-y-3 text-white/74">
            <p>Shop No. G-9, Dynamix Residential Colony, Jalochi Rd, beside of Schreiber, near Vidya Nagari, Rui, Maharashtra 413133</p>
            <p>+91 9359370996</p>
            <p>theurbancafe1@gmail.com</p>
          </div>
        </div>
        {/* <div>
          <h2 className="font-heading text-xl font-bold">Newsletter</h2>
          <p className="mt-4 text-white/74">Reserve a little inbox space for seasonal specials.</p>
          <form className="mt-5 flex overflow-hidden rounded-full bg-white" onSubmit={(event) => event.preventDefault()}>
            <input aria-label="Email address" type="email" placeholder="Email address" className="min-w-0 flex-1 px-4 text-primary outline-none" />
            <button type="submit" className="bg-accent px-5 font-bold text-primary">Join</button>
          </form>
          <div className="mt-5 text-sm text-white/65">
            <p>Mon-Fri: 8 AM - 10 PM</p>
            <p>Sat: 8 AM - 11 PM</p>
            <p>Sun: 9 AM - 9 PM</p>
          </div>
        </div> */}
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-white/60">Copyright @2026 K&K Solutions. All rights reserved.</div>
    </footer>
  )
}

export default Footer
