export default function Board() {
    const boardMembers = [
        { id: 1, name: "Name 1", title: "President", contact: "president@putteethillhoa.com", image: null },
        { id: 2, name: "Name 2", title: "Vice President", contact: "vp@putteethillhoa.com", image: null },
        { id: 3, name: "Name 3", title: "Secretary", contact: "secretary@putteethillhoa.com", image: null },
        { id: 4, name: "Name 4", title: "Treasurer", contact: "treasurer@putteethillhoa.com", image: null },
        { id: 5, name: "Name 5", title: "Member at Large", contact: "member5@putteethillhoa.com", image: null }
    ];

    const accMembers = [
        { id: 1, name: "ACC Name 1", title: "ACC Chair", contact: "acc1@putteethillhoa.com", image: null },
        { id: 2, name: "ACC Name 2", title: "ACC Member", contact: "acc2@putteethillhoa.com", image: null },
        { id: 3, name: "ACC Name 3", title: "ACC Member", contact: "acc3@putteethillhoa.com", image: null },
        { id: 4, name: "ACC Name 4", title: "ACC Member", contact: "acc4@putteethillhoa.com", image: null },
        { id: 5, name: "ACC Name 5", title: "ACC Member", contact: "acc5@putteethillhoa.com", image: null }
    ];

    return (
        <>
            {/* ── Board Members Section ── */}
            <section className="board" id="board" style={{ paddingTop: '140px' }}>
                <div className="container">
                    <span className="section-label">Leadership</span>
                    <h2 className="section-title">Board Members</h2>
                    <p className="board-subtitle">Meet the team dedicated to serving our community.</p>
                    <div className="board-grid">
                        {boardMembers.map((member) => (
                            <div className="board-card" key={member.id}>
                                <div className="board-img-container">
                                    {member.image ? (
                                        <img src={member.image} alt={member.name} className="board-img" />
                                    ) : (
                                        <div className="board-img-placeholder">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                                <div className="board-info">
                                    <h3>{member.name}</h3>
                                    <span className="board-title">{member.title}</span>
                                    <a href={`mailto:${member.contact}`} className="board-contact">
                                        ✉️ {member.contact}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ACC Committee Members Section ── */}
            <section className="board" id="acc-committee" style={{ paddingTop: '0' }}>
                <div className="container">
                    <span className="section-label">Committees</span>
                    <h2 className="section-title">ACC Committee Members</h2>
                    <p className="board-subtitle">Guiding the architectural standards of our community.</p>
                    <div className="board-grid">
                        {accMembers.map((member) => (
                            <div className="board-card" key={member.id}>
                                <div className="board-img-container">
                                    {member.image ? (
                                        <img src={member.image} alt={member.name} className="board-img" />
                                    ) : (
                                        <div className="board-img-placeholder">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                                <div className="board-info">
                                    <h3>{member.name}</h3>
                                    <span className="board-title">{member.title}</span>
                                    <a href={`mailto:${member.contact}`} className="board-contact">
                                        ✉️ {member.contact}
                                    </a>
                                </div>
                            </div>
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
        </>
    )
}
