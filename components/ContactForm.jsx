'use client'

import { useState, useRef } from 'react'
import { Send, CheckCircle2, Loader2 } from 'lucide-react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const formRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)

    const data = new FormData(e.target)
    const name = data.get('name') || ''
    const email = data.get('email') || ''
    const phone = data.get('phone') || ''
    const age = data.get('age') || ''
    const message = data.get('message') || ''

    const subject = encodeURIComponent(`Enquiry from ${name} – LittleSprouts`)
    const body = encodeURIComponent(
      `Hello LittleSprouts team,\n\n` +
      `Parent Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone || 'Not provided'}\n` +
      `Child's Age: ${age || 'Not provided'}\n\n` +
      `Message:\n${message}\n\n` +
      `---\nSent via LittleSprouts website contact form`
    )

    window.location.href = `mailto:info@littlesprouts.example?subject=${subject}&body=${body}`

    await new Promise((r) => setTimeout(r, 500))
    setSending(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-[2rem] p-8 sm:p-10 flex flex-col items-center text-center gap-4 shadow-card border border-purple/10">
        <div className="w-16 h-16 rounded-full bg-green/15 flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-green" />
        </div>
        <p className="font-display font-bold text-xl text-ink">Message prepared!</p>
        <p className="text-body text-sm max-w-xs leading-relaxed">
          Your email client should open with the enquiry. If it did not open automatically, please
          send your message to{' '}
          <a href="mailto:info@littlesprouts.example" className="text-purple font-semibold hover:underline">
            info@littlesprouts.example
          </a>
        </p>
        <button
          onClick={() => { setSubmitted(false); formRef.current?.reset() }}
          className="mt-2 text-sm font-display font-semibold text-purple hover:text-purple-deep transition-colors"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="bg-white rounded-[2rem] p-6 sm:p-8 grid sm:grid-cols-2 gap-4 shadow-card border border-purple/5">
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
          required
          placeholder="Tell us about your child and what you're looking for..."
          className="w-full bg-lavender/60 rounded-2xl px-5 py-4 text-sm text-ink placeholder:text-body/50 focus:outline-none focus:ring-2 focus:ring-purple/30 focus:bg-lavender resize-none transition-colors"
        />
      </div>
      <button
        type="submit"
        disabled={sending}
        className="sm:col-span-2 inline-flex items-center justify-center gap-2.5 bg-purple text-white font-display font-semibold px-7 py-4 rounded-full hover:bg-purple-deep transition-all w-fit shadow-[0_4px_0_0_var(--color-purple-deep)] hover:translate-y-[2px] hover:shadow-[0_2px_0_0_var(--color-purple-deep)] active:translate-y-[4px] active:shadow-none disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {sending ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="w-4 h-4" />
          </>
        )}
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
