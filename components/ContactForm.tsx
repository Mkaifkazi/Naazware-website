'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  company: z.string().optional(),
  budget: z.string().min(1, 'Please select a budget range'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  consent: z.boolean().refine((val) => val === true, {
    message: 'You must agree to continue',
  }),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="needs-validation" noValidate>
      <div className="mb-4">
        <label htmlFor="name" className="form-label fw-semibold">
          Name *
        </label>
        <input
          type="text"
          id="name"
          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
          {...register('name')}
          style={{ borderRadius: 'var(--radius-sm)' }}
        />
        {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="form-label fw-semibold">
          Email *
        </label>
        <input
          type="email"
          id="email"
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          {...register('email')}
          style={{ borderRadius: 'var(--radius-sm)' }}
        />
        {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
      </div>

      <div className="mb-4">
        <label htmlFor="company" className="form-label fw-semibold">
          Company
        </label>
        <input
          type="text"
          id="company"
          className="form-control"
          {...register('company')}
          style={{ borderRadius: 'var(--radius-sm)' }}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="budget" className="form-label fw-semibold">
          Budget Range *
        </label>
        <select
          id="budget"
          className={`form-select ${errors.budget ? 'is-invalid' : ''}`}
          {...register('budget')}
          style={{ borderRadius: 'var(--radius-sm)' }}
        >
          <option value="">Select budget range</option>
          <option value="under-10k">Under $10,000</option>
          <option value="10k-25k">$10,000 - $25,000</option>
          <option value="25k-50k">$25,000 - $50,000</option>
          <option value="50k-100k">$50,000 - $100,000</option>
          <option value="over-100k">Over $100,000</option>
        </select>
        {errors.budget && <div className="invalid-feedback">{errors.budget.message}</div>}
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="form-label fw-semibold">
          Tell us about your project *
        </label>
        <textarea
          id="message"
          rows={5}
          className={`form-control ${errors.message ? 'is-invalid' : ''}`}
          placeholder="What are you trying to build? What problem does it solve?"
          {...register('message')}
          style={{ borderRadius: 'var(--radius-sm)' }}
        />
        {errors.message && <div className="invalid-feedback">{errors.message.message}</div>}
        <div className="form-text">We'll reply within 24 hours.</div>
      </div>

      <div className="mb-4">
        <div className="form-check">
          <input
            type="checkbox"
            id="consent"
            className={`form-check-input ${errors.consent ? 'is-invalid' : ''}`}
            {...register('consent')}
          />
          <label htmlFor="consent" className="form-check-label">
            I agree to be contacted about my project
          </label>
          {errors.consent && <div className="invalid-feedback">{errors.consent.message}</div>}
        </div>
      </div>

      {submitStatus === 'success' && (
        <div className="alert alert-success" role="alert">
          Thanks for reaching out! We'll be in touch within 24 hours.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="alert alert-danger" role="alert">
          Something went wrong. Please try again or email us directly at kaifkazi40@gmail.com
        </div>
      )}

      <button
        type="submit"
        className="btn btn-primary w-100"
        disabled={isSubmitting}
        style={{ borderRadius: 'var(--radius-full)' }}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
