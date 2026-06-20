import { Helmet } from 'react-helmet-async'
import { todaysSpecials } from '../data/menu'

function Specials() {
  return (
    <>
      <Helmet><title>Signature Specials | The URBAN Cafe</title><meta name="description" content="Discover signature specials and premium chef recommendations at The URBAN Cafe." /></Helmet>
      <section className="page-hero text-center"><div className="container"><p className="script text-6xl text-accent">Signature</p><h1 className="hero-title">Specials</h1></div></section>
      <section className="section-padding warm-surface">
        <div className="container space-y-10">
          {todaysSpecials.map((item, index) => (
            <article key={item.id} className={`glass-card grid overflow-hidden rounded-[32px] lg:grid-cols-2 ${index % 2 ? 'lg:[&>img]:order-2' : ''}`} data-aos="fade-up">
              <img src={item.image} alt={item.name} className="h-full min-h-96 w-full object-cover" loading="lazy" />
              <div className="p-8 md:p-12">
                <span className="rounded-full bg-accent px-4 py-2 text-sm font-bold text-primary">Popular</span>
                <h2 className="mt-6 font-heading text-5xl font-bold">{item.name}</h2>
                <p className="mt-5 text-lg leading-8 text-secondary">{item.description} Crafted in limited daily batches for a richer cafe experience.</p>
                <p className="mt-8 font-heading text-4xl font-bold text-accent">₹{item.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default Specials
