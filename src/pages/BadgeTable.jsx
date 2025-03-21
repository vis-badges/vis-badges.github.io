import React, { useState, useRef } from 'react';
import { Box, Typography, TextField, IconButton, Tooltip } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { DataGrid } from '@mui/x-data-grid';
import useBadges from '../hooks/useBadges';
import BinaryBadge from '../components/BinaryBadge';
import OrdinalBadge from '../components/OrdinalBadge';
import QuantitativeBadge from '../components/QuantitativeBadge';
import CategoricalBadge from '../components/CategoricalBadge';
import BadgeDesignControls from '../components/BadgeDesignControls';

export default function BadgeDataGrid() {
    const { badges, loading, error } = useBadges();
    // Store refs to rendered badge components, keyed by row id
    const badgeRefs = useRef({});

    // State for badge display options
    const [chipSize, setChipSize] = useState("medium");
    const [chipVariant, setChipVariant] = useState("filled");
    const [leftIconKey, setLeftIconKey] = useState("icon1");
    const [rightIconKey, setRightIconKey] = useState("none");
    const [colorMode, setColorMode] = useState("intent");
    const [muiColor, setMuiColor] = useState("default");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedBadge, setSelectedBadge] = useState(null);

    if (loading) return <div>Loading badges...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!Array.isArray(badges)) return <div>Error: Expected badges data to be an array.</div>;

    // Filtering logic
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

    function computeChipColor(badge) {
        switch (colorMode) {
            case 'standard': return muiColor;
            case 'intent': return mapIntentToColor(badge.intent);
            case 'type': return mapTypeToColor(badge.type);
            default: return 'default';
        }
    }

    function mapIntentToColor(intent) {
        switch (intent) {
            case 'CONFIRMATION': return 'success';
            case 'WARNING': return 'warning';
            case 'INFORMATION': return 'info';
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

    // Prepare rows for DataGrid; include badgeType from the badge JSON
    const rows = filteredBadges.map((badge, index) => ({
        id: index,
        badge,
        label: badge.label,
        description: badge.description,
        intent: badge.intent || "Other",
        type: badge.type || "Other",
        badgeType: badge.badgeType || "Binary",
    }));

    const columns = [
        {
            field: 'badge',
            headerName: 'Badge',
            flex: 1.5,
            filterable: false,
            renderCell: (params) => {
                const badge = params.value;
                const chipColor = computeChipColor(badge);
                // For each badge type, render the appropriate badge component and assign a ref.
                if (badge.badgeType === "ORDINAL") {
                    return (
                        <OrdinalBadge
                            ref={(el) => (badgeRefs.current[params.id] = el)}
                            badge={badge}
                            size={chipSize}
                            variant={chipVariant}
                            leftIconKey={leftIconKey}
                            rightIconKey={rightIconKey}
                            chipColor={chipColor}
                        />
                    );
                } else if (badge.badgeType === "QUANTITATIVE") {
                    return (
                        <QuantitativeBadge
                            ref={(el) => (badgeRefs.current[params.id] = el)}
                            badge={badge}
                            size={chipSize}
                            variant={chipVariant}
                            leftIconKey={leftIconKey}
                            rightIconKey={rightIconKey}
                            chipColor={chipColor}
                        />
                    );
                } else if (badge.badgeType === "CATEGORICAL") {
                    return (
                        <CategoricalBadge
                            ref={(el) => (badgeRefs.current[params.id] = el)}
                            badge={badge}
                            size={chipSize}
                            variant={chipVariant}
                            leftIconKey={leftIconKey}
                            rightIconKey={rightIconKey}
                            chipColor={chipColor}
                        />
                    );
                } else {
                    // Default to binary badge
                    return (
                        <BinaryBadge
                            ref={(el) => (badgeRefs.current[params.id] = el)}
                            badge={badge}
                            size={chipSize}
                            variant={chipVariant}
                            leftIconKey={leftIconKey}
                            rightIconKey={rightIconKey}
                            chipColor={chipColor}
                        />
                    );
                }
            },
        },
        {
            field: 'description',
            headerName: 'Description',
            flex: 2,
            filterable: true,
            renderCell: (params) => (
                <div style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>
                    {params.value}
                </div>
            ),
        },
        {
            field: 'intent',
            headerName: 'Intent',
            flex: 1,
            filterable: true,
        },
        {
            field: 'type',
            headerName: 'Type',
            flex: 1,
            filterable: true,
        },
        {
            field: 'badgeType',
            headerName: 'Badge Type',
            flex: 1,
            filterable: true,
        },
        {
            field: 'download',
            headerName: 'Download',
            flex: 0.8,
            filterable: false,
            renderCell: (params) => {
                const badge = params.row.badge;
                return (
                    <Tooltip title="Download Badge (PNG)">
                        <IconButton
                            size="small"
                            onClick={() => {
                                const badgeComponent = badgeRefs.current[params.id];
                                if (badgeComponent && badgeComponent.downloadBadge) {
                                    badgeComponent.downloadBadge();
                                } else {
                                    console.warn('Download function not available.');
                                }
                            }}
                        >
                            <DownloadIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                );
            },
        },
    ];

    return (
        <Box sx={{ p: 2 }}>
             <BadgeDesignControls
                chipSize={chipSize}
                setChipSize={setChipSize}
                chipVariant={chipVariant}
                setChipVariant={setChipVariant}
                colorMode={colorMode}
                setColorMode={setColorMode}
                muiColor={muiColor}
                setMuiColor={setMuiColor}
                leftIconKey={leftIconKey}
                setLeftIconKey={setLeftIconKey}
                rightIconKey={rightIconKey}
                setRightIconKey={setRightIconKey}
            />

            {/* Search */}
            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                <TextField
                    label="Search badges"
                    variant="outlined"
                    fullWidth
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </Box>

            <Box sx={{ width: '100%', mt: 2 }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10, 20, 50]}
                    disableSelectionOnClick
                    sx={{
                        '& .MuiDataGrid-cell': {
                            whiteSpace: 'normal',
                            lineHeight: '1.5',
                            paddingTop: '8px',
                            paddingBottom: '8px',
                        },
                        '& .MuiDataGrid-columnHeaderTitle': {
                            fontWeight: 'bold',
                        },
                    }}
                />
            </Box>
        </Box>
    );
}
