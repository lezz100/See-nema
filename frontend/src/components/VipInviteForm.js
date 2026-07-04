'use client';

import { useState } from 'react';
import { submitContact } from '../lib/api';

export default function VipInviteForm({ filmTitle }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: `Requesting exclusive premiere invitation for "${filmTitle}".`,
    type: 'contact',
  });
  const [status, setStatus] = useState({ submitting: false, success: false, message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, message: '' });

    try {
      await submitContact(form);
      setStatus({
        submitting: false,
        success: true,
        message: 'Your VIP registration has been received. Invitation details will follow.',
      });
      setForm((prev) => ({ ...prev, name: '', email: '' }));
    } catch (err) {
      setStatus({
        submitting: false,
        success: false,
        message: err.errors?.email?.[0] || err.errors?.name?.[0] || err.message || 'Backend offline. VIP registration failed.',
      });
    }
  };

  return (
    <div className="vip-registration glass-card">
      <h3>VIP Invite Request</h3>
      <p>Register to attend the exclusive red-carpet screening event.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Full Name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <button type="submit" className="btn-primary full-width" disabled={status.submitting}>
          {status.submitting ? 'Registering...' : 'Request Invitation'}
        </button>
      </form>
      {status.message && (
        <p className={`status-msg ${status.success ? 'success' : 'error'}`}>{status.message}</p>
      )}

      <style jsx>{`
        .vip-registration {
          padding: 2rem;
          border-color: rgba(212, 175, 55, 0.15);
        }

        .vip-registration h3 {
          font-size: 1.1rem;
          color: var(--color-gold);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.5rem;
        }

        .vip-registration p {
          font-size: 0.8rem;
          color: var(--text-secondary);
          line-height: 1.4;
          margin-bottom: 1.5rem;
        }

        .vip-registration .form-group {
          margin-bottom: 1rem;
        }

        .vip-registration input {
          width: 100%;
          background: rgba(5,5,8,0.7);
          border: 1px solid var(--border-color);
          padding: 0.7rem 1rem;
          border-radius: 4px;
          color: var(--text-primary);
          font-size: 0.85rem;
        }

        .vip-registration input:focus {
          outline: none;
          border-color: var(--color-gold);
        }

        .full-width {
          width: 100%;
        }

        .status-msg {
          font-size: 0.8rem;
          margin-top: 1rem;
          font-weight: 500;
        }

        .status-msg.success {
          color: var(--color-gold-light);
        }

        .status-msg.error {
          color: #f87171;
        }
      `}</style>
    </div>
  );
}
