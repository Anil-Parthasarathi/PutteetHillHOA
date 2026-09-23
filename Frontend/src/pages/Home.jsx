import { useState } from 'react'
import { Link } from 'react-router-dom'
import heroBg from '../assets/hero-bg.png'
import { getDocuments } from '../utils/documents'
import AnnouncementPanel from '../components/AnnouncementPanel'

export default function Home() {
    const allDocuments = getDocuments()
    const [selectedAnnouncement, setSelectedAnnouncement] = useState(null)

    const DISCORD_MEETINGS_INVITE = 'https://discord.gg/47Yfprur55'

    const staticAnnouncements = [
        {
            date: 'September 23, 2026',
            title: 'Special Board Meeting – Wednesday, October 7th at 6:00 PM',
            desc: 'The Board will hold a Special Board Meeting on Oct 7 at United Cooperative Services, Granbury. Agenda: Fee & Fine schedule, Code of Conduct, Financials, 2027 Dues, Spectrum, Lot 58, and more.',
            tag: 'Event',
            tagClass: 'tag-event',
            to: '/announcements/board-meeting-oct7',
            fullContent: (
                <div style={{ lineHeight: '1.85', fontSize: '0.97rem', color: 'var(--color-text)' }}>
                    <p style={{ marginBottom: '1rem' }}>
                        Putteet Hill Homeowners,
                    </p>
                    <p style={{ marginBottom: '1rem' }}>
                        The Putteet Hill HOA Board of Directors will hold a <strong>Special Board Meeting on Wednesday, October 7, 2026, at 6:00 PM</strong> at:
                    </p>
                    <div style={{
                        background: 'rgba(26, 86, 50, 0.05)',
                        borderLeft: '4px solid var(--color-primary)',
                        padding: '0.85rem 1.25rem',
                        borderRadius: 'var(--radius-sm)',
                        marginBottom: '1.25rem'
                    }}>
                        <strong>United Cooperative Services</strong><br />
                        Granbury, Texas
                    </div>
                    <p style={{ marginBottom: '1.25rem' }}>
                        The purpose of this meeting is to address several important Association matters and provide updates regarding ongoing community issues.
                    </p>

                    <h3 style={{ color: 'var(--color-primary-dark)', margin: '1.5rem 0 0.5rem' }}>Meeting Attendance</h3>
                    <p style={{ marginBottom: '0.75rem' }}>
                        This is a meeting of the Putteet Hill HOA Board of Directors. The open portion of the meeting is intended for <strong>Putteet Hill homeowners/property owners</strong>.
                    </p>
                    <p style={{ marginBottom: '0.75rem' }}>
                        Residents who are not property owners, general contractors, subcontractors, vendors, service providers, and other guests may attend <strong>by invitation of the Board</strong> when their attendance is relevant to Association business.
                    </p>
                    <p style={{ marginBottom: '1.25rem' }}>
                        The Board may enter executive session when permitted by the Association's governing documents and applicable law.
                    </p>

                    <h3 style={{ color: 'var(--color-primary-dark)', margin: '1.5rem 0 0.5rem' }}>Documents Before the Meeting</h3>
                    <p style={{ marginBottom: '0.5rem' }}>
                        Prior to the meeting, the Board will send an additional email containing relevant documents and attachments for homeowners to review in advance. These are expected to include:
                    </p>
                    <ul style={{ margin: '0.5rem 0 1rem 1.5rem' }}>
                        <li>Current Association financial information</li>
                        <li>Spectrum's proposal regarding access/service within Putteet Hill</li>
                        <li>Proposed Fee and Fine Schedule</li>
                        <li>Proposed Board and ACC Code of Conduct</li>
                        <li>Gran Country (John Hall) information regarding third-party ACC review services, if available</li>
                        <li>Other documents or proposals relevant to the noticed agenda</li>
                    </ul>
                    <p style={{ marginBottom: '1.25rem' }}>
                        Our goal is to give homeowners an opportunity to review the information before the meeting rather than seeing it for the first time during Board discussion.
                    </p>

                    <h3 style={{ color: 'var(--color-primary-dark)', margin: '1.5rem 0 0.5rem' }}>Opportunity to Submit Agenda Items</h3>
                    <p style={{ marginBottom: '0.75rem' }}>
                        Please also consider this email an opportunity to submit matters that you believe should be considered for inclusion on the October 7 agenda.
                    </p>
                    <p style={{ marginBottom: '0.75rem' }}>
                        If there is an Association matter you would like the Board to consider, please respond to this email with the requested topic and any relevant information. The Board will review submissions and determine whether an item should be included on the final agenda or addressed at a future meeting.
                    </p>
                    <p style={{ marginBottom: '1.25rem', fontStyle: 'italic', color: 'var(--color-text-light)' }}>
                        Submitting a requested item does not automatically place it on the agenda.
                    </p>

                    <hr style={{ margin: '1.75rem 0', borderColor: 'var(--color-border)' }} />

                    <h3 style={{ color: 'var(--color-primary-dark)', marginBottom: '1rem', fontSize: '1.2rem' }}>Preliminary Agenda</h3>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        <div>
                            <strong>1. Call to Order and Establishment of Quorum</strong>
                            <p style={{ margin: '0.25rem 0 0' }}>Call the meeting to order and confirm a quorum of the three-member Board.</p>
                        </div>

                        <div>
                            <strong>2. Adoption of Association Fee and Fine Schedule</strong>
                            <p style={{ margin: '0.25rem 0 0.5rem' }}>Discussion and possible action regarding adoption of a uniform Association fee and fine schedule.</p>
                            <p style={{ margin: '0 0 0.5rem' }}>The proposed schedule includes a construction-hours provision establishing permitted construction hours of <strong>7:00 AM–5:00 PM, Monday through Saturday</strong>, unless an alternate schedule has been approved in advance by the ACC.</p>
                            <p style={{ margin: '0' }}>Following applicable warning, notice, cure, hearing, or other procedures required by the governing documents and applicable law, subsequent violations of approved construction hours may result in a proposed <strong>$200 fine per occurrence</strong>.</p>
                        </div>

                        <div>
                            <strong>3. Adoption of Board and ACC Code of Conduct</strong>
                            <p style={{ margin: '0.25rem 0 0.5rem' }}>Discussion and possible action regarding adoption of standards applicable to members of the Board of Directors and Architectural Control Committee.</p>
                            <p style={{ margin: '0 0 0.5rem' }}>The proposed Code addresses professionalism, respectful treatment of homeowners and residents, confidentiality and privacy, conflicts of interest, public and social-media communications, consistent enforcement, and appropriate representation of Association decisions.</p>
                            <p style={{ margin: '0' }}>Board and ACC members should be part of the solution and should not contribute unnecessarily to conflict within the community. Individual homeowner compliance matters should be handled through the Association's established processes and should not be publicly discussed by Directors or ACC members on Facebook, social media, or other public platforms.</p>
                        </div>

                        <div>
                            <strong>4. Association Financial Status</strong>
                            <p style={{ margin: '0.25rem 0 0' }}>Review and discussion of the Association's current financial position, including account balances, current and anticipated expenses, outstanding obligations, projected year-end financial position, and anticipated 2027 operating needs.</p>
                        </div>

                        <div>
                            <strong>5. 2027 Annual Assessment – $1,300</strong>
                            <p style={{ margin: '0.25rem 0 0' }}>Discussion and possible action regarding establishment of the annual Association assessment at <strong>$1,300 per lot</strong> for the upcoming assessment year, subject to the governing documents and applicable law.</p>
                        </div>

                        <div>
                            <strong>6. Third-Party ACC Review Services – Gran Country (John Hall)</strong>
                            <p style={{ margin: '0.25rem 0 0.5rem' }}>Discussion and possible action regarding engagement of <strong>Gran Country (John Hall)</strong> to provide professional third-party architectural plan review and ACC support.</p>
                            <p style={{ margin: '0' }}>The Board will also consider corresponding adjustments to ACC application and review fees, including a proposal to double applicable ACC fees to help offset the cost of professional third-party review.</p>
                        </div>

                        <div>
                            <strong>7. Association Bank Account – Authorized Signatories</strong>
                            <p style={{ margin: '0.25rem 0 0' }}>Discussion and possible action to remove Teena as an authorized signer/account representative and designate a 2nd Board Member as an authorized signer/account representative, together with authorization of any related banking documentation.</p>
                        </div>

                        <div>
                            <strong>8. Spectrum Access and Service Proposal</strong>
                            <p style={{ margin: '0.25rem 0 0.5rem' }}>Discussion and possible action regarding <strong>Spectrum's proposal to provide service/access within Putteet Hill</strong>, including any Association approval that may be necessary concerning access, easements, infrastructure, installation, boring, construction, rights-of-way, or other matters associated with bringing Spectrum service into the community.</p>
                            <p style={{ margin: '0' }}>Spectrum's proposal will be distributed to homeowners for review prior to the meeting.</p>
                        </div>

                        <div>
                            <strong>9. Bookkeeping, Accounting, and Property Transfer Administration</strong>
                            <p style={{ margin: '0.25rem 0 0.5rem' }}>Discussion regarding the Association's ongoing bookkeeping, accounting, and property-transfer administrative needs.</p>
                            <p style={{ margin: '0' }}>The Board is interested in identifying a qualified resident CPA who may be willing to assist with Association bookkeeping and lot/home transfers, which occur regularly. If an appropriate resident volunteer is not available, the Board will consider contracting with <strong>James Stone</strong> to continue providing some or all of these services following his move from the community.</p>
                        </div>

                        <div>
                            <strong>10. Lata Development – Remaining Dirtwork and Lot 58</strong>
                            <p style={{ margin: '0.25rem 0 0.5rem' }}>Community update regarding Lata Development's notice that dirtwork on the remaining Putteet Hill lots is expected to resume, excluding Lot 58, commonly referred to as the "cliff lot." The Board will also discuss information concerning Lot 58, potential purchase interest, and the future of the two hill/rock-wall formations.</p>
                            <p style={{ margin: '0 0 0.5rem' }}>Lata Development is offering Lot 58 to the HOA or any resident for $650k. This is a multi-faceted approach from them. By leveling the hill it provides a stable homesite and gives them raw materials to backfill other lots that are sloped in a manner that prevents building a home. This is the reason for the price. They would have to afford several hundred thousand dollars of dirt to make other lots work.</p>
                            <p style={{ margin: '0' }}>The rock formations are not natural formations. These are a product of the 1950s rock quarry. The other large rock wall was recently purchased by a completely different owner. It too will become level in order to build a home.</p>
                        </div>

                        <div>
                            <strong>11. Board of Directors Recruitment</strong>
                            <p style={{ margin: '0.25rem 0 0.5rem' }}>The Association is seeking an additional homeowner/property owner interested in serving on the Board of Directors.</p>
                            <p style={{ margin: '0 0 0.25rem' }}>A prospective Director should be willing to:</p>
                            <ul style={{ margin: '0.25rem 0 0.5rem 1.5rem' }}>
                                <li>Review and comply with the Board Code of Conduct</li>
                                <li>Become familiar with the Association's governing documents</li>
                                <li>Computer literacy is highly recommended</li>
                                <li>Exercise sound judgment and professionalism</li>
                                <li>Respond to Association matters in a timely manner</li>
                                <li>Work constructively with fellow Directors, ACC members, and homeowners</li>
                                <li>Represent the interests of the Association membership</li>
                            </ul>
                            <p style={{ margin: '0' }}>Any appointment will be made by the current Board in accordance with the Association's governing documents and applicable law.</p>
                        </div>

                        <div>
                            <strong>12. Emergency Access Gate and Easement</strong>
                            <p style={{ margin: '0.25rem 0 0.5rem' }}>Community information and discussion concerning the HOA-owned emergency access gate and associated approximately 60-foot-wide easement.</p>
                            <p style={{ margin: '0 0 0.5rem' }}>The gate is intended to provide emergency access/egress when necessary and otherwise is to remain secured by chain and lock.</p>
                            <p style={{ margin: '0' }}>The Board is reviewing the applicable easement documents to ensure that any formal communication regarding access restrictions accurately reflects the recorded property rights and Association authority.</p>
                        </div>

                        <div>
                            <strong>13. Homeowner/Property Owner Comments</strong>
                            <p style={{ margin: '0.25rem 0 0' }}>Opportunity for homeowners/property owners to address the Board, subject to reasonable meeting procedures and time limitations established by the presiding officer.</p>
                        </div>

                        <div>
                            <strong>14. Executive Session, if Necessary</strong>
                            <p style={{ margin: '0.25rem 0 0' }}>The Board may enter executive session to discuss matters permitted to be considered privately under applicable law.</p>
                        </div>

                        <div>
                            <strong>15. Reconvene and Take Any Required Open-Session Action</strong>
                            <p style={{ margin: '0.25rem 0 0' }}>The Board will reconvene in open session and take or summarize any action required to occur in open session.</p>
                        </div>

                        <div>
                            <strong>16. Adjournment</strong>
                            <p style={{ margin: '0.25rem 0 0.5rem' }}>The Board appreciates everyone's patience as Putteet Hill continues through a significant period of construction and development. With numerous homes still to be built, there will inevitably be issues that require cooperation among homeowners, builders, contractors, the ACC, and the Board.</p>
                            <p style={{ margin: '0 0 0.5rem' }}>Our objective is to establish clear expectations, improve consistency, communicate openly with homeowners, and address Association business in a professional and constructive manner.</p>
                            <p style={{ margin: '0' }}>We look forward to seeing everyone on October 7.</p>
                        </div>
                    </div>

                    <div style={{ marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid var(--color-border)', fontWeight: 600, color: 'var(--color-primary-dark)' }}>
                        Putteet Hill HOA Board of Directors
                    </div>
                </div>
            )
        },
        {
            date: 'July 9, 2026',
            title: 'Special Board Meeting – July 23rd at 6:00 PM on Discord',
            desc: 'Special Board Meeting will be held via "Discord" on July 23rd @ 6pm. Details on agenda to follow.',
            tag: 'Event',
            tagClass: 'tag-event',
            fullContent: (
                <div style={{ lineHeight: '1.85', fontSize: '0.97rem', color: 'var(--color-text)' }}>
                    <p style={{ marginBottom: '1rem' }}>
                        Special Board Meeting will be held via <strong>"Discord"</strong>.
                    </p>
                    <p style={{ marginBottom: '1rem' }}>
                        <strong>Date:</strong> July 23rd @ 6pm on Discord.
                    </p>
                    <p>Details on agenda to follow.</p>
                </div>
            )
        },
        {
            date: 'May 14, 2026',
            title: 'Special Board Meeting – May 14 at 6:00 PM',
            desc: 'Board vote on legal counsel for the Management Certificate; homeowners welcome to observe (~10 min). Join via Discord.',
            tag: 'Event',
            tagClass: 'tag-event',
            fullContent: (
                <div style={{ lineHeight: '1.85', fontSize: '0.97rem', color: 'var(--color-text)' }}>
                    <p>
                        The HOA Board of Directors will hold a Special Board Meeting on Thursday, May 14 at 6:00 PM on Discord.
                    </p>

                    <h3 style={{ color: 'var(--color-primary-dark)', margin: '1.25rem 0 0.5rem' }}>Purpose of Meeting</h3>
                    <p>
                        The purpose of this meeting is for the Board to vote on whether to approve retaining legal counsel to assist the HOA with filing the Management Certificate and other related HOA matters.
                    </p>
                    <p>
                        This meeting is expected to last approximately 10 minutes. Homeowners are welcome to attend and observe.
                    </p>
                    <p>
                        {`Please note that this meeting is limited to the agenda item listed above, and there will not be a homeowner Q&A portion.`}
                    </p>

                    <div style={{ marginTop: '1.75rem' }}>
                        <a
                            href={DISCORD_MEETINGS_INVITE}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="nav-discord-btn"
                            style={{ display: 'inline-flex' }}
                            aria-label="Join us on Discord for the meeting (opens in a new tab)"
                        >
                            Join us on Discord
                        </a>
                        <p style={{ marginTop: '0.75rem', fontSize: '0.9rem', color: 'var(--color-text-light)' }}>
                            Use the link above to join the meeting on our community Discord server.
                        </p>
                    </div>
                </div>
            ),
        },
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
    ]

    const documentAnnouncements = allDocuments
        .filter(doc => doc.date)
        .map(doc => ({
            date: doc.date,
            title: `New Document Posted: ${doc.title}`,
            desc: `A new document "${doc.title}" has been added to the HOA Documents section under ${doc.category}.`,
            tag: 'Update',
            tagClass: 'tag-update',
            to: '/documents'
        }))

    const parseAnnouncementDate = (dateStr) => {
        if (!dateStr) return 0;
        return Date.parse(dateStr) || 0;
    }

    const latestMeetings = [...staticAnnouncements]
        .sort((a, b) => parseAnnouncementDate(b.date) - parseAnnouncementDate(a.date))
        .slice(0, 2)

    const latestDocs = [...documentAnnouncements]
        .sort((a, b) => parseAnnouncementDate(b.date) - parseAnnouncementDate(a.date))
        .slice(0, 2)

    const announcements = [...latestMeetings, ...latestDocs]
        .sort((a, b) => parseAnnouncementDate(b.date) - parseAnnouncementDate(a.date))

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
