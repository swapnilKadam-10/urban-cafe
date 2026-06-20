import { useMemo, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { FaXmark } from 'react-icons/fa6'
import { galleryCategories, galleryItems } from '../data/gallery'

function Gallery() {
  const [category, setCategory] = useState('All')
  const [active, setActive] = useState(null)
  const items = useMemo(() => galleryItems.filter((item) => category === 'All' || item.category === category), [category])

  return (
    <>
      <Helmet><title>Gallery | The URBAN Cafe</title><meta name="description" content="View food, coffee, interior, and event photos from The URBAN Cafe." /></Helmet>
      <section className="page-hero text-center"><div className="container"><p className="script text-6xl text-accent">Frames</p><h1 className="hero-title">Gallery</h1></div></section>
      <section className="section-padding warm-surface">
        <div className="container">
          {/* <div className="mb-10 flex flex-wrap justify-center gap-3">
            {galleryCategories.map((item) => <button key={item} type="button" onClick={() => setCategory(item)} className={`rounded-full px-5 py-2 font-semibold ${category === item ? 'bg-primary text-white' : 'bg-white text-primary'}`}>{item}</button>)}
          </div> */}
          <div className="masonry">
            {items.map((item) => (
              <button key={item.id} type="button" onClick={() => setActive(item)} className="masonry-item group block w-full overflow-hidden rounded-[26px] text-left shadow-xl">
                <img src={item.image} alt={item.alt} loading="lazy" className="w-full object-cover transition duration-500 group-hover:scale-105" />
              </button>
            ))}
          </div>
        </div>
      </section>
      {active && (
        <div className="fixed inset-0 z-[80] grid place-items-center bg-primary/90 p-4" role="dialog" aria-modal="true">
          <button type="button" aria-label="Close lightbox" onClick={() => setActive(null)} className="absolute right-5 top-5 grid size-12 place-items-center rounded-full bg-white text-primary"><FaXmark /></button>
          <img src={active.image} alt={active.alt} className="max-h-[82vh] max-w-full rounded-[28px] object-contain shadow-2xl" />
        </div>
      )}
    </>
  )
}

export default Gallery
