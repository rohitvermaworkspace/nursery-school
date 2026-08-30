'use client'

import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-[2rem] p-8 sm:p-10 flex flex-col items-center text-center gap-4 shadow-card border border-purple/10">
        <div className="w-16 h-16 rounded-full bg-green/15 flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-green" />
        </div>
        <p className="font-display font-bold text-xl text-ink">Message sent!</p>
        <p className="text-body text-sm max-w-xs leading-relaxed">
          Thanks for reaching out — our admissions team will get back to you within one business
          day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-[2rem] p-6 sm:p-8 grid sm:grid-cols-2 gap-4 shadow-card border border-purple/5">
      <Field label="Parent Name" name="name" required />
      <Field label="Email Address" name="email" type="email" required />
      <Field label="Phone Number" name="phone" type="tel" />
      <Field label="Child's Age" name="age" />
      <div className="sm:col-span-2">
        <label className="sr-only" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about your child and what you're looking for..."
          className="w-full bg-lavender/60 rounded-2xl px-5 py-4 text-sm text-ink placeholder:text-body/50 focus:outline-none focus:ring-2 focus:ring-purple/30 focus:bg-lavender resize-none transition-colors"
        />
      </div>
      <button
        type="submit"
        className="sm:col-span-2 inline-flex items-center justify-center gap-2.5 bg-purple text-white font-display font-semibold px-7 py-4 rounded-full hover:bg-purple-deep transition-all w-fit shadow-[0_4px_0_0_var(--color-purple-deep)] hover:translate-y-[2px] hover:shadow-[0_2px_0_0_var(--color-purple-deep)] active:translate-y-[4px] active:shadow-none"
      >
        Send Message
        <Send className="w-4 h-4" />
      </button>
    </form>
  )
}

function Field({ label, name, type = 'text', required = false }) {
  return (
    <div>
      <label className="sr-only" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={label}
        className="w-full bg-lavender/60 rounded-full px-5 py-3.5 text-sm text-ink placeholder:text-body/50 focus:outline-none focus:ring-2 focus:ring-purple/30 focus:bg-lavender transition-colors"
      />
    </div>
  )
}
