import { type FormEvent, useState } from 'react'
import { links } from '../data/links'

type InquiryFields = {
  name: string
  email: string
  date: string
  guests: string
  message: string
}

const empty: InquiryFields = {
  name: '',
  email: '',
  date: '',
  guests: '',
  message: '',
}

export function InquiryForm({
  subject,
  to = 'events@mojolatin.com',
}: {
  subject: string
  to?: string
}) {
  const [fields, setFields] = useState<InquiryFields>(empty)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const body = [
      `Name: ${fields.name}`,
      `Email: ${fields.email}`,
      `Date: ${fields.date}`,
      `Guests: ${fields.guests}`,
      '',
      fields.message,
    ].join('\n')
    const href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = href
  }

  const field =
    'w-full border-2 border-current bg-transparent px-4 py-3 font-body text-base'

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-xl">
      <div>
        <label className="mojo-label block mb-2" htmlFor="inq-name">
          Name
        </label>
        <input
          id="inq-name"
          required
          className={field}
          value={fields.name}
          onChange={(e) => setFields((f) => ({ ...f, name: e.target.value }))}
        />
      </div>
      <div>
        <label className="mojo-label block mb-2" htmlFor="inq-email">
          Email
        </label>
        <input
          id="inq-email"
          type="email"
          required
          className={field}
          value={fields.email}
          onChange={(e) => setFields((f) => ({ ...f, email: e.target.value }))}
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="mojo-label block mb-2" htmlFor="inq-date">
            Date
          </label>
          <input
            id="inq-date"
            type="date"
            className={field}
            value={fields.date}
            onChange={(e) => setFields((f) => ({ ...f, date: e.target.value }))}
          />
        </div>
        <div>
          <label className="mojo-label block mb-2" htmlFor="inq-guests">
            Guests
          </label>
          <input
            id="inq-guests"
            className={field}
            value={fields.guests}
            onChange={(e) =>
              setFields((f) => ({ ...f, guests: e.target.value }))
            }
          />
        </div>
      </div>
      <div>
        <label className="mojo-label block mb-2" htmlFor="inq-msg">
          Message
        </label>
        <textarea
          id="inq-msg"
          required
          rows={4}
          className={field}
          value={fields.message}
          onChange={(e) =>
            setFields((f) => ({ ...f, message: e.target.value }))
          }
        />
      </div>
      <button type="submit" className="mojo-btn mojo-btn-primary">
        Send Inquiry
      </button>
      <p className="font-body text-sm text-muted">
        Opens your email app. Submitting does not guarantee a booking — or{' '}
        <a href={links.phoneFoHi} className="underline">
          call us
        </a>
        .
      </p>
    </form>
  )
}
