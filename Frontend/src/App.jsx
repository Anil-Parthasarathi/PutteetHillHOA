import { useState, useEffect } from 'react'
import heroBg from './assets/hero-bg.png'
import logoImg from '../public/Putteet-Hill-LOGO_white.webp'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    // Fetch Weather Data
    fetch('http://localhost:3000/api/weather')
      .then((res) => res.json())
      .then((data) => setWeather(data))
      .catch((err) => console.error('Error fetching weather:', err));
      
    // Handle Scroll
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  // Automatically import all PDFs in the public/documents folder
  const documentFiles = import.meta.glob('/public/documents/*.pdf', { query: '?url', import: 'default', eager: true });
  
  // Convert the Vite glob object into our needed array format
  const hoaDocuments = Object.keys(documentFiles).map(path => {
    // Extract filename (e.g., "Bylaws.pdf")
    const file = path.split('/').pop();
    
    // Generate a readable title by removing the extension and replacing dashes with spaces
    let title = file.replace('.pdf', '').replace(/-/g, ' ');
    // Custom mapping for specific files per user request
    if (file === 'Welcome-Home.pdf') {
      title = 'United Cooperative Services (Electric & High speed Internet)';
    }
    
    // Basic category assignment logic based on keywords in the filename
    let category = 'General';
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('bylaws') || lowerTitle.includes('ccr') || lowerTitle.includes('rules') || lowerTitle.includes('covenants')) category = 'Governance';
    else if (lowerTitle.includes('deed') || lowerTitle.includes('plat')) category = 'Legal';
    else if (lowerTitle.includes('application') || lowerTitle.includes('plan')) category = 'Applications';
    else if (lowerTitle.includes('minutes')) category = 'Minutes';

    return { file, title, category };
  });

  // Sort documents alphabetically by title, or keep Governance at the top
  hoaDocuments.sort((a, b) => {
    const categoryOrder = { 'Governance': 1, 'Legal': 2, 'Applications': 3, 'Minutes': 4, 'General': 5 };
    if (categoryOrder[a.category] !== categoryOrder[b.category]) {
      return categoryOrder[a.category] - categoryOrder[b.category];
    }
    return a.title.localeCompare(b.title);
  });

  return (
    <div className="app">
      {/* ── Navigation ── */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="container">
          <div className="nav-brand-group">
            <a href="#" className="nav-brand">
              <img src={logoImg} alt="Putteet Hill HOA" className="nav-logo-img" />
            </a>
            {weather && (
              <div className="nav-weather">
                <span className="weather-temp">{weather.temperature}°{weather.temperatureUnit}</span>
                <img src={weather.icon} alt={weather.shortForecast} className="weather-icon" />
              </div>
            )}
          </div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#announcements">News</a>
            <a href="#contact">Contact</a>
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
              <h3>97</h3>
              <p>Homes</p>
            </div>
            <div className="hero-stat">
              <h3>{new Date().getFullYear() - 2023}+</h3>
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
                href: '#documents',
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
            ].map((item, i) => {
              const Card = (
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
              )
              return item.href ? <a href={item.href} key={i} style={{ textDecoration: 'none', color: 'inherit' }}>{Card}</a> : Card
            })}
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

      {/* ── Documents Section ── */}
      <section className="documents" id="documents">
        <div className="container">
          <span className="section-label">Resources</span>
          <h2 className="section-title">HOA Documents</h2>
          <p className="documents-subtitle">Access important community documents below. Click any document to view or download.</p>
          <div className="documents-grid">
            {hoaDocuments.map((doc, i) => (
              <a
                href={`/documents/${doc.file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="document-card"
                key={i}
                id={`document-${i}`}
              >
                <div className="document-icon">📄</div>
                <div className="document-info">
                  <h3>{doc.title}</h3>
                  <span className={`document-category cat-${doc.category.toLowerCase()}`}>{doc.category}</span>
                </div>
                <span className="document-action">View →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Current Builders ── */}
      <section className="builders" id="builders">
        <div className="container">
          <span className="section-label">Build With Us</span>
          <h2 className="section-title">Current Putteet Hill Builders</h2>
          <p className="builders-subtitle">Or bring your own!</p>
          <div className="builders-grid">
            {[
              { name: 'Ann Whitecotton Homes', url: 'https://www.annwhitecottonhomes.com/' },
              { name: 'Couto Homes', url: 'https://coutohomes.com/' },
              { name: 'Will Steed Homes', url: 'https://willsteedhomes.com/' },
              { name: 'Fortress Homes TX', url: 'https://fortresshomestx.com/' },
              { name: 'Calvillo Custom Homes', url: 'https://www.calvillocustomhomes.com/' },
              { name: 'Hopper Custom Homes', url: 'https://hoppercustomhomes.com/' },
              { name: 'John Askew Homes', url: 'https://www.johnaskewhomes.com/' },
              { name: 'Blake Freeman Construction', url: 'https://blakefreemanconstruction.com/' },
            ].map((builder, i) => (
              <a
                href={builder.url}
                target="_blank"
                rel="noopener noreferrer"
                className="builder-card"
                key={i}
                id={`builder-${i}`}
              >
                <div className="builder-icon">🏗️</div>
                <div className="builder-info">
                  <h3>{builder.name}</h3>
                  <span className="builder-link">Visit Site →</span>
                </div>
              </a>
            ))}
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
                date: 'Just Now',
                title: 'New Document Posted',
                desc: `A new document "${hoaDocuments[0].title}" has been added to the HOA Documents section under ${hoaDocuments[0].category}.`,
                tag: 'Update',
                tagClass: 'tag-update',
                link: `#documents`
              },
              {
                date: '2 days ago',
                title: 'Annual HOA Meeting Reminder',
                desc: 'Our annual HOA meeting is scheduled for next Saturday at 10 AM in the community clubhouse. Please plan to attend.',
                tag: 'Event',
                tagClass: 'tag-event',
                link: '#'
              },
              {
                date: '1 week ago',
                title: 'Pool Season Opening Soon!',
                desc: 'Get ready for summer! The community pool will officially open on May 1st. Remember to pick up your new pool passes.',
                tag: 'Community',
                tagClass: 'tag-community',
                link: '#'
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
                <img src={logoImg} alt="Putteet Hill HOA" className="nav-logo-img" />
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
              <a href="#documents">HOA Documents</a>
              <a href="#">FAQs</a>
            </div>
            <div className="footer-col">
              <h4>Resources</h4>
              <a href="#">Pay Dues</a>
              <a href="#">Submit Request</a>
              <a href="#">Calendar</a>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <a href="#">board@puteethillhoa.com</a>
              <a href="#">(555) 123-4567</a>
              <a href="#">Office Hours: M–F, 9–5</a>
              <p className="footer-address">
                Putteet Hill Homeowners Association, Inc.<br />
                3100 Rio Grande Cir<br />
                Cresson, TX 76035
              </p>
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
