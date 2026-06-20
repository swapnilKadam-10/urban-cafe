import { FaWhatsapp } from 'react-icons/fa6'

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919359370996?text=Hi%20The%20URBAN%20Cafe%2C%20I%20would%20like%20to%20reserve%20a%20table."
      aria-label="Chat on WhatsApp"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-5 z-40 grid size-14 place-items-center rounded-full bg-green-500 text-2xl text-white shadow-2xl hover:-translate-y-1"
    >
      <FaWhatsapp />
    </a>
  )
}

export default WhatsAppButton
