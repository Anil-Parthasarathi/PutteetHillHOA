// Static document registry — add new entries here when a file is added to public/documents/
// URL format: /documents/<filename>  (Vite serves public/ files at the root path)
const DOCUMENT_LIST = [
    { file: 'Access Control Registration Form.pdf', date: 'June 15, 2026' },
    { file: 'Additional United Cooperative Services converted.pdf', title: 'Additional United Cooperative Services', date: 'June 15, 2026' },
    { file: 'Architectural-Control-Committee-Application-7.20.2026.pdf', title: 'Architectural Control Committee Application (July 2026)', date: 'July 20, 2026' },
    { file: 'Building-Permit-Application.pdf', date: 'June 15, 2026' },
    { file: 'Bylaws.pdf', date: 'February 10, 2026' },
    { file: 'CCR-RECORDED-02-10-2026.pdf', date: 'February 10, 2026' },
    { file: 'City of Cresson Trash Information.pdf', date: 'June 15, 2026' },
    { file: 'Declaration-of-Covenants-Conditions-Restrictions.pdf', date: 'February 10, 2026' },
    { file: 'Driveway-Culvert-Plan.pdf', date: 'June 15, 2026' },
    { file: 'Example Lot Benching Architectural Control Committee Application- Appendix A-17Jul26-Example.pdf', title: 'Example: Lot Benching ACC Application \u2013 Appendix A (July 2026)', date: 'July 17, 2026' },
    { file: 'Lot 2081 20Resale.pdf', date: 'June 15, 2026' },
    { file: 'Lot 2081 20Resale_Certificate.pdf', date: 'June 15, 2026' },
    { file: 'PH-HOA-Meeting-Minutes-2026-02-27.pdf', date: 'February 27, 2026' },
    { file: 'PH-HOA-Minutes-2024-11-14.pdf', date: 'November 14, 2024' },
    { file: 'PUTTEET HILL HOA New Resident Form converted.docx', title: 'New Resident Form', date: 'June 15, 2026' },
    { file: 'Product-Pamphlet.pdf', date: 'June 15, 2026' },
    { file: 'Putteet-Hill-Addition-Plat.pdf', date: 'June 15, 2026' },
    { file: 'Recorded-Fourth-Amend-PH-Rules-Regs.pdf', date: 'June 15, 2026' },
    { file: 'Resident Registration Form.pdf', date: 'June 15, 2026' },
    { file: 'Rules-Regulations.pdf', date: 'February 10, 2026' },
    { file: 'Second-Amendment-to-PH-CCRs-2025.pdf', date: 'June 15, 2025' },
    { file: 'Warranty-Deed-POA-RECORDED-02-10-2026.pdf', date: 'February 10, 2026' },
    { file: 'Welcome-Home.pdf', title: 'United Cooperative Services (Electric & High speed Internet)', date: 'June 15, 2026' },
];

export function getDocuments() {
    const allDocuments = DOCUMENT_LIST.map(entry => {
        const { file, date } = entry;

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

        return { file, title, category, url, date };
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
