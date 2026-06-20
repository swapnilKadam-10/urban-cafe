import { Link } from 'react-router-dom'
import { galleryItems } from '../../data/gallery'

function GalleryPreview() {
  return (
    <section className="section-padding warm-surface">
      <div className="container">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="script text-5xl text-accent">Moments</p>
            <h2 className="section-title">Gallery Preview</h2>
          </div>
          <Link to="/gallery" className="premium-button self-start md:self-auto">View Full Gallery</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.slice(0, 8).map((item, index) => (
            <Link to="/gallery" key={item.id} className={`group overflow-hidden rounded-[26px] shadow-xl ${index === 0 || index === 5 ? 'sm:row-span-2' : ''}`} data-aos="zoom-in">
              <img src={item.image} alt={item.alt} className="h-full min-h-64 w-full object-cover transition duration-500 group-hover:scale-110" loading="lazy" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GalleryPreview
