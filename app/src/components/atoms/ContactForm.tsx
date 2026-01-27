import { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { PiHandPeaceLight } from "react-icons/pi";
import { FaRegPaperPlane } from "react-icons/fa";

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [company, setCompany] = useState('')
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setStatus('idle')

    if (company.trim() !== '') {
      setStatus('success')
      return
    }

    if (!message.trim()) {
      setLoading(false)
      setStatus('error')
      return
    }

    const { error } = await supabase
      .from('contact_form')
      .insert({ name, email, message })

    setLoading(false)

    if (error) {
      console.error(error)
      setStatus('error')
    } else {
      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
    }
  }

  return (
    <div className="w-full flex flex-col items-center justify-center text-gray-600 font-normal pt-5 gap-5">
      <div className="flex flex-col gap-5 items-center">

        {status === 'success' ? (
          <div className="flex flex-col gap-5 items-center">
            <FaRegPaperPlane className="text-7xl text-gray-600" />
            <span className="font-medium text-xl">Message sent. Thanks!</span>
          </div>
        ) : (
          <div className="flex flex-col gap-5 items-center">
            <PiHandPeaceLight className="text-7xl text-gray-600"/>
            <span className="font-medium text-xl">Thanks for visiting! Leave a note.</span>
          </div>
        )}

      </div>
    <form id={"contact"} onSubmit={handleSubmit} className="w-1/3 flex flex-col gap-5">
      <div>
        <label className="block">Name*</label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full border rounded px-3 py-2 font-normal"
          required
        />
      </div>

      <div>
        <label className="block">Email*</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full border rounded px-3 py-2 font-normal"
          required
        />
      </div>

      <div>
        <input
          type="text"
          name="company"
          value={company}
          onChange={e => setCompany(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          style={{
            position: 'absolute',
            left: '-10000px'
          }}
        />
      </div>

      <div>
        <label className="block">Message*</label>
        <textarea
          value={message}
          onChange={e => setMessage(e.target.value)}
          rows={5}
          required
          className="w-full border rounded px-3 py-2 font-normal"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-r from-orange-600 to-pink-600 text-white rounded py-2 disabled:opacity-50"
      >
        {loading ? 'SENDING…' : 'SEND'}
      </button>

      {status === 'error' && (
        <p className="text-red-600 text-sm">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
    </div>
  )
}
