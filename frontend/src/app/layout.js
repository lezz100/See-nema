import './globals.css';
import SiteHeader from '../components/SiteHeader';

export const metadata = {
  title: 'See-Nema | Premieres & Theatrical Launch Campaigns',
  description: 'Architects of cinema openings. Orchestrators of red-carpet premieres, teaser drops, and global film launches.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SiteHeader />

        {children}

        <footer className="site-footer">
          <div className="container footer-container">
            <div className="footer-brand">
              <a href="/" className="logo-footer">
                SEE-<span className="gold-text">NEMA</span>
              </a>
              <p className="footer-tagline">Architects of anticipation. Orchestrators of cinema openings.</p>
            </div>
            <div className="footer-links">
              <h4>Headquarters</h4>
              <p>12th Floor, Prism Tower</p>
              <p>3rd Ngong Avenue, Nairobi, Kenya</p>
              <p>launches@seenema.com</p>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container footer-bottom-container">
              <p>&copy; {new Date().getFullYear()} See-Nema Launch Co. All rights reserved.</p>
              <p className="credits">Designed for the Screen.</p>
            </div>
          </div>
        </footer>

        {/* Global styles for header and footer layout */}
        <style>{`
          .site-header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 100;
            background: rgba(5, 5, 8, 0.75);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-bottom: 1px solid var(--border-color);
            transition: var(--transition-smooth);
          }
          
          .header-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 80px;
          }
          
          .logo {
            font-family: var(--font-headings);
            font-size: 1.5rem;
            font-weight: 800;
            letter-spacing: 0.15em;
            color: var(--text-primary);
            text-shadow: 0 0 10px rgba(0,0,0,0.5);
          }
          
          .site-nav {
            display: flex;
            align-items: center;
            gap: 2.5rem;
          }
          
          .nav-link {
            font-family: var(--font-headings);
            font-size: 0.85rem;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            font-weight: 500;
            color: var(--text-secondary);
            position: relative;
            padding: 0.5rem 0;
          }
          
          .nav-link::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 1px;
            background-color: var(--color-gold);
            transition: var(--transition-smooth);
          }
          
          .nav-link:hover {
            color: var(--text-primary);
          }
          
          .nav-link:hover::after {
            width: 100%;
          }
          
          .btn-contact-nav {
            border: 1px solid var(--color-gold);
            padding: 0.5rem 1.2rem;
            border-radius: 4px;
            color: var(--color-gold);
            font-size: 0.8rem;
          }
          
          .btn-contact-nav:hover {
            background-color: var(--color-gold-glow);
            color: var(--text-primary);
            border-color: var(--color-gold-light);
          }
          
          .site-footer {
            background-color: var(--bg-secondary);
            border-top: 1px solid var(--border-color);
            padding: 5rem 0 0 0;
            margin-top: 5rem;
          }
          
          .footer-container {
            display: flex;
            justify-content: space-between;
            gap: 4rem;
            flex-wrap: wrap;
            padding-bottom: 4rem;
          }
          
          .footer-brand {
            max-width: 400px;
          }
          
          .logo-footer {
            font-family: var(--font-headings);
            font-size: 1.6rem;
            font-weight: 800;
            letter-spacing: 0.15em;
            color: var(--text-primary);
            display: block;
            margin-bottom: 1rem;
          }
          
          .footer-tagline {
            color: var(--text-secondary);
            font-size: 0.95rem;
            line-height: 1.6;
          }
          
          .footer-links h4 {
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            margin-bottom: 1.2rem;
            color: var(--color-gold);
          }
          
          .footer-links p {
            color: var(--text-secondary);
            font-size: 0.9rem;
            line-height: 1.8;
          }
          
          .footer-bottom {
            border-top: 1px solid var(--border-color);
            padding: 2rem 0;
            background-color: #08080c;
          }
          
          .footer-bottom-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.8rem;
            color: var(--text-muted);
          }
          
          .credits {
            font-family: var(--font-headings);
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }

          @media (max-width: 768px) {
            .site-nav {
              display: none; /* replaced by SiteHeader's mobile nav-toggle panel below this breakpoint */
            }
            .footer-container {
              flex-direction: column;
              gap: 2rem;
            }
            .footer-bottom-container {
              flex-direction: column;
              gap: 1rem;
              text-align: center;
            }
          }
        `}</style>
      </body>
    </html>
  );
}
