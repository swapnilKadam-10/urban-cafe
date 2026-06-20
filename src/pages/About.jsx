import { Helmet } from 'react-helmet-async'
import { img } from '../utils/images'

const team = [
  ['Ira Dsouza', 'Head Barista', 'photo-1580489944761-15a19d654956'],
  ['Neil Kapoor', 'Executive Chef', 'photo-1507003211169-0a1dd7228f2d'],
  ['Sara Khan', 'Guest Experience Lead', 'photo-1531123897727-8f129e1688ce'],
]

function About() {
  return (
    <>
      <Helmet><title>About | The URBAN Cafe</title><meta name="description" content="Discover the story, mission, vision, timeline, and team behind The URBAN Cafe." /></Helmet>
      <section className="page-hero text-center"><div className="container"><p className="script text-6xl text-accent">Our journey</p><h1 className="hero-title">About The URBAN Cafe</h1></div></section>
      <section className="section-padding warm-surface">
        <div className="container grid gap-12 lg:grid-cols-2">
          <div data-aos="fade-up">
            <h2 className="section-title">Cafe Story</h2>
            <p className="mt-6 text-lg leading-8 text-secondary">Started in 2018, The URBAN Cafe was designed as a warm escape from the city rush. We pair specialty coffee with chef-led comfort food, candlelit corners, and thoughtful hospitality.</p>
          </div>
          <img src={img('photo-1517248135467-4c7edcad34c4')} alt="Elegant cafe dining room" className="rounded-[32px] shadow-2xl" loading="lazy" />
        </div>
      </section>
      <section className="section-padding bg-cafe-bg">
        <div className="container grid gap-6 md:grid-cols-2">
          <article className="glass-card rounded-[28px] p-8"><h2 className="font-heading text-4xl font-bold">Mission</h2><p className="mt-4 leading-8 text-secondary">To make every visit feel personal through beautiful coffee, fresh ingredients, and quietly excellent service.</p></article>
          <article className="glass-card rounded-[28px] p-8"><h2 className="font-heading text-4xl font-bold">Vision</h2><p className="mt-4 leading-8 text-secondary">To become the city cafe people choose for meaningful conversations, creative work, and memorable celebrations.</p></article>
        </div>
      </section>
      <section className="section-padding warm-surface">
        <div className="container">
          <h2 className="section-title text-center">Timeline</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {['2018 - Started', '2021 - Expanded', '2025 - Award Winning Cafe'].map((item) => <div key={item} className="glass-card rounded-[28px] p-8 text-center font-heading text-2xl font-bold" data-aos="fade-up">{item}</div>)}
          </div>
        </div>
      </section>
      <section className="section-padding bg-cafe-bg">
        <div className="container">
          <h2 className="section-title text-center">Meet the Team</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {team.map(([name, role, photo]) => <article key={name} className="glass-card overflow-hidden rounded-[28px] text-center"><img src={img(photo, 700, 760)} alt={name} className="h-80 w-full object-cover" loading="lazy" /><div className="p-6"><h3 className="font-heading text-2xl font-bold">{name}</h3><p className="text-accent">{role}</p></div></article>)}
          </div>
        </div>
      </section>
    </>
  )
}

export default About
