export default function Board() {
    const boardMembers = [
        { id: 1, name: 'Bryan Causey', title: 'President', contact: 'president@putteethillhoa.com', image: null },
        { id: 2, name: 'Ravi Parthasarathi', title: 'Vice President', contact: 'vp@putteethillhoa.com', image: null },
        { id: 3, name: 'James Stone', title: 'Treasurer', contact: 'treasurer@putteethillhoa.com', image: null },
        { id: 4, name: 'Eleza Bennett', title: 'Secretary', contact: 'secretary@putteethillhoa.com', image: null },
        { id: 5, name: 'Zach Coffey', title: 'Member at Large', contact: 'member@putteethillhoa.com', image: null },
    ]

    const accMembers = [
        { id: 1, name: 'Carol Aubin', title: 'ACC Member', contact: 'acc1@putteethillhoa.com', image: null },
        { id: 2, name: 'Lewis Fadale', title: 'ACC Member', contact: 'acc2@putteethillhoa.com', image: null },
        { id: 3, name: 'Sandy Abeyta', title: 'ACC Member', contact: 'acc3@putteethillhoa.com', image: null },
    ]

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

        </>
    )
}
