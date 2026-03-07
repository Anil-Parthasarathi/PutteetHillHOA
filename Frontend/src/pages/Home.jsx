import { Link } from 'react-router-dom'
import heroBg from '../assets/hero-bg.png'
import { getDocuments } from '../utils/documents'
import FractalBackground from '../components/FractalBackground'

export default function Home() {
    const allDocuments = getDocuments()

    return (
        <>
            {/* ── Hero Section ── */}
            <section className="hero" id="hero">
                <div className="hero-bg">
                    <img src={heroBg} alt="Putteet Hill community aerial view" />
                    <FractalBackground />
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
                        <Link to="/board" className="btn btn-outline">
                            Learn More
                        </Link>
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
                        <div className="about-map">
                            <iframe
                                title="Putteet Hill Location"
                                src="https://maps.google.com/maps?q=3100%20Rio%20Grande%20Cir,%20Cresson,%20TX%2076035&t=&z=14&ie=UTF8&iwloc=&output=embed"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
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
                                to: '/documents',
                            },
                            {
                                icon: '💳',
                                iconClass: 'gold',
                                title: 'Pay Dues',
                                desc: 'Conveniently pay your HOA dues and view payment history.',
                                link: 'Make Payment',
                                to: '/'
                            },
                            {
                                icon: '🔧',
                                iconClass: 'blue',
                                title: 'Submit a Request',
                                desc: 'Report maintenance issues or submit architectural requests.',
                                link: 'Submit Request',
                                to: '/'
                            },
                            {
                                icon: '📅',
                                iconClass: 'rose',
                                title: 'Events Calendar',
                                desc: 'Upcoming community events, meetings, and social gatherings.',
                                link: 'View Calendar',
                                to: '/calendar'
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
                            return item.to ? <Link to={item.to} key={i} style={{ textDecoration: 'none', color: 'inherit' }}>{Card}</Link> : Card
                        })}
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
                        <Link to="/" className="btn btn-outline" style={{
                            color: 'var(--color-primary)',
                            borderColor: 'var(--color-border)',
                        }}>
                            View All →
                        </Link>
                    </div>
                    <div className="announcements-grid">
                        {[
                            {
                                date: 'Just Now',
                                title: 'New Document Posted',
                                desc: allDocuments.length > 0 ? `A new document "${allDocuments[0].title}" has been added to the HOA Documents section under ${allDocuments[0].category}.` : 'New documents have been uploaded to the portal.',
                                tag: 'Update',
                                tagClass: 'tag-update',
                                to: `/documents`
                            },
                            {
                                date: '2 days ago',
                                title: 'Annual HOA Meeting Reminder',
                                desc: 'Our annual HOA meeting is scheduled for next Saturday at 10 AM in the community clubhouse. Please plan to attend.',
                                tag: 'Event',
                                tagClass: 'tag-event',
                                to: '/'
                            },
                            {
                                date: '1 week ago',
                                title: 'Pool Season Opening Soon!',
                                desc: 'Get ready for summer! The community pool will officially open on May 1st. Remember to pick up your new pool passes.',
                                tag: 'Community',
                                tagClass: 'tag-community',
                                to: '/'
                            },
                        ].map((item, i) => {
                            const Card = (
                                <div className="announcement-card" key={i} id={`announcement-${i}`}>
                                    <div className="announcement-date">📌 {item.date}</div>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                    <span className={`announcement-tag ${item.tagClass}`}>
                                        {item.tag}
                                    </span>
                                </div>
                            )
                            return item.to ? <Link to={item.to} key={i} style={{ textDecoration: 'none', color: 'inherit' }}>{Card}</Link> : Card
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
