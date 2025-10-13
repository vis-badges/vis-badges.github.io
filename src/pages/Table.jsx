import React, { useState, useRef } from 'react';
import {Box, TextField, IconButton, Tooltip, Button, Divider} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { DataGrid } from '@mui/x-data-grid';
import useBadges from '../hooks/useBadges';
import BadgeDesignControls from '../components/BadgeDesignControls';
import { BinaryBadge, OrdinalBadge, CategoricalBadge, QuantitativeBadge } from "@vis-badges/react";
import { computeChipColor } from "../components/utils/badgeUtils";
import { filterBadges } from '../components/utils/filterBadges';

export default function BadgeDataGrid() {
    const { badges, loading, error } = useBadges();
    const badgeRefs = useRef({});

    const [chipSize, setChipSize] = useState("medium");
    const [chipVariant, setChipVariant] = useState("filled");
    const [leftIconKey, setLeftIconKey] = useState("iconIntent");
    const [rightIconKey, setRightIconKey] = useState("none");
    const [colorMode, setColorMode] = useState("intent");
    const [muiColor, setMuiColor] = useState("default");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedBadge, setSelectedBadge] = useState(null);

    if (loading) return <div>Loading badges...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!Array.isArray(badges)) return <div>Error: Expected badges data to be an array.</div>;

    const filteredBadges = filterBadges(badges, searchQuery, selectedBadge);

    const rows = filteredBadges.map((badge, index) => ({
        id: index,
        badge,
        label: badge.label,
        description: badge.description,
        intent: badge.intent || "Other",
        type: badge.type || "Other",
        badgeType: badge.badgeType || "Binary",
    }));

    const handleDownloadAll = () => {
        Object.values(badgeRefs.current).forEach((badgeComponent) => {
            if (badgeComponent?.downloadBadge) {
                badgeComponent.downloadBadge();
            } else {
                console.warn('downloadBadge function not available for a badge');
            }
        });
    };

    const columns = [
        {
            field: 'badge',
            headerName: 'Badge',
            flex: 1.5,
            filterable: false,
            renderCell: (params) => {
                const badge = params.value;
                const chipColor = computeChipColor(badge, colorMode, muiColor);
                return (
                    // Wrap in a Box that disables pointer events to prevent clicks on the badge.
                    <Box sx={{ pointerEvents: 'none' }}>
                        {(() => {
                            const commonProps = {
                                badge,
                                size: chipSize,
                                variant: chipVariant,
                                chipColor,
                                leftIconKey,
                                rightIconKey,
                                ref: (el) => (badgeRefs.current[params.id] = el),
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
                    </Box>
                );
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
        { field: 'intent', headerName: 'Intent', flex: 1, filterable: true },
        { field: 'type', headerName: 'Type', flex: 1, filterable: true },
        { field: 'badgeType', headerName: 'Badge Type', flex: 1, filterable: true },
        {
            field: 'download',
            headerName: 'Download',
            flex: 0.8,
            filterable: false,
            renderCell: (params) => (
                <Tooltip title="Download Badge (PNG)">
                    <IconButton
                        size="small"
                        onClick={() => {
                            const badgeComponent = badgeRefs.current[params.id];
                            if (badgeComponent?.downloadBadge) {
                                badgeComponent.downloadBadge();
                            } else {
                                console.warn('Download function not available.');
                            }
                        }}
                    >
                        <DownloadIcon fontSize="small" />
                    </IconButton>
                </Tooltip>
            ),
        },
    ];

    return (
        <Box sx={{ p: 2 }}>
            <Divider sx={{mb: 2}}/>
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

            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                <TextField
                    size="small"
                    label="Search badges"
                    variant="outlined"
                    fullWidth
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                {/*DOWNLOAD ALL BADGES QUICK */}
                {/*<Button variant="contained" onClick={handleDownloadAll}>*/}
                {/*    Download All Badges*/}
                {/*</Button>*/}
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
                        '& .MuiDataGrid-columnHeaderTitle': { fontWeight: 'bold' },
                    }}
                />
            </Box>
        </Box>
    );
}
