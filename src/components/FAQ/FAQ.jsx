import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa6'
import { faqs } from '../../data/faq'

function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section className="section-padding bg-cafe-bg">
      <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="script text-5xl text-accent">Questions</p>
          <h2 className="section-title">Before you visit.</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="glass-card rounded-[24px]">
              <button type="button" className="flex w-full items-center justify-between gap-4 p-6 text-left font-heading text-xl font-bold" aria-expanded={open === index} onClick={() => setOpen(open === index ? -1 : index)}>
                {faq.question}
                <FaChevronDown className={open === index ? 'rotate-180' : ''} />
              </button>
              <div className={`grid transition-all ${open === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 leading-7 text-secondary">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
