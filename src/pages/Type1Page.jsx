import React, { useState } from 'react';
import { Box, Grid2, Typography } from '@mui/material';

import BinaryBadge from "../components/BinaryBadge";
import OrdinalBadge from "../components/OrdinalBadge";
import QuantitativeBadge from "../components/QuantitativeBadge";
import CategoricalBadge from "../components/CategoricalBadge";
import BadgeDesignControls from "../components/BadgeDesignControls";
import useBadges from "../hooks/useBadges";

export default function Type1Page() {
    const { badges, loading, error } = useBadges();

    // Default left element is "icon"
    const [leftElement, setLeftElement] = useState('icon');
    const [chipSize, setChipSize] = useState("medium");
    const [chipVariant, setChipVariant] = useState("filled");
    // Remove separate left element states and derive them below.
    const [withIcon2, setWithIcon2] = useState(false);

    const [colorMode, setColorMode] = useState("intent");
    const [muiColor, setMuiColor] = useState("default");

    const [typeFilter, setTypeFilter] = useState("All");
    const [badgeTypeFilter, setBadgeTypeFilter] = useState("All");

    if (loading) return <div>Loading badges...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!Array.isArray(badges)) {
        return (
            <div>
                Error: Expected badges data to be an array.
                <pre>{JSON.stringify(badges, null, 2)}</pre>
            </div>
        );
    }

    // Filter badges
    let filteredBadges = badges;
    if (typeFilter !== "All") {
        filteredBadges = filteredBadges.filter(b => b.type === typeFilter);
    }
    if (badgeTypeFilter !== "All") {
        filteredBadges = filteredBadges.filter(b => b.badgeType === badgeTypeFilter);
    }
    const groupedBadges = filteredBadges.reduce((groups, badge) => {
        const key = badge.intent || "Other";
        if (!groups[key]) groups[key] = [];
        groups[key].push(badge);
        return groups;
    }, {});
    const intentOrder = ["CONFIRMATION", "WARNING", "INFORMATION", "Other"];
    const sortedIntentKeys = Object.keys(groupedBadges).sort((a, b) => {
        const indexA = intentOrder.indexOf(a) === -1 ? intentOrder.length : intentOrder.indexOf(a);
        const indexB = intentOrder.indexOf(b) === -1 ? intentOrder.length : intentOrder.indexOf(b);
        return indexA - indexB;
    });

    function mapIntentToColor(intent) {
        switch (intent) {
            case 'CONFIRMATION': return 'success';
            case 'WARNING': return 'warning';
            case 'Information': return 'info';
            default: return 'default';
        }
    }
    function mapTypeToColor(type) {
        switch (type) {
            case 'DATA': return 'primary';
            case 'ANALYSIS': return 'secondary';
            case 'CONTEXT': return 'info';
            case 'INTERACTION': return 'warning';
            case 'VISUAL ENCODING': return 'default';
            default: return 'default';
        }
    }
    function computeChipColor(badge) {
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
    }

    // Derive left side booleans based on leftElement
    const derivedWithAvatar = leftElement === 'avatar';
    const derivedWithIcon1 = leftElement === 'icon';

    return (
        <Box sx={{ p: 2 }}>
            <BadgeDesignControls
                chipSize={chipSize}
                setChipSize={setChipSize}
                chipVariant={chipVariant}
                setChipVariant={setChipVariant}
                leftElement={leftElement}
                setLeftElement={setLeftElement}
                withIcon2={withIcon2}
                setWithIcon2={setWithIcon2}
                colorMode={colorMode}
                setColorMode={setColorMode}
                muiColor={muiColor}
                setMuiColor={setMuiColor}
                typeFilter={typeFilter}
                setTypeFilter={setTypeFilter}
                badgeTypeFilter={badgeTypeFilter}
                setBadgeTypeFilter={setBadgeTypeFilter}
            />

            {sortedIntentKeys.map((intent) => (
                <Box key={intent} sx={{ mb: 4 }}>
                    <Grid2 container spacing={2}>
                        {groupedBadges[intent].map((badge, idx) => {
                            const chipColor = computeChipColor(badge);
                            // Render appropriate badge component based on badgeType,
                            // passing derivedWithAvatar and derivedWithIcon1 in place of withAvatar/withIcon1.
                            if (badge.badgeType === "ORDINAL") {
                                return (
                                    <Grid2 item key={idx}>
                                        <OrdinalBadge
                                            badge={badge}
                                            size={chipSize}
                                            variant={chipVariant}
                                            withAvatar={derivedWithAvatar}
                                            withIcon1={derivedWithIcon1}
                                            withIcon2={withIcon2}
                                            chipColor={chipColor}
                                        />
                                    </Grid2>
                                );
                            } else if (badge.badgeType === "QUANTITATIVE") {
                                return (
                                    <Grid2 item key={idx}>
                                        <QuantitativeBadge
                                            badge={badge}
                                            size={chipSize}
                                            variant={chipVariant}
                                            withAvatar={derivedWithAvatar}
                                            withIcon1={derivedWithIcon1}
                                            withIcon2={withIcon2}
                                            chipColor={chipColor}
                                        />
                                    </Grid2>
                                );
                            } else if (badge.badgeType === "CATEGORICAL") {
                                return (
                                    <Grid2 item key={idx}>
                                        <CategoricalBadge
                                            badge={badge}
                                            size={chipSize}
                                            variant={chipVariant}
                                            withAvatar={derivedWithAvatar}
                                            withIcon1={derivedWithIcon1}
                                            withIcon2={withIcon2}
                                            chipColor={chipColor}
                                        />
                                    </Grid2>
                                );
                            } else {
                                return (
                                    <Grid2 item key={idx}>
                                        <BinaryBadge
                                            badge={badge}
                                            size={chipSize}
                                            variant={chipVariant}
                                            withAvatar={derivedWithAvatar}
                                            withIcon1={derivedWithIcon1}
                                            withIcon2={withIcon2}
                                            chipColor={chipColor}
                                        />
                                    </Grid2>
                                );
                            }
                        })}
                    </Grid2>
                </Box>
            ))}
        </Box>
    );
}
