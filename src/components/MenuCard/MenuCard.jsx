import { FaStar } from 'react-icons/fa6'

function MenuCard({ item }) {
  return (
    <article className="group glass-card overflow-hidden rounded-[28px]" data-aos="fade-up">
      <div className="relative overflow-hidden">
        <img src={item.image} alt={item.name} className="h-64 w-full object-cover transition duration-500 group-hover:scale-110" loading="lazy" />
        {(item.chefRecommended || item.popular) && (
          <span className="absolute left-4 top-4 rounded-full bg-accent px-4 py-2 text-xs font-bold uppercase tracking-wide text-primary">
            {item.chefRecommended ? 'Chef Recommendation' : 'Popular'}
          </span>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-heading text-2xl font-bold text-primary">{item.name}</h3>
          <p className="rounded-full bg-primary px-4 py-2 font-bold text-white">₹{item.price}</p>
        </div>
        <p className="mt-3 text-sm leading-6 text-secondary">{item.description}</p>
        <div className="mt-5 flex text-accent" aria-label="Five star rating"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
      </div>
    </article>
  )
}

export default MenuCard
