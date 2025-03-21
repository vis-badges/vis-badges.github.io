import { useState } from 'react';

export function useBadgeDesignControls() {
    const [chipSize, setChipSize] = useState("medium");
    const [chipVariant, setChipVariant] = useState("filled");
    const [withIcon, setWithIcon] = useState(true);
    const [showTags, setShowTags] = useState(false);

    return {
        chipSize,
        setChipSize,
        chipVariant,
        setChipVariant,
        withIcon,
        setWithIcon,
        showTags,
        setShowTags,
    };
}
