import { FaBowlFood, FaClock, FaLeaf, FaMugHot } from 'react-icons/fa6'

const features = [
  ['Premium Coffee', 'Single-origin beans roasted for deep aroma and a smooth finish.', FaMugHot],
  ['Fresh Ingredients', 'Seasonal produce, house sauces, and careful daily prep.', FaLeaf],
  ['Cozy Atmosphere', 'Warm lighting, soft textures, and corners made for lingering.', FaBowlFood],
  ['Fast Service', 'Attentive hosts and baristas who respect your time.', FaClock],
]

function WhyChooseUs() {
  return (
    <section className="section-padding warm-surface">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="script text-5xl text-accent">Why us</p>
          <h2 className="section-title">Made for premium everyday rituals.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map(([title, text, Icon]) => (
            <article key={title} className="glass-card group rounded-[28px] p-7 hover:-translate-y-2" data-aos="fade-up">
              <div className="mb-6 grid size-14 place-items-center rounded-2xl bg-primary text-2xl text-accent group-hover:bg-accent group-hover:text-primary"><Icon /></div>
              <h3 className="font-heading text-2xl font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-secondary">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
