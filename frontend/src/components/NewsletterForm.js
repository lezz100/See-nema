'use client';

import { useState } from 'react';
import { submitContact } from '../lib/api';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ submitting: false, success: false, message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, message: '' });

    try {
      const data = await submitContact({ email, type: 'newsletter' });
      setStatus({ submitting: false, success: true, message: data.message });
      setEmail('');
    } catch (err) {
      setStatus({
        submitting: false,
        success: false,
        message: err.errors?.email?.[0] || 'Invalid email address.',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="newsletter-form">
      <h4>Subscribe to Launch Updates</h4>
      <div className="newsletter-input-group">
        <input
          type="email"
          placeholder="Enter email for premiere alerts"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" disabled={status.submitting} className="btn-primary">
          {status.submitting ? 'Sending...' : 'Join'}
        </button>
      </div>
      {status.message && (
        <p className={status.success ? 'success-message' : 'error-message'}>{status.message}</p>
      )}

      <style jsx>{`
        .newsletter-form {
          border-top: 1px solid var(--border-color);
          padding-top: 3rem;
        }

        .newsletter-form h4 {
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
          font-size: 0.95rem;
          color: var(--color-gold);
        }

        .newsletter-input-group {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .newsletter-input-group input {
          flex: 1;
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 0.8rem 1rem;
          color: var(--text-primary);
          transition: var(--transition-fast);
        }

        .newsletter-input-group input:focus {
          outline: none;
          border-color: var(--color-gold);
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
      `}</style>
    </form>
  );
}
