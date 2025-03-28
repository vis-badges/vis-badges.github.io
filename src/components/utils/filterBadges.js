export function filterBadges(badges, searchQuery, selectedBadge) {
    let filtered = badges;
    if (searchQuery) {
        const lowerQuery = searchQuery.toLowerCase();
        filtered = filtered.filter(b =>
            b.label.toLowerCase().includes(lowerQuery) ||
            (b.description && b.description.toLowerCase().includes(lowerQuery))
        );
    }
    if (selectedBadge) {
        filtered = filtered.filter(b => b.label === selectedBadge);
    }
    return filtered;
}
