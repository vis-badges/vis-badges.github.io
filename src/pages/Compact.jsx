import React, { useState } from 'react';
import { Box, Drawer, TextField, Typography } from '@mui/material';
import Grid2 from '@mui/material/Grid';
import BadgeDesignControls from '../components/BadgeDesignControls';
import useBadges from '../hooks/useBadges';
import BadgeRenderer from "../components/BadgeRenderer";
import { computeChipColor } from "../components/utils/badgeUtils";
import { filterBadges } from '../components/utils/filterBadges';

export default function Compact() {
    const { badges, loading, error } = useBadges();
    const [chipSize, setChipSize] = useState("medium");
    const [chipVariant, setChipVariant] = useState("filled");
    const [leftIconKey, setLeftIconKey] = useState("iconScope");
    const [rightIconKey, setRightIconKey] = useState("none");
    const [colorMode, setColorMode] = useState("intent");
    const [muiColor, setMuiColor] = useState("default");
    const [selectedBadge, setSelectedBadge] = useState(null);
    const [searchQuery, setSearchQuery] = useState(""); // New search query state

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

    // Use the searchQuery (a string) to filter badges.
    const filteredBadges = filterBadges(badges, searchQuery);

    const groupedBadges = filteredBadges.reduce((groups, badge) => {
        const key = badge.intent || "Other";
        groups[key] = groups[key] || [];
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
                selectedBadge={selectedBadge}
                setSelectedBadge={setSelectedBadge}
            />

            {sortedIntentKeys.map((intent) => (
                <Box key={intent} sx={{ mb: 4 }}>
                    <Grid2 container spacing={2}>
                        {groupedBadges[intent].map((badge, idx) => {
                            const chipColor = computeChipColor(badge, colorMode, muiColor);
                            return (
                                <Grid2
                                    item
                                    key={idx}
                                    onClick={() => setSelectedBadge(badge)}
                                    sx={{ cursor: 'pointer' }}
                                >
                                    <BadgeRenderer
                                        badge={badge}
                                        size={chipSize}
                                        variant={chipVariant}
                                        chipColor={chipColor}
                                        renderProps={{ leftIconKey, rightIconKey }}
                                    />
                                </Grid2>
                            );
                        })}
                    </Grid2>
                </Box>
            ))}

            {/* Sidebar Drawer for Badge Information */}
            // In your Compact component, replace the Drawer section with:

            <Drawer
                anchor="right"
                open={Boolean(selectedBadge)}
                onClose={() => setSelectedBadge(null)}
            >
                <Box sx={{marginTop:10, width: 300, p: 2 }}>
                    {selectedBadge && (
                        <>
                            {/* Badge Label */}
                            <Typography variant="h5" gutterBottom>
                                {selectedBadge.label || "N/A"}
                            </Typography>

                            {/* Badge Description */}
                            <Typography variant="body2" color="text.secondary" gutterBottom>
                                {selectedBadge.description}
                            </Typography>

                            {/* Badge Intent */}
                            <Box sx={{ mb: 1 }}>
                                <Typography variant="subtitle2" color="text.secondary">
                                    Intent
                                </Typography>
                                <Typography variant="body1">
                                    {selectedBadge.intent || "N/A"}
                                </Typography>
                            </Box>

                            {/* Badge Type */}
                            <Box sx={{ mt: 2, mb: 1 }}>
                                <Typography variant="subtitle2" color="text.secondary">
                                    Type
                                </Typography>
                                <Typography variant="body1">
                                    {selectedBadge.type || "N/A"}
                                </Typography>
                            </Box>


                            {/* Badge Topics as Hashtags */}
                            {selectedBadge.topics && selectedBadge.topics.length > 0 && (
                                <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                    {selectedBadge.topics.map((topic, idx) => (
                                        <Box
                                            key={idx}
                                            sx={{
                                                backgroundColor: 'primary.light',
                                                color: 'primary.contrastText',
                                                px: 1,
                                                py: 0.5,
                                                borderRadius: 1,
                                                fontSize: '0.75rem',
                                            }}
                                        >
                                            #{topic}
                                        </Box>
                                    ))}
                                </Box>
                            )}
                        </>
                    )}
                </Box>
            </Drawer>
        </Box>
    );
}
