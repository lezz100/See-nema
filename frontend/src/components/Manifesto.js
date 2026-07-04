'use client';

import Reveal from './Reveal';

export default function Manifesto() {
  return (
    <section id="manifesto" className="manifesto-section">
      <div className="container manifesto-container">
        <Reveal className="manifesto-text">
          <p className="manifesto-tag">Who We Are</p>
          <h2>Architects of the Red Carpet</h2>
          <p className="manifesto-paragraph">
            At See-Nema, we believe a film&rsquo;s opening night is a sacred event.
            We don&apos;t just launch movies; we orchestrate historic moments. From elite, star-studded
            premieres to award-winning teaser campaigns, we blend high art with military-grade logistics
            to ensure your story lands with the impact it deserves.
          </p>
          <p className="manifesto-paragraph">
            We collaborate with studios, indie houses, and creators to engineer anticipation,
            turning openings into cultural touchstones.
          </p>
        </Reveal>
        <Reveal className="manifesto-visual glass-card" delay={150}>
          <h3>Manifesto</h3>
          <blockquote>
            &quot;A film is made in the edit, but a legend is born on opening night.&quot;
          </blockquote>
        </Reveal>
      </div>

      <style jsx>{`
        .manifesto-section {
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
          padding: 8rem 0;
        }

        .manifesto-container {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 5rem;
          align-items: center;
        }

        :global(.manifesto-tag) {
          font-family: var(--font-headings);
          color: var(--color-gold);
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        :global(.manifesto-text) h2 {
          font-size: 2.5rem;
          margin-bottom: 2rem;
        }

        :global(.manifesto-paragraph) {
          color: var(--text-secondary);
          font-size: 1.05rem;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        :global(.manifesto-visual) {
          padding: 3rem;
          text-align: center;
          border-color: rgba(212, 175, 55, 0.15);
        }

        :global(.manifesto-visual) h3 {
          font-size: 1.1rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--color-gold);
          margin-bottom: 2rem;
        }

        :global(.manifesto-visual) blockquote {
          font-family: var(--font-headings);
          font-size: 1.5rem;
          font-style: italic;
          line-height: 1.6;
          color: var(--text-primary);
        }

        @media (max-width: 992px) {
          .manifesto-container {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
      `}</style>
    </section>
  );
}
