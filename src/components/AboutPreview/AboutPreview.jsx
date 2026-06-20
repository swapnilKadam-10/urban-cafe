import { Link } from 'react-router-dom'

function AboutPreview() {
  return (
    <section id="about-preview" className="section-padding warm-surface">
      <div className="container grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative" data-aos="zoom-in">
          <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=82" alt="Cozy cafe seating at The URBAN Cafe" className="aspect-[4/5] w-full rounded-[32px] object-cover shadow-2xl" loading="lazy" />
          <div className="glass-card absolute -bottom-8 right-4 max-w-64 rounded-[26px] p-6">
            <p className="script text-4xl text-accent">Since 2018</p>
            <p className="mt-2 text-sm font-semibold text-primary">Small-batch coffee, warm plates, and evenings worth remembering.</p>
          </div>
        </div>
        <div data-aos="fade-up">
          <p className="script text-5xl text-accent">Our story</p>
          <h2 className="section-title mt-2">A luxury cafe heart with a neighborhood soul.</h2>
          <p className="mt-6 text-lg leading-8 text-secondary">The URBAN Cafe began as a tiny espresso bar built around one promise: every cup should feel personal. Today our chefs, baristas, and hosts create a warm, design-led space for slow breakfasts, celebratory dinners, focused work, and golden-hour coffee dates.</p>
          <Link to="/about" className="premium-button mt-8">Learn More</Link>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview
