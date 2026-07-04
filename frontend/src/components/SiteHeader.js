'use client';

import { useState } from 'react';

const NAV_LINKS = [
  { href: '/#launches', label: 'Launches' },
  { href: '/#manifesto', label: 'Manifesto' },
  { href: '/#services', label: 'Services' },
  { href: '/#contact', label: 'Keep In Touch', isCta: true },
];

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-container">
        <a href="/" className="logo" onClick={() => setIsOpen(false)}>
          SEE-<span className="gold-text">NEMA</span>
        </a>

        <nav className="site-nav">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={link.isCta ? 'nav-link btn-contact-nav' : 'nav-link'}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className={`nav-toggle ${isOpen ? 'is-open' : ''}`}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`mobile-nav-panel ${isOpen ? 'is-open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={link.isCta ? 'mobile-nav-link btn-contact-nav' : 'mobile-nav-link'}
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </div>

      <style jsx>{`
        .nav-toggle {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          width: 32px;
          height: 32px;
          background: transparent;
          border: none;
          cursor: pointer;
          z-index: 110;
        }

        .nav-toggle span {
          display: block;
          width: 100%;
          height: 2px;
          background-color: var(--color-gold);
          transition: var(--transition-fast);
        }

        .nav-toggle.is-open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }

        .nav-toggle.is-open span:nth-child(2) {
          opacity: 0;
        }

        .nav-toggle.is-open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        .mobile-nav-panel {
          display: none;
        }

        @media (max-width: 768px) {
          .nav-toggle {
            display: flex;
          }

          .mobile-nav-panel {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            max-height: 0;
            overflow: hidden;
            background: rgba(5, 5, 8, 0.97);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid var(--border-color);
            transition: max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .mobile-nav-panel.is-open {
            max-height: 320px;
          }

          .mobile-nav-link {
            font-family: var(--font-headings);
            font-size: 0.9rem;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: var(--text-secondary);
            padding: 1rem 2rem;
            border-bottom: 1px solid var(--border-color);
          }

          .mobile-nav-link:hover {
            color: var(--text-primary);
          }

          .mobile-nav-link.btn-contact-nav {
            border: 1px solid var(--color-gold);
            border-radius: 4px;
            margin: 0.75rem 2rem;
            text-align: center;
            color: var(--color-gold);
          }
        }
      `}</style>
    </header>
  );
}
