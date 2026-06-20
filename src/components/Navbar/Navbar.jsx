import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaXmark } from 'react-icons/fa6'

import  logo  from '../../../public/logo.png'

const links = [
  ['/', 'Home'],
  // ['/about', 'About'],
  ['/menu', 'Menu'],
  ['/specials', 'Specials'],
  ['/gallery', 'Gallery'],
  ['/reviews', 'Reviews'],
  ['/contact', 'Contact'],
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 ${scrolled || open ? 'bg-primary/95 shadow-2xl backdrop-blur-xl' : 'bg-transparent'}`}>
      <nav className="container flex min-h-20 items-center justify-between" aria-label="Main navigation">
        <Link
  to="/"
  className="flex items-center gap-3 text-white"
  onClick={() => setOpen(false)}
>
  <img
    src={logo}
    alt="The URBAN Cafe Logo"
    className="h-12 w-12 rounded-full object-cover"
  />

  <span>
    <span className="block font-heading text-xl font-bold leading-none">
      The URBAN
    </span>
    <span className="script block text-2xl leading-none text-accent">
      Cafe
    </span>
  </span>
</Link>
        <button className="grid size-11 place-items-center rounded-full bg-white/10 text-white lg:hidden" type="button" aria-label="Toggle menu" onClick={() => setOpen((value) => !value)}>
          {open ? <FaXmark /> : <FaBars />}
        </button>
        <div className={`${open ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-4 opacity-0'} absolute left-4 right-4 top-24 rounded-[28px] bg-primary p-5 shadow-2xl lg:pointer-events-auto lg:static lg:flex lg:translate-y-0 lg:items-center lg:gap-7 lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none`}>
          <div className="flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-1">
            {links.map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `rounded-full px-4 py-2 text-sm font-semibold text-white/86 hover:bg-white/10 hover:text-white ${isActive ? 'bg-white/14 text-accent' : ''}`}
              >
                {label}
              </NavLink>
            ))}
          </div>
          <Link to="/reservation" onClick={() => setOpen(false)} className="mt-4 flex min-h-11 items-center justify-center rounded-full bg-accent px-5 text-sm font-bold text-primary lg:mt-0">
            Reserve Table
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
