// Static document registry — add new entries here when a file is added to public/documents/
// URL format: /documents/<filename>  (Vite serves public/ files at the root path)
const DOCUMENT_LIST = [
    { file: 'Access Control Registration Form.pdf' },
    { file: 'Additional United Cooperative Services converted.pdf', title: 'Additional United Cooperative Services' },
    { file: 'Architectural-Control-Committee-Application-7.20.2026.pdf', title: 'Architectural Control Committee Application (July 2026)' },
    { file: 'Building-Permit-Application.pdf' },
    { file: 'Bylaws.pdf' },
    { file: 'CCR-RECORDED-02-10-2026.pdf' },
    { file: 'City of Cresson Trash Information.pdf' },
    { file: 'Declaration-of-Covenants-Conditions-Restrictions.pdf' },
    { file: 'Driveway-Culvert-Plan.pdf' },
    { file: 'Example Lot Benching Architectural Control Committee Application- Appendix A-17Jul26-Example.pdf', title: 'Example: Lot Benching ACC Application \u2013 Appendix A (July 2026)' },
    { file: 'Lot 2081 20Resale.pdf' },
    { file: 'Lot 2081 20Resale_Certificate.pdf' },
    { file: 'PH-HOA-Meeting-Minutes-2026-02-27.pdf' },
    { file: 'PH-HOA-Minutes-2024-11-14.pdf' },
    { file: 'PUTTEET HILL HOA New Resident Form converted.docx', title: 'New Resident Form' },
    { file: 'Product-Pamphlet.pdf' },
    { file: 'Putteet-Hill-Addition-Plat.pdf' },
    { file: 'Recorded-Fourth-Amend-PH-Rules-Regs.pdf' },
    { file: 'Resident Registration Form.pdf' },
    { file: 'Rules-Regulations.pdf' },
    { file: 'Second-Amendment-to-PH-CCRs-2025.pdf' },
    { file: 'Warranty-Deed-POA-RECORDED-02-10-2026.pdf' },
    { file: 'Welcome-Home.pdf', title: 'United Cooperative Services (Electric & High speed Internet)' },
];

export function getDocuments() {
    const allDocuments = DOCUMENT_LIST.map(entry => {
        const { file } = entry;

        // Use custom title if provided, otherwise generate from filename
        let title = entry.title;
        if (!title) {
            const extensionIndex = file.lastIndexOf('.');
            title = extensionIndex !== -1 ? file.substring(0, extensionIndex) : file;
            title = title.replace(/-/g, ' ');
        }

        // Public assets are served at the root — no /public prefix needed
        const url = `/documents/${file}`;

        // Category assignment based on keywords in the title
        let category = 'General';
        const lowerTitle = title.toLowerCase();
        if (lowerTitle.includes('bylaws') || lowerTitle.includes('ccr') || lowerTitle.includes('rules') || lowerTitle.includes('covenants') || lowerTitle.includes('amend')) {
            category = 'Governance';
        } else if (lowerTitle.includes('deed') || lowerTitle.includes('plat') || lowerTitle.includes('certificate') || lowerTitle.includes('resale')) {
            category = 'Legal';
        } else if (lowerTitle.includes('application') || lowerTitle.includes('plan') || lowerTitle.includes('form') || lowerTitle.includes('registration')) {
            category = 'Applications';
        } else if (lowerTitle.includes('minute')) {
            category = 'Minutes';
        }

        return { file, title, category, url };
    });

    // Sort alphabetically by title
    allDocuments.sort((a, b) => a.title.localeCompare(b.title));
    return allDocuments;
}

export function getGroupedDocuments(allDocuments) {
    const groupedDocuments = {
        'Governance': [],
        'Legal': [],
        'Applications': [],
        'Minutes': [],
        'General': []
    };

    allDocuments.forEach(doc => {
        if (groupedDocuments[doc.category]) {
            groupedDocuments[doc.category].push(doc);
        } else {
            groupedDocuments['General'].push(doc);
        }
    });

    return groupedDocuments;
}
