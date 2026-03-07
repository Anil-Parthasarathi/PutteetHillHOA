import { getDocuments, getGroupedDocuments } from '../utils/documents'

export default function Documents() {
    const allDocuments = getDocuments()
    const groupedDocuments = getGroupedDocuments(allDocuments)
    const activeCategories = Object.keys(groupedDocuments).filter(cat => groupedDocuments[cat].length > 0)

    return (
        <>
            <section className="documents" id="documents" style={{ paddingTop: '140px' }}>
                <div className="container">
                    <span className="section-label">Resources</span>
                    <h2 className="section-title">HOA Documents</h2>
                    <p className="documents-subtitle">Access important community documents below. Click any document to view or download.</p>
                    <div className="documents-container">
                        {activeCategories.map(category => (
                            <div key={category} className="document-category-group">
                                <h3 className="document-category-header">{category}</h3>
                                <div className="documents-grid">
                                    {groupedDocuments[category].map((doc, i) => (
                                        <a
                                            href={doc.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="document-card"
                                            key={i}
                                            id={`document-${doc.category}-${i}`}
                                        >
                                            <div className="document-icon">
                                                {doc.file.endsWith('.pdf') ? '📄' : doc.file.endsWith('.docx') || doc.file.endsWith('.doc') ? '📝' : '📁'}
                                            </div>
                                            <div className="document-info">
                                                <h3>{doc.title}</h3>
                                                <span className={`document-category cat-${doc.category.toLowerCase()}`}>{doc.category}</span>
                                            </div>
                                            <span className="document-action">View →</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
