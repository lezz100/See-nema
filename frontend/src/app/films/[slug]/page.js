import Link from 'next/link';
import { getFilm } from '../../../lib/api';
import Reveal from '../../../components/Reveal';
import VipInviteForm from '../../../components/VipInviteForm';

// Film data is fetched from the Laravel API on every request, never frozen at build time
export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
  const { slug } = await params;

  try {
    const film = await getFilm(slug);
    return {
      title: `${film.title} | See-Nema`,
      description: film.logline,
      openGraph: {
        title: film.title,
        description: film.logline,
        images: film.poster_url ? [{ url: film.poster_url }] : [],
      },
    };
  } catch {
    return {
      title: 'Film Not Found | See-Nema',
    };
  }
}

export default async function FilmDetail({ params }) {
  const { slug } = await params;

  let film = null;
  let error = null;

  try {
    film = await getFilm(slug);
  } catch (err) {
    error = err.status === 404 ? 'This premiere could not be located in our slate.' : 'Server connection error.';
  }

  if (error || !film) {
    return (
      <div className="error-wrapper container">
        <div className="error-card glass-card">
          <h2>Slate Error</h2>
          <p>{error || 'Film data missing.'}</p>
          <Link href="/" className="btn-primary">
            Return to Launches
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="detail-content">
      {/* Dynamic Background Banner */}
      <div className="backdrop-banner">
        <div className="backdrop-overlay"></div>
        {film.poster_url && (
          <img src={film.poster_url} alt="" className="backdrop-img" />
        )}
      </div>

      <div className="container main-container">
        {/* Back Link */}
        <Link href="/#launches" className="btn-back">
          &larr; Back to Slate
        </Link>

        <div className="film-layout">
          {/* Left Column: Poster & VIP registration */}
          <div className="left-col">
            <div className="poster-card glass-card">
              {film.poster_url ? (
                <img src={film.poster_url} alt={film.title} className="detail-poster" />
              ) : (
                <div className="detail-poster-placeholder">{film.title}</div>
              )}
            </div>

            <VipInviteForm filmTitle={film.title} />
          </div>

          {/* Right Column: Information & Media */}
          <div className="right-col">
            <span className="genre-badge">{film.genre}</span>
            <h1 className="title-text">{film.title}</h1>
            <p className="logline-text">{film.logline}</p>

            <Reveal className="metadata-grid">
              <div className="meta-item">
                <span className="meta-label">Premiere Date</span>
                <span className="meta-value">
                  {new Date(film.release_date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Director</span>
                <span className="meta-value">{film.director}</span>
              </div>
              <div className="meta-item full-width">
                <span className="meta-label">Starring Cast</span>
                <span className="meta-value">{film.cast}</span>
              </div>
            </Reveal>

            <Reveal className="synopsis-section" delay={100}>
              <h3>Synopsis</h3>
              <p>{film.synopsis}</p>
            </Reveal>

            {/* Trailer embed */}
            {film.trailer_url && (
              <Reveal className="trailer-section" delay={200}>
                <h3>Teaser Premiere</h3>
                <div className="video-container glass-card">
                  <iframe
                    src={film.trailer_url}
                    title={`${film.title} Teaser`}
                    style={{ border: 0 }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
