'use client';

import { useState } from 'react';
import { submitContact } from '../lib/api';

const INITIAL_FORM = { name: '', email: '', message: '', type: 'contact' };

export default function ContactForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState({ submitting: false, success: false, message: '', errors: {} });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, message: '', errors: {} });

    try {
      const data = await submitContact(form);
      setStatus({ submitting: false, success: true, message: data.message, errors: {} });
      setForm(INITIAL_FORM);
    } catch (err) {
      if (err.status === 422) {
        setStatus({
          submitting: false,
          success: false,
          message: 'Please resolve the validation errors below.',
          errors: err.errors || {},
        });
      } else {
        setStatus({
          submitting: false,
          success: false,
          message: 'Could not submit form. Please ensure the API backend is running.',
          errors: {},
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={status.errors.name ? 'input-error' : ''}
        />
        {status.errors.name && <span className="field-error">{status.errors.name[0]}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={status.errors.email ? 'input-error' : ''}
        />
        {status.errors.email && <span className="field-error">{status.errors.email[0]}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="message">Project Description</label>
        <textarea
          id="message"
          rows="4"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tell us about your upcoming film, festival timeline, or promotional needs..."
          className={status.errors.message ? 'input-error' : ''}
        ></textarea>
        {status.errors.message && <span className="field-error">{status.errors.message[0]}</span>}
      </div>

      <button type="submit" className="btn-primary submit-btn" disabled={status.submitting}>
        {status.submitting ? 'Persisting Submission...' : 'Submit Inquiry'}
      </button>

      {status.success && <p className="success-message mt-4">{status.message}</p>}
      {status.message && !status.success && <p className="error-message mt-4">{status.message}</p>}

      <style jsx>{`
        .form-group {
          display: flex;
          flex-direction: column;
          margin-bottom: 1.5rem;
        }

        .form-group label {
          font-family: var(--font-headings);
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
        }

        .form-group input,
        .form-group textarea {
          background-color: rgba(5,5,8,0.6);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 0.8rem 1rem;
          color: var(--text-primary);
          transition: var(--transition-fast);
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--color-gold);
        }

        .input-error {
          border-color: #f87171 !important;
        }

        .field-error {
          font-size: 0.75rem;
          color: #f87171;
          margin-top: 0.25rem;
        }

        .submit-btn {
          width: 100%;
          margin-top: 1rem;
        }

        .success-message {
          color: var(--color-gold-light);
          font-weight: 500;
          font-size: 0.9rem;
          margin-top: 0.5rem;
        }

        .error-message {
          color: #f87171;
          font-weight: 500;
          font-size: 0.9rem;
          margin-top: 0.5rem;
        }

        .mt-4 {
          margin-top: 1rem;
        }
      `}</style>
    </form>
  );
}
