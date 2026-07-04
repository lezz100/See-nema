'use client';

import CountdownTimer from './CountdownTimer';

export default function Hero({ featuredFilm }) {
  return (
    <section
      className="hero"
      style={featuredFilm?.poster_url ? { backgroundImage: `url('${featuredFilm.poster_url}')` } : undefined}
    >
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <p className="hero-subtitle hero-stagger" style={{ animationDelay: '0.1s' }}>See-Nema Presents</p>
        <h1 className="hero-title hero-stagger" style={{ animationDelay: '0.25s' }}>
          {featuredFilm ? featuredFilm.title.toUpperCase() : 'SEE-NEMA'}
        </h1>
        <p className="hero-logline hero-stagger" style={{ animationDelay: '0.4s' }}>
          {featuredFilm ? featuredFilm.logline : 'The next cinematic phenomenon. A countdown to the heartbeat of the cosmos.'}
        </p>

        <CountdownTimer releaseDate={featuredFilm?.release_date} />

        <div className="hero-actions hero-stagger" style={{ animationDelay: '0.7s' }}>
          <a href={featuredFilm ? `/films/${featuredFilm.slug}` : '#launches'} className="btn-primary">Explore Premiere</a>
          <a href="#launches" className="btn-secondary">View Slate</a>
        </div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          height: calc(100vh - 80px);
          min-height: 600px;
          display: flex;
          align-items: center;
          background-color: var(--bg-secondary);
          background-size: cover;
          background-position: center;
          border-bottom: 1px solid var(--border-color);
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(0deg, var(--bg-primary) 5%, rgba(5,5,8,0.7) 60%, rgba(5,5,8,0.95) 100%);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
        }

        .hero-stagger {
          opacity: 0;
          animation: fadeIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-stagger {
            opacity: 1;
            animation: none;
          }
        }

        .hero-subtitle {
          font-family: var(--font-headings);
          color: var(--color-gold);
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-size: 1rem;
          margin-bottom: 1rem;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 800;
          letter-spacing: 0.1em;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          text-shadow: 0 10px 30px rgba(0,0,0,0.8);
        }

        .hero-logline {
          font-size: clamp(1rem, 2vw, 1.25rem);
          color: var(--text-secondary);
          max-width: 600px;
          line-height: 1.6;
          margin-bottom: 3rem;
          text-shadow: 0 2px 10px rgba(0,0,0,0.5);
        }

        .hero-actions {
          display: flex;
          gap: 1.5rem;
        }

        @media (max-width: 480px) {
          .hero-actions {
            flex-direction: column;
            gap: 1rem;
          }
          .hero-actions :global(.btn-primary),
          .hero-actions :global(.btn-secondary) {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
