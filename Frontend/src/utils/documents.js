export function getDocuments() {
    // Automatically import all files in the public/documents folder
    const documentFiles = import.meta.glob('/public/documents/*.*', { query: '?url', import: 'default', eager: true });

    // Convert the Vite glob object into a flat array first
    const allDocuments = Object.keys(documentFiles).map(path => {
        // Extract filename (e.g., "Bylaws.pdf" or "Form.docx")
        const file = path.split('/').pop();

        // Generate a readable title by removing the extension and replacing dashes with spaces
        const extensionIndex = file.lastIndexOf('.');
        let title = extensionIndex !== -1 ? file.substring(0, extensionIndex) : file;
        title = title.replace(/-/g, ' ');

        // Custom mapping for specific files per user request
        if (file === 'Welcome-Home.pdf') {
            title = 'United Cooperative Services (Electric & High speed Internet)';
        }

        // Basic category assignment logic based on keywords in the filename
        let category = 'General';
        const lowerTitle = title.toLowerCase();
        if (lowerTitle.includes('bylaws') || lowerTitle.includes('ccr') || lowerTitle.includes('rules') || lowerTitle.includes('covenants') || lowerTitle.includes('amend')) category = 'Governance';
        else if (lowerTitle.includes('deed') || lowerTitle.includes('plat') || lowerTitle.includes('certificate') || lowerTitle.includes('resale')) category = 'Legal';
        else if (lowerTitle.includes('application') || lowerTitle.includes('plan') || lowerTitle.includes('form') || lowerTitle.includes('registration')) category = 'Applications';
        else if (lowerTitle.includes('minute')) category = 'Minutes';

        return { file, title, category };
    });

    // Sort flat array alphabetically by title
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
