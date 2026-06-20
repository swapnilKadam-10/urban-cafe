import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero/Hero'
import AboutPreview from '../components/AboutPreview/AboutPreview'
import TodaysSpecial from '../components/TodaysSpecial/TodaysSpecial'
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs'
import Statistics from '../components/Statistics/Statistics'
import Testimonials from '../components/Testimonials/Testimonials'
import GalleryPreview from '../components/GalleryPreview/GalleryPreview'
import FAQ from '../components/FAQ/FAQ'

function Home() {
  return (
    <>
      <Helmet>
        <title>The URBAN Cafe | Premium Coffee and Cozy Dining</title>
        <meta name="description" content="Experience premium coffee, delicious food, and unforgettable ambience at The URBAN Cafe." />
        <meta property="og:title" content="The URBAN Cafe" />
        <meta property="og:description" content="Premium coffee, warm food, and luxury cafe ambience." />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Hero />
      {/* <AboutPreview /> */}
      <TodaysSpecial />
      <WhyChooseUs />
      <Statistics />
      <Testimonials />
      <GalleryPreview />
      {/* <FAQ /> */}
    </>
  )
}

export default Home
