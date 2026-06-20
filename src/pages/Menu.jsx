import { useMemo, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { menuCategories, menuItems } from '../data/menu'
import MenuCard from '../components/MenuCard/MenuCard'

function Menu() {
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')
  const filtered = useMemo(() => menuItems.filter((item) => (category === 'All' || item.category === category) && item.name.toLowerCase().includes(query.toLowerCase())), [category, query])

  return (
    <>
      <Helmet><title>Menu | The URBAN Cafe</title><meta name="description" content="Explore coffee, tea, mocktails, pizza, pasta, burgers, desserts, and more at The URBAN Cafe." /></Helmet>
      <section className="page-hero text-center"><div className="container"><p className="script text-6xl text-accent">Taste notes</p><h1 className="hero-title">Our Menu</h1></div></section>
      <section className="p-5 warm-surface">
        <div className="container">
          <div className=" mb-10 rounded-[28px] p-5">
            {/* <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search menu" aria-label="Search menu" className="mb-4 min-h-10 w-full rounded-full border border-primary/10 px-5" /> */}
            <div className="flex flex-wrap gap-3  justify-center">
              {menuCategories.map((item) => <button key={item} type="button" onClick={() => setCategory(item)} className={`rounded-full px-5 py-2 font-semibold cursor-pointer ${category === item ? 'bg-primary text-white' : 'bg-white text-primary'}`}>{item}</button>)}
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{filtered.map((item) => <MenuCard key={item.id} item={item} />)}</div>
        </div>
      </section>
    </>
  )
}

export default Menu
