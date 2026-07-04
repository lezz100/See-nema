'use client';

import Reveal from './Reveal';

const SERVICES = [
  {
    title: 'Red-Carpet Premieres',
    description: 'From historic Hollywood venues to private festival galas, we curate opening nights that capture the press, the stars, and the fans.',
  },
  {
    title: 'Teaser Campaigns',
    description: 'We build award-winning promotional cycles, including interactive puzzles, custom artwork, and viral teaser drops.',
  },
  {
    title: 'Press & Influencer Galas',
    description: 'Direct outreach campaigns, screening management, and press junkets designed to build positive early buzz and critical acclaim.',
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="services-section container">
      <Reveal className="section-header">
        <h2>Our Services</h2>
        <div className="header-line"></div>
      </Reveal>
      <div className="services-grid">
        {SERVICES.map((service, index) => (
          <Reveal key={service.title} className="service-card glass-card" delay={index * 100}>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </Reveal>
        ))}
      </div>

      <style jsx>{`
        .services-section {
          padding: 7rem 2rem;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        :global(.service-card) {
          padding: 3rem 2rem;
          text-align: center;
        }

        :global(.service-card) h4 {
          font-size: 1.2rem;
          color: var(--color-gold);
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        :global(.service-card) p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.7;
        }
      `}</style>
    </section>
  );
}
