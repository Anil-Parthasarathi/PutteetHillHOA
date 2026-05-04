import { useEffect } from 'react'

export default function AnnouncementPanel({ announcement, onClose }) {
    // Close on Escape key
    useEffect(() => {
        if (!announcement) return
        const handler = (e) => { if (e.key === 'Escape') onClose() }
        window.addEventListener('keydown', handler)
        return () => window.removeEventListener('keydown', handler)
    }, [announcement, onClose])

    // Prevent body scroll when open
    useEffect(() => {
        document.body.style.overflow = announcement ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [announcement])

    return (
        <>
            {/* Backdrop */}
            <div
                className={`announcement-panel-backdrop ${announcement ? 'open' : ''}`}
                onClick={onClose}
            />

            {/* Panel */}
            <div className={`announcement-panel ${announcement ? 'open' : ''}`} role="dialog" aria-modal="true">
                {announcement && (
                    <>
                        <div className="announcement-panel-header">
                            <div>
                                <span className={`announcement-tag ${announcement.tagClass}`} style={{ marginBottom: '0.5rem', display: 'inline-block' }}>
                                    {announcement.tag}
                                </span>
                                <h2 className="announcement-panel-title">{announcement.title}</h2>
                                <div className="announcement-date">📌 {announcement.date}</div>
                            </div>
                            <button className="announcement-panel-close" onClick={onClose} aria-label="Close panel">✕</button>
                        </div>

                        <div className="announcement-panel-body">
                            {announcement.fullContent
                                ? announcement.fullContent
                                : <p>{announcement.desc}</p>
                            }
                        </div>
                    </>
                )}
            </div>
        </>
    )
}
