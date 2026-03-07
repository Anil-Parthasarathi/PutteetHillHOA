export default function Other() {
    return (
        <>
            {/* ── Current Builders ── */}
            <section className="builders" id="builders" style={{ paddingTop: '140px' }}>
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
        </>
    )
}
