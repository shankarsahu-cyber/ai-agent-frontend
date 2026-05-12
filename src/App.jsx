import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [issue, setIssue] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="support-app">
      <header className="support-hero">
        <div>
          <span className="badge">Customer Support</span>
          <h1>Fast, friendly help when your team needs it.</h1>
          <p>
            Reach out to our support team, open a ticket, or browse quick answers
            to common questions.
          </p>
        </div>
        <div className="hero-stats">
          <div>
            <strong>99%</strong>
            <span>First response rate</span>
          </div>
          <div>
            <strong>24h</strong>
            <span>Average reply time</span>
          </div>
          <div>
            <strong>Live</strong>
            <span>Chat available</span>
          </div>
        </div>
      </header>

      <main className="support-grid">
        <section className="support-panel">
          <div className="card support-card">
            <h2>Support channels</h2>
            <p>
              Use the form to create a ticket or choose a quick contact method if
              you need urgent help.
            </p>
            <ul>
              <li>
                <strong>Email</strong>
                <span>help@company.com</span>
              </li>
              <li>
                <strong>Phone</strong>
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <strong>Live chat</strong>
                <span>Open now</span>
              </li>
            </ul>
          </div>

          <div className="card faq-card">
            <h2>Popular help topics</h2>
            <ul>
              <li>Track my order</li>
              <li>Update billing details</li>
              <li>Reset account password</li>
              <li>Report a bug or issue</li>
            </ul>
          </div>
        </section>

        <aside className="form-panel">
          <div className="card ticket-card">
            <div className="ticket-header">
              <span>Open a support ticket</span>
              <strong>We typically reply within one business day.</strong>
            </div>

            {submitted ? (
              <div className="confirmation">
                <h2>Thanks for reaching out!</h2>
                <p>
                  Your request has been received. A member of our support team will
                  contact you soon at <strong>{email || 'your email'}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="support-form">
                <label>
                  Your name
                  <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Jane Doe"
                    required
                  />
                </label>

                <label>
                  Email address
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="jane@example.com"
                    required
                  />
                </label>

                <label>
                  What can we help with?
                  <textarea
                    value={issue}
                    onChange={(event) => setIssue(event.target.value)}
                    placeholder="Describe your issue or question"
                    rows="6"
                    required
                  />
                </label>

                <button type="submit">Send request</button>
              </form>
            )}
          </div>
        </aside>
      </main>
    </div>
  )
}

export default App
