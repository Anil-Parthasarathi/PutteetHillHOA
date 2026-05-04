import { useState } from 'react'
import { Link } from 'react-router-dom'
import heroBg from '../assets/hero-bg.png'
import { getDocuments } from '../utils/documents'
import AnnouncementPanel from '../components/AnnouncementPanel'

export default function Home() {
    const allDocuments = getDocuments()
    const [selectedAnnouncement, setSelectedAnnouncement] = useState(null)

    const announcements = [
        {
            date: 'May 6, 2026',
            title: 'HOA Board Meeting – May 6th at 6:00 PM',
            desc: 'Agenda: ACC Appointments, Lawn Company transition, Board Role Assignments, and Annual Budget review. Click to read the full agenda.',
            tag: 'Event',
            tagClass: 'tag-event',
            fullContent: (
                <div style={{ lineHeight: '1.85', fontSize: '0.97rem', color: 'var(--color-text)' }}>
                    <h3 style={{ color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>First Board Meeting Items:</h3>
                    <p>Our first meeting will consist of appointing <strong>(Not in attendance)</strong></p>
                    <ul style={{ margin: '0.5rem 0 0.5rem 1.5rem' }}>
                        <li>Carol Aubin</li>
                        <li>Lewis Fadale</li>
                        <li>Sandy Abeyta</li>
                    </ul>
                    <p>to the ACC.</p>

                    <hr style={{ margin: '1.5rem 0', borderColor: 'var(--color-border)' }} />

                    <h3 style={{ color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>Lawn Company:</h3>
                    <p>
                        If agreed upon we will provide our current Lawn Company a letter of separation of services.
                        Their contract requires a 30 day notice. Simultaneously we will ensure the new contractor
                        will be able to pick up right where we leave off with the current contractor.
                        I will bring all this paperwork to the meeting for review.
                    </p>

                    <hr style={{ margin: '1.5rem 0', borderColor: 'var(--color-border)' }} />

                    <h3 style={{ color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>Defining Our Roles:</h3>
                    <p>
                        Based on our candidate applications ChatGPT said the following: But if you would like a
                        different position than what ChatGPT says we can vote on it in the meeting.
                    </p>
                    <div style={{
                        background: 'rgba(26, 86, 50, 0.04)',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-sm)',
                        padding: '1.5rem',
                        marginTop: '1rem',
                    }}>
                        <p style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '1rem' }}>🏆 Final Recommended Roles (Adjusted)</p>

                        <p><strong>🧑‍⚖️ President — Bryan Causey</strong></p>
                        <ul style={{ margin: '0.25rem 0 0.25rem 1.5rem' }}>
                            <li>Organized this transition</li>
                            <li>Led communication</li>
                            <li>Are clearly comfortable taking charge</li>
                        </ul>
                        <p style={{ color: 'var(--color-primary)', fontWeight: 600, marginBottom: '1rem' }}>👉 Stay in control and set the tone for the HOA</p>

                        <p><strong>🤝 Vice President — Ravi Parthasarathi</strong></p>
                        <ul style={{ margin: '0.25rem 0 0.25rem 1.5rem' }}>
                            <li>Strong operational + technical thinker</li>
                            <li>Already engaged in systems (website, future improvements)</li>
                        </ul>
                        <p style={{ color: 'var(--color-primary)', fontWeight: 600, marginBottom: '1rem' }}>👉 He becomes your execution partner</p>

                        <p><strong>💰 Treasurer — James Stone</strong></p>
                        <ul style={{ margin: '0.25rem 0 0.25rem 1.5rem' }}>
                            <li>CPA</li>
                            <li>Already handling finances</li>
                        </ul>
                        <p style={{ color: 'var(--color-primary)', fontWeight: 600, marginBottom: '1rem' }}>👉 This is the backbone of your board—leave him here</p>

                        <p><strong>📝 Secretary — Eleza Bennett</strong></p>
                        <ul style={{ margin: '0.25rem 0 0.25rem 1.5rem' }}>
                            <li>Executive leadership background</li>
                            <li>Likely strong communicator + organized</li>
                        </ul>
                        <p style={{ color: 'var(--color-primary)', fontWeight: 600, marginBottom: '1rem' }}>👉 Keeps records clean and communication professional</p>

                        <p><strong>🧩 Member at Large — Zach Coffey</strong></p>
                        <ul style={{ margin: '0.25rem 0 0.25rem 1.5rem' }}>
                            <li>People-oriented</li>
                            <li>Flexible</li>
                            <li>Good for homeowner engagement</li>
                        </ul>
                    </div>

                    <hr style={{ margin: '1.5rem 0', borderColor: 'var(--color-border)' }} />

                    <h3 style={{ color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>Annual Budget:</h3>
                    <p style={{ color: 'var(--color-text-light)', fontStyle: 'italic' }}>Details to be discussed at the meeting.</p>
                </div>
            )
        },
        {
            date: 'Just Now',
            title: 'New Document Posted',
            desc: allDocuments.length > 0
                ? `A new document "${allDocuments[0].title}" has been added to the HOA Documents section under ${allDocuments[0].category}.`
                : 'New documents have been uploaded to the portal.',
            tag: 'Update',
            tagClass: 'tag-update',
            to: '/documents'
        },
        {
            date: '2 days ago',
            title: 'Annual HOA Meeting Reminder',
            desc: 'Our annual HOA meeting is scheduled for next Saturday at 10 AM in the community clubhouse. Please plan to attend.',
            tag: 'Event',
            tagClass: 'tag-event',
        },
    ]

    return (
        <>
            {/* ── Announcement Panel ── */}
            <AnnouncementPanel
                announcement={selectedAnnouncement}
                onClose={() => setSelectedAnnouncement(null)}
            />

            {/* ── Hero Section ── */}
            <section className="hero" id="hero">
                <div className="hero-bg">
                    <img src={heroBg} alt="Putteet Hill community aerial view" />
                    <div className="hero-overlay" />
                </div>
                <div className="container hero-content">
                    <h1>
                        Life at <span>Putteet Hill</span>
                    </h1>
                    <p className="hero-description">
                        A vibrant neighborhood built on community, connection, and care.
                        Stay informed, get involved, and make the most of everything
                        Putteet Hill has to offer.
                    </p>
                    <div className="hero-actions">
                        <button
                            className="btn btn-primary"
                            onClick={() => document.getElementById('announcements')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Latest News →
                        </button>
                        <Link to="/board" className="btn btn-outline">
                            Learn More
                        </Link>
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
                            { icon: '📋', iconClass: 'green', title: 'HOA Documents', desc: 'Bylaws, CC&Rs, meeting minutes, and community guidelines.', link: 'View Documents', to: '/documents' },
                            { icon: '📅', iconClass: 'rose', title: 'Events Calendar', desc: 'Upcoming community events, meetings, and social gatherings.', link: 'View Calendar', to: '/calendar' },
                            { icon: '💳', iconClass: 'gray', title: 'Pay Dues (Coming Soon)', desc: 'Conveniently pay your HOA dues and view payment history.', link: 'Unavailable', to: null, disabled: true },
                            { icon: '🔧', iconClass: 'gray', title: 'Submit a Request (Coming Soon)', desc: 'Report maintenance issues or submit architectural requests.', link: 'Unavailable', to: null, disabled: true },
                        ].map((item, i) => {
                            const Card = (
                                <div className="quick-link-card" id={`quick-link-${i}`} style={{ height: '100%', ...(item.disabled ? { opacity: 0.55, cursor: 'not-allowed', filter: 'grayscale(1)' } : {}) }}>
                                    <div className={`quick-link-icon ${item.disabled ? '' : item.iconClass}`}>{item.icon}</div>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                    <span className="quick-link-arrow" style={{ marginTop: 'auto', ...(item.disabled ? { color: 'var(--color-text-light)' } : {}) }}>
                                        {item.link} {!item.disabled && '→'}
                                    </span>
                                </div>
                            )
                            const wrapperStyle = { textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }
                            return item.to && !item.disabled ? (
                                <Link to={item.to} key={i} style={wrapperStyle}>{Card}</Link>
                            ) : (
                                <div key={i} style={wrapperStyle}>{Card}</div>
                            )
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
                        <Link to="/" className="btn btn-outline" style={{ color: 'var(--color-primary)', borderColor: 'var(--color-border)' }}>
                            View All →
                        </Link>
                    </div>
                    <div className="announcements-grid">
                        {announcements.map((item, i) => {
                            const isLink = !!item.to;
                            const CardContent = (
                                <div
                                    className="announcement-card"
                                    onClick={isLink ? undefined : () => setSelectedAnnouncement(item)}
                                >
                                    <div className="announcement-date">📌 {item.date}</div>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                    <div className="announcement-card-footer">
                                        <span className={`announcement-tag ${item.tagClass}`}>{item.tag}</span>
                                        <span className="announcement-read-more">{isLink ? 'View Document' : 'Read more'} →</span>
                                    </div>
                                </div>
                            );

                            return isLink ? (
                                <Link to={item.to} key={i} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                                    {CardContent}
                                </Link>
                            ) : (
                                <div key={i} style={{ cursor: 'pointer', display: 'block' }}>
                                    {CardContent}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
