// src/components/utils/filterBadges.js

export function filterBadges(badges, searchQuery) {
    if (!searchQuery || typeof searchQuery !== 'string') {
        return badges;
    }
    const query = searchQuery.toLowerCase();
    return badges.filter((badge) => {
        const labelMatch = badge.label && badge.label.toLowerCase().includes(query);
        const descriptionMatch = badge.description && badge.description.toLowerCase().includes(query);
        const intentMatch = badge.intent && badge.intent.toLowerCase().includes(query);
        const topicsMatch =
            badge.topics &&
            Array.isArray(badge.topics) &&
            badge.topics.some((topic) => topic.toLowerCase().includes(query));
        const scopeMatch = badge.iconScope && badge.iconScope.toLowerCase().includes(query);
        return labelMatch || descriptionMatch || intentMatch || topicsMatch || scopeMatch;
    });
}
