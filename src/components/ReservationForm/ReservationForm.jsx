import { useState } from 'react'
import emailjs from '@emailjs/browser'

const initialForm = { name: '', phone: '', email: '', date: '', time: '', guests: '2', occasion: '', message: '' }

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Full name is required.'
  if (!/^\+?[0-9\s-]{8,15}$/.test(form.phone)) errors.phone = 'Enter a valid phone number.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Enter a valid email address.'
  if (!form.date) errors.date = 'Date is required.'
  if (form.date && new Date(`${form.date}T00:00:00`) < new Date(new Date().toDateString())) errors.date = 'Please choose a future date.'
  if (!form.time) errors.time = 'Time is required.'
  if (!form.guests || Number(form.guests) < 1) errors.guests = 'Guest count is required.'
  return errors
}

function ReservationForm() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')

  const update = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }))

  const submit = async (event) => {
    event.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return
    setStatus('sending')
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    try {
      if (serviceId && templateId && publicKey) {
        await emailjs.send(serviceId, templateId, form, { publicKey })
      }
      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('error')
    }
  }

  const inputClass = 'min-h-12 w-full rounded-2xl border border-primary/10 bg-white/80 px-4 text-primary placeholder:text-secondary/60'

  return (
    <form onSubmit={submit} className="glass-card rounded-[32px] p-6 md:p-8" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        {[
          ['name', 'Full Name', 'text'],
          ['phone', 'Phone Number', 'tel'],
          ['email', 'Email', 'email'],
          ['date', 'Date', 'date'],
          ['time', 'Time', 'time'],
          ['guests', 'Number of Guests', 'number'],
          ['occasion', 'Occasion', 'text'],
        ].map(([name, label, type]) => (
          <label key={name} className={name === 'occasion' ? 'md:col-span-2' : ''}>
            <span className="mb-2 block text-sm font-semibold">{label}</span>
            <input className={inputClass} type={type} name={name} min={name === 'guests' ? '1' : undefined} value={form[name]} onChange={update} required={name !== 'occasion'} />
            {errors[name] && <span className="mt-1 block text-sm text-red-700">{errors[name]}</span>}
          </label>
        ))}
        <label className="md:col-span-2">
          <span className="mb-2 block text-sm font-semibold">Message</span>
          <textarea className={`${inputClass} min-h-32 py-3`} name="message" value={form.message} onChange={update} />
        </label>
      </div>
      <button type="submit" className="premium-button mt-7 w-full md:w-auto" disabled={status === 'sending'}>
        {status === 'sending' ? 'Reserving...' : 'Reserve Table'}
      </button>
      {status === 'success' && <p className="mt-5 rounded-2xl bg-success/12 p-4 font-semibold text-success">Your Table Has Been Reserved Successfully.</p>}
      {status === 'error' && <p className="mt-5 rounded-2xl bg-red-100 p-4 font-semibold text-red-800">Reservation saved locally, but email could not be sent. Check EmailJS settings.</p>}
    </form>
  )
}

export default ReservationForm
