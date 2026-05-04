import { Link } from 'react-router-dom'

export default function BoardMeetingMay6() {
    return (
        <section style={{ paddingTop: '140px', paddingBottom: '80px', minHeight: '100vh', background: 'var(--color-bg-alt)' }}>
            <div className="container" style={{ maxWidth: '780px' }}>
                <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '2rem' }}>
                    ← Back to Home
                </Link>

                <span className="section-label">Event</span>
                <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>HOA Board Meeting – May 6th at 6:00 PM</h2>
                <div className="announcement-date" style={{ marginBottom: '2rem' }}>📌 May 6, 2026</div>

                <div style={{
                    background: 'var(--color-card-bg)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border)',
                    boxShadow: 'var(--shadow-md)',
                    padding: '2.5rem',
                    lineHeight: '1.85',
                    color: 'var(--color-text)',
                    fontSize: '0.97rem'
                }}>
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
                        marginTop: '1rem'
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
            </div>
        </section>
    )
}
