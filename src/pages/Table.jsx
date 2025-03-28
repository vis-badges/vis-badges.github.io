// Table.jsx
import React, { useState, useRef } from 'react';
import { Box, TextField, IconButton, Tooltip } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { DataGrid } from '@mui/x-data-grid';
import useBadges from '../hooks/useBadges';
import BadgeDesignControls from '../components/BadgeDesignControls';
import BadgeRenderer from "../components/BadgeRenderer";
import {computeChipColor} from "../components/utils/badgeUtils";

export default function BadgeDataGrid() {
    const { badges, loading, error } = useBadges();
    const badgeRefs = useRef({});

    // Badge display options
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

    // Filter badges based on search and selection
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

    // Prepare rows for DataGrid
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
                const chipColor = computeChipColor(badge, colorMode, muiColor);
                return (
                    <BadgeRenderer
                        forwardedRef={(el) => (badgeRefs.current[params.id] = el)}
                        badge={badge}
                        size={chipSize}
                        variant={chipVariant}
                        chipColor={chipColor}
                        renderProps={{ leftIconKey, rightIconKey }}
                    />
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

            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                <TextField
                    size={"small"}
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
