import React, { useState } from 'react';
import { Box, TextField } from '@mui/material';
import Grid2 from '@mui/material/Grid';
import BadgeDesignControls from '../components/BadgeDesignControls';
import useBadges from '../hooks/useBadges';
import BadgeRenderer from "../components/BadgeRenderer";
import { computeChipColor } from "../components/utils/badgeUtils";

export default function Compact() {
    const { badges, loading, error } = useBadges();
    console.log(badges);
    const [chipSize, setChipSize] = useState("medium");
    const [chipVariant, setChipVariant] = useState("filled");
    const [leftIconKey, setLeftIconKey] = useState("iconScope");
    const [rightIconKey, setRightIconKey] = useState("none");
    const [colorMode, setColorMode] = useState("intent");
    const [muiColor, setMuiColor] = useState("default");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedBadge, setSelectedBadge] = useState(null);

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

    let filteredBadges = badges;
    if (searchQuery) {
        filteredBadges = filteredBadges.filter(b =>
            b.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (b.description && b.description.toLowerCase().includes(searchQuery.toLowerCase()))
        );
    }
    if (selectedBadge) {
        filteredBadges = filteredBadges.filter(b => b.label === selectedBadge);
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

    return (
        <Box sx={{ p: 2 }}>
            <BadgeDesignControls
                chipSize={chipSize}
                setChipSize={setChipSize}
                chipVariant={chipVariant}
                setChipVariant={setChipVariant}
                leftIconKey={leftIconKey}
                setLeftIconKey={setLeftIconKey}
                rightIconKey={rightIconKey}
                setRightIconKey={setRightIconKey}
                colorMode={colorMode}
                setColorMode={setColorMode}
                muiColor={muiColor}
                setMuiColor={setMuiColor}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                selectedBadge={selectedBadge}
                setSelectedBadge={setSelectedBadge}
            />

            <Box sx={{ mb: 1 }}>
                <TextField
                    size={"small"}
                    label="Search badges"
                    variant="outlined"
                    fullWidth={false}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </Box>

            {sortedIntentKeys.map((intent) => (
                <Box key={intent} sx={{ mb: 4 }}>
                    <Grid2 container spacing={2}>
                        {groupedBadges[intent].map((badge, idx) => {
                            const chipColor = computeChipColor(badge, colorMode, muiColor);
                            return (
                                <Grid2 item key={idx}>
                                    <BadgeRenderer
                                        badge={badge}
                                        size={chipSize}
                                        variant={chipVariant}
                                        chipColor={chipColor}
                                        renderProps={{
                                            leftIconKey,
                                            rightIconKey,
                                        }}
                                    />
                                </Grid2>
                            );
                        })}
                    </Grid2>
                </Box>
            ))}
        </Box>
    );
}
