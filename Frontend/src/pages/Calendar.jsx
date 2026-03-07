export default function Calendar() {
    return (
        <section className="calendar-page" style={{ paddingTop: '140px', paddingBottom: '80px', minHeight: '100vh', background: 'var(--color-bg-alt)' }}>
            <div className="container">
                <span className="section-label">Events & Meetings</span>
                <h2 className="section-title">Community Calendar</h2>
                <p className="documents-subtitle">Stay up to date with upcoming HOA meetings, community events, and social gatherings.</p>

                <div className="calendar-container" style={{
                    marginTop: '2rem',
                    height: '600px',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-md)',
                    border: '1px solid var(--color-border)',
                    background: 'var(--color-card-bg)'
                }}>
                    <iframe
                        src="https://calendar.google.com/calendar/embed?src=en.usa%23holiday%40group.v.calendar.google.com&ctz=America%2FChicago"
                        style={{ border: 0 }}
                        width="100%"
                        height="100%"
                        title="Putteet Hill HOA Calendar"
                        frameBorder="0"
                        scrolling="no"
                    ></iframe>
                </div>
            </div>
        </section>
    )
}
