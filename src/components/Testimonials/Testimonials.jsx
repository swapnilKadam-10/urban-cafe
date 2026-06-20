import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { FaStar } from 'react-icons/fa6'
import { reviews } from '../../data/reviews'

function Testimonials() {
  return (
    <section className="section-padding bg-cafe-bg">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="script text-5xl text-accent">Guest notes</p>
          <h2 className="section-title">Loved by coffee people.</h2>
        </div>
        <Swiper modules={[Autoplay, Pagination]} pagination={{ clickable: true }} autoplay={{ delay: 3600 }} spaceBetween={24} breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}>
          {reviews.map((review) => (
            <SwiperSlide key={review.id} className="pb-12">
              <article className="glass-card h-full rounded-[28px] p-7">
                <div className="flex items-center gap-4">
                  <img src={review.image} alt={review.name} className="size-16 rounded-full object-cover" loading="lazy" />
                  <div>
                    <h3 className="font-heading text-xl font-bold">{review.name}</h3>
                    <div className="flex text-accent" aria-label={`${review.rating} star review`}>
                      {Array.from({ length: review.rating }).map((_, index) => <FaStar key={index} />)}
                    </div>
                  </div>
                </div>
                <p className="mt-5 leading-7 text-secondary">"{review.text}"</p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials
