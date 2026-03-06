import { useState, useEffect } from 'react'
import heroBg from './assets/hero-bg.png'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      {/* ── Navigation ── */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="container">
          <a href="#" className="nav-brand">
            <img src="/Putteet-Hill-LOGO_white.webp" alt="Putteet Hill HOA" className="nav-logo-img" />
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#announcements">News</a>
            <a href="#contact">Contact</a>
            <a href="#" className="nav-cta">Resident Portal</a>
          </div>
        </div>
      </nav>

      {/* ── Hero Section ── */}
      <section className="hero" id="hero">
        <div className="hero-bg">
          <img src={heroBg} alt="Putteet Hill community aerial view" />
          <div className="hero-overlay" />
        </div>
        <div className="container hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Welcome to Our Community
          </div>
          <h1>
            Life at <span>Putteet Hill</span>
          </h1>
          <p className="hero-description">
            A vibrant neighborhood built on community, connection, and care.
            Stay informed, get involved, and make the most of everything
            Putteet Hill has to offer.
          </p>
          <div className="hero-actions">
            <a href="#announcements" className="btn btn-primary">
              Latest News →
            </a>
            <a href="#about" className="btn btn-outline">
              Learn More
            </a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <h3>250+</h3>
              <p>Homes</p>
            </div>
            <div className="hero-stat">
              <h3>15+</h3>
              <p>Years Est.</p>
            </div>
            <div className="hero-stat">
              <h3>12</h3>
              <p>Annual Events</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Links ── */}
      <section className="quick-links" id="quick-links">
        <div className="container">
          <div className="quick-links-grid">
            {[
              {
                icon: '📋',
                iconClass: 'green',
                title: 'HOA Documents',
                desc: 'Bylaws, CC&Rs, meeting minutes, and community guidelines.',
                link: 'View Documents',
              },
              {
                icon: '💳',
                iconClass: 'gold',
                title: 'Pay Dues',
                desc: 'Conveniently pay your HOA dues and view payment history.',
                link: 'Make Payment',
              },
              {
                icon: '🔧',
                iconClass: 'blue',
                title: 'Submit a Request',
                desc: 'Report maintenance issues or submit architectural requests.',
                link: 'Submit Request',
              },
              {
                icon: '📅',
                iconClass: 'rose',
                title: 'Events Calendar',
                desc: 'Upcoming community events, meetings, and social gatherings.',
                link: 'View Calendar',
              },
            ].map((item, i) => (
              <div className="quick-link-card" key={i} id={`quick-link-${i}`}>
                <div className={`quick-link-icon ${item.iconClass}`}>
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <span className="quick-link-arrow">
                  {item.link} →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Section ── */}
      <section className="about" id="about">
        <div className="container">
          <span className="section-label">Our Community</span>
          <h2 className="section-title">Welcome to Putteet Hill</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                Putteet Hill is more than just a neighborhood — it's a thriving
                community where families grow, friendships flourish, and
                neighbors look out for one another. Nestled in a beautiful
                setting, our community offers the perfect blend of suburban
                tranquility and modern convenience.
              </p>
              <p>
                Our HOA is committed to maintaining the beauty, safety, and
                value of our neighborhood through transparent governance,
                well-maintained common areas, and engaging community events.
              </p>
              <div className="about-features">
                {[
                  'Well-maintained common areas & landscaping',
                  'Active community events throughout the year',
                  'Transparent HOA governance & communication',
                  'Dedicated architectural review process',
                ].map((f, i) => (
                  <div className="about-feature" key={i}>
                    <div className="about-feature-check">✓</div>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-visual">
              {[
                { icon: '🏡', title: 'Beautiful Homes', desc: 'Well-kept properties' },
                { icon: '🌳', title: 'Green Spaces', desc: 'Parks & trails' },
                { icon: '🤝', title: 'Strong Community', desc: 'Engaged neighbors' },
                { icon: '🛡️', title: 'Safe & Secure', desc: 'Peaceful living' },
              ].map((card, i) => (
                <div className="about-card" key={i}>
                  <div className="about-card-icon">{card.icon}</div>
                  <h4>{card.title}</h4>
                  <p>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Announcements ── */}
      <section className="announcements" id="announcements">
        <div className="container">
          <div className="announcements-header">
            <div>
              <span className="section-label">Stay Informed</span>
              <h2 className="section-title">Latest Announcements</h2>
            </div>
            <a href="#" className="btn btn-outline" style={{
              color: 'var(--color-primary)',
              borderColor: 'var(--color-border)',
            }}>
              View All →
            </a>
          </div>
          <div className="announcements-grid">
            {[
              {
                date: 'Mar 15, 2026',
                title: 'Spring Community Cleanup Day',
                desc: 'Join your neighbors for our annual spring cleanup! Meet at the community pavilion at 9 AM. Supplies and refreshments provided.',
                tag: 'Event',
                tagClass: 'tag-event',
              },
              {
                date: 'Mar 10, 2026',
                title: 'Board Meeting Minutes Available',
                desc: 'Minutes from the March board meeting are now available for review in the resident portal. Key topics include landscaping updates and budget review.',
                tag: 'Update',
                tagClass: 'tag-update',
              },
              {
                date: 'Mar 1, 2026',
                title: 'Pool Season Preparation Notice',
                desc: 'The community pool will undergo maintenance starting March 20th. Expected opening for the season is May 1st. Pool key renewals are now open.',
                tag: 'Notice',
                tagClass: 'tag-notice',
              },
            ].map((item, i) => (
              <div className="announcement-card" key={i} id={`announcement-${i}`}>
                <div className="announcement-date">📌 {item.date}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <span className={`announcement-tag ${item.tagClass}`}>
                  {item.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer" id="contact">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="nav-brand">
                <img src="/Putteet-Hill-LOGO_white.webp" alt="Putteet Hill HOA" className="nav-logo-img" />
              </div>
              <p>
                Building a better community together. Your Putteet Hill
                Homeowners Association, serving residents with transparency
                and dedication.
              </p>
            </div>
            <div className="footer-col">
              <h4>Quick Links</h4>
              <a href="#about">About Us</a>
              <a href="#announcements">News</a>
              <a href="#">Documents</a>
              <a href="#">FAQs</a>
            </div>
            <div className="footer-col">
              <h4>Resources</h4>
              <a href="#">Resident Portal</a>
              <a href="#">Pay Dues</a>
              <a href="#">Submit Request</a>
              <a href="#">Calendar</a>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <a href="#">board@puteethillhoa.com</a>
              <a href="#">(555) 123-4567</a>
              <a href="#">Office Hours: M–F, 9–5</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Putteet Hill HOA. All rights reserved.</span>
            <span>Privacy Policy · Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
