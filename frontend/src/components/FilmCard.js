'use client';

import Reveal from './Reveal';

export default function FilmCard({ film, delay = 0 }) {
  return (
    <Reveal className="film-card glass-card" delay={delay}>
      <div className="film-poster-container">
        {film.poster_url ? (
          <img src={film.poster_url} alt={film.title} className="film-poster" />
        ) : (
          <div className="film-poster-placeholder">
            <span>{film.title}</span>
          </div>
        )}
        <div className="poster-overlay">
          <span className="film-genre">{film.genre}</span>
        </div>
      </div>
      <div className="film-info">
        <span className="film-date">
          {new Date(film.release_date).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </span>
        <h3 className="film-title">{film.title}</h3>
        <p className="film-logline">{film.logline}</p>
        <a href={`/films/${film.slug}`} className="btn-card">
          Request Invitation &amp; Details &rarr;
        </a>
      </div>

      <style jsx>{`
        .film-poster-container {
          position: relative;
          height: 380px;
          background-color: #111118;
          overflow: hidden;
        }

        .film-poster {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        :global(.film-card:hover) .film-poster {
          transform: scale(1.05);
        }

        .film-poster-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-headings);
          color: var(--color-gold);
          font-size: 1.2rem;
          text-transform: uppercase;
          text-align: center;
          padding: 2rem;
        }

        .poster-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 1.5rem;
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
          z-index: 2;
        }

        .film-genre {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          background-color: rgba(212, 175, 55, 0.2);
          color: var(--color-gold-light);
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          border: 1px solid rgba(212, 175, 55, 0.4);
        }

        .film-info {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .film-date {
          font-size: 0.8rem;
          color: var(--color-gold);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.5rem;
        }

        .film-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .film-logline {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 2rem;
          flex: 1;
        }

        .btn-card {
          font-family: var(--font-headings);
          font-size: 0.8rem;
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 0.05em;
          color: var(--color-gold);
          transition: var(--transition-fast);
        }

        .btn-card:hover {
          color: var(--text-primary);
          padding-left: 5px;
        }
      `}</style>
    </Reveal>
  );
}
