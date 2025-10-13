import React, { useState } from 'react';
import { Box, Divider, Typography, Grid } from '@mui/material';
import BadgeDesignControls from '../components/BadgeDesignControls';
import useBadges from '../hooks/useBadges';
import { BinaryBadge, OrdinalBadge, CategoricalBadge, QuantitativeBadge } from "vis-badges-react";
import { computeChipColor } from "../components/utils/badgeUtils";

export default function TeaserFigure() {
    const { badges, loading, error } = useBadges();

    // Design controls
    const [chipSize, setChipSize] = useState("medium");
    const [chipVariant, setChipVariant] = useState("filled");
    const [leftIconKey, setLeftIconKey] = useState("iconIntent");
    const [rightIconKey, setRightIconKey] = useState("none");
    const [colorMode, setColorMode] = useState("intent");
    const [muiColor, setMuiColor] = useState("default");
    const [selectedBadge, setSelectedBadge] = useState(null);

    if (loading) return <div>Loading badges...</div>;
    if (error) return <div>Error: {error.message}</div>;

    // Group badges by their "type" field (scope), fallback to "OTHER".
    const groupedByScope = badges.reduce((acc, badge) => {
        const scope = badge.type || "OTHER";
        if (!acc[scope]) acc[scope] = [];
        acc[scope].push(badge);
        return acc;
    }, {});

    // Define the desired order of scopes.
    const scopeOrder = [
        "VISUAL ENCODING",
        "INTERACTION",
        "ANALYSIS",
        "DATA",
        "CONTEXT",
        "OTHER"
    ];

    // Provide a simple mapping from scope to badge labels.
    // Edit these lists to choose which badges (by label) you want in each scope.
    const selectedLabelsMapping = {
        "INTERACTION": [
            "Can mouseover",
            "Zoomable",
            "Can sort",
            "Parameterizable",
            "Details-on-demand",
            "Interactive pre-filter",
            "Device-responsive",
            "Can sort & filter",
            "Brushing & linking",

        ],
        "VISUAL ENCODING": [
            "Point match exact locations",
            "Uncertainty visualized",
            "Colorblind-safe",
            "Printer-safe",
            "Area encoding",
            "Approximate times",
            "Dual-axis encoding",
            "Invisible small values",
            // "Overlapping elements",
            "Number of Colors"
        ],
        "ANALYSIS": [
            "Alternative Units as Reference",
            "Data Normalized",
            "Composite index",
            "Outlier Removal",
            "Actual time offset",
            "Possible visual artifacts",
            "AI-derived insight",
            "Missing Data"
        ],
        "DATA": [
            "Open Data",
            "Data Currency",
            "Dataset Linked",
            "Dynamic Data",
            "Collection Period Specified",
            "Multiple Data Sources,",
            "Dataset Size",
            "Update Interval",
            "Contains Modeled Data",
            "Known data gap"
        ],
        "CONTEXT": [
            "Trusted Data Source",
            "Major Finding",
            "Terminology explained",
            "LLM Involvement",
            "Complex units",
            "AI-generated captions",
            "Labels omitted",
            "Sensitive topic",
            "For experts only",
            "Geographically filtered"
        ]
    };

    // Filter each scope's badges based on the mapping.
    const filteredGrouped = {};
    scopeOrder.forEach(scope => {
        const scopeBadges = groupedByScope[scope] || [];
        if (selectedLabelsMapping[scope]) {
            filteredGrouped[scope] = scopeBadges.filter(badge =>
                selectedLabelsMapping[scope].includes(badge.label)
            );
        } else {
            filteredGrouped[scope] = scopeBadges;
        }
    });

    // Define the desired intent order: INFORMATION first, then CONFIRMATION, then WARNING.
    const intentOrder = ["INFORMATION", "CONFIRMATION", "WARNING"];
    const getIntentIndex = (intent) => {
        const idx = intentOrder.indexOf((intent || "").toUpperCase());
        return idx === -1 ? intentOrder.length : idx;
    };

    // Badge cell styling for uniform width.
    const badgeStyle = {
        maxWidth: 140,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    };

    return (
        <>
            {/* Full-width divider at the top */}
            <Divider sx={{ mb: 1, width: '100%' }} />

            {/* Centered content container */}
            <Box sx={{ p: 1, maxWidth: 530, mx: 'auto' }}>
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
            </Box>

            {/* Loop over each scope group; each divider below spans full width */}
            {scopeOrder.map((scope, idx) => {
                // Sort badges by intent within the scope.
                const badgesInScope = (filteredGrouped[scope] || [])
                    .slice()
                    .sort((a, b) => getIntentIndex(a.intent) - getIntentIndex(b.intent));
                if (badgesInScope.length === 0) return null;

                return (
                    <React.Fragment key={scope}>
                        <Divider sx={{ mb: 0.5, width: '100%' }} />
                        <Box sx={{ p: 1, maxWidth: 730, mx: 'auto', mb: 0.5 }}>
                            <Grid container spacing={0} alignItems="flex-start">
                                <Grid item xs>
                                    <Grid container spacing={0.5} alignItems="flex-start">
                                        {badgesInScope.map(badge => {
                                            const chipColor = computeChipColor(badge, colorMode, muiColor);
                                            return (
                                                <Grid item key={badge.id}>
                                                {(() => {
                                                    const commonProps = {
                                                        badge,
                                                        size: chipSize,
                                                        variant: chipVariant,
                                                        chipColor: chipColor,
                                                        leftIconKey,
                                                        rightIconKey,
                                                    };
                                                    switch (badge.badgeType) {
                                                        case 'ORDINAL':
                                                            return <OrdinalBadge {...commonProps} />;
                                                        case 'QUANTITATIVE':
                                                            return <QuantitativeBadge {...commonProps} />;
                                                        case 'CATEGORICAL':
                                                            return <CategoricalBadge {...commonProps} />;
                                                        default:
                                                            return <BinaryBadge {...commonProps} />;
                                                    }
                                                })()}
                                                </Grid>
                                            );
                                        })}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    </React.Fragment>
                );
            })}

            {/* Full-width divider at the bottom */}
            <Divider sx={{ mt: 1, width: '100%' }} />
        </>
    );
}
