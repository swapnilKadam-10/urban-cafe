import { Helmet } from 'react-helmet-async'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { FaStar } from 'react-icons/fa6'
import { reviews } from '../data/reviews'

function Reviews() {
  return (
    <>
      <Helmet><title>Reviews | The URBAN Cafe</title><meta name="description" content="Read customer reviews and ratings for The URBAN Cafe." /></Helmet>
      <section className="page-hero text-center"><div className="container"><p className="script text-6xl text-accent">Guest love</p><h1 className="hero-title">Reviews</h1></div></section>
      <section className="section-padding bg-cafe-bg">
        <div className="container">
          <div className="glass-card mx-auto mb-12 max-w-xl rounded-[32px] p-8 text-center">
            <p className="font-heading text-6xl font-bold text-accent">4.8/5</p>
            <p className="mt-2 text-xl font-semibold">500+ Reviews</p>
            <div className="mt-4 flex justify-center text-accent"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
          </div>
          <Swiper modules={[Autoplay, Pagination, Navigation]} navigation pagination={{ clickable: true }} autoplay={{ delay: 3800 }} spaceBetween={24} breakpoints={{ 768: { slidesPerView: 2 } }}>
            {reviews.map((review) => (
              <SwiperSlide key={review.id} className="pb-12">
                <article className="glass-card rounded-[28px] p-8">
                  <div className="flex items-center gap-4">
                    <img src={review.image} alt={review.name} className="size-18 rounded-full object-cover" loading="lazy" />
                    <div><h2 className="font-heading text-2xl font-bold">{review.name}</h2><p className="text-sm text-secondary">{review.date}</p></div>
                  </div>
                  <div className="mt-5 flex text-accent">{Array.from({ length: review.rating }).map((_, index) => <FaStar key={index} />)}</div>
                  <p className="mt-5 leading-8 text-secondary">"{review.text}"</p>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  )
}

export default Reviews
