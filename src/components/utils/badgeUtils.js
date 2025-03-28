export const mapIntentToColor = (intent) => {
    if (!intent) return 'default';
    const normalized = intent.toUpperCase();
    switch (normalized) {
        case 'CONFIRMATION':
            return 'success';
        case 'WARNING':
            return 'warning';
        case 'INFORMATION':
            return 'info';
        default:
            return 'default';
    }
};

export const mapTypeToColor = (type) => {
    if (!type) return 'default';
    const normalized = type.toUpperCase();
    switch (normalized) {
        case 'DATA':
            return 'primary';
        case 'ANALYSIS':
            return 'secondary';
        case 'CONTEXT':
            return 'info';
        case 'INTERACTION':
            return 'warning';
        case 'VISUAL ENCODING':
            return 'default';
        default:
            return 'default';
    }
};

export const computeChipColor = (badge, colorMode, muiColor) => {
    switch (colorMode) {
        case 'standard':
            return muiColor;
        case 'intent':
            return mapIntentToColor(badge.intent);
        case 'type':
            return mapTypeToColor(badge.type);
        default:
            return 'default';
    }
};
