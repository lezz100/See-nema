import { getFilms } from '../lib/api';
import Reveal from '../components/Reveal';
import Hero from '../components/Hero';
import FilmCard from '../components/FilmCard';
import Manifesto from '../components/Manifesto';
import ServicesGrid from '../components/ServicesGrid';
import NewsletterForm from '../components/NewsletterForm';
import ContactForm from '../components/ContactForm';
import ErrorFallback from '../components/ErrorFallback';

// Films are fetched from the Laravel API on every request, never frozen at build time
export const dynamic = 'force-dynamic';

export default async function Home() {
  let films = [];
  let error = null;

  try {
    films = await getFilms();
  } catch (err) {
    console.error(err);
    error = 'Connection to server could not be established.';
  }

  // The soonest-releasing film headlines the hero (films are pre-sorted by release_date by the API)
  const featuredFilm = films[0] || null;

  return (
    <main className="main-content">
      <Hero featuredFilm={featuredFilm} />

      {/* UPCOMING LAUNCHES SECTION */}
      <section id="launches" className="launches-section container">
        <Reveal className="section-header">
          <h2>Upcoming Launches</h2>
          <div className="header-line"></div>
          <p>Our upcoming slate of world premieres and high-profile launches.</p>
        </Reveal>

        {error ? (
          <ErrorFallback
            message={error}
            tip="Please run `php artisan serve` in the api/ directory to load dynamic backend content."
          />
        ) : (
          <div className="films-grid">
            {films.map((film, index) => (
              <FilmCard key={film.id} film={film} delay={index * 80} />
            ))}
          </div>
        )}
      </section>

      <Manifesto />
      <ServicesGrid />

      {/* STAY IN THE LOOP & CONTACT SECTION */}
      <section id="contact" className="contact-section">
        <div className="container contact-container">
          <Reveal className="contact-info-block">
            <h2>Stay in the Loop</h2>
            <p>Subscribe to our exclusive premiere invitations list or contact our booking house directly for launch consultations.</p>
            <NewsletterForm />
          </Reveal>

          <Reveal className="contact-form-block glass-card" delay={150}>
            <h3>Consult with our Launch Directors</h3>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
