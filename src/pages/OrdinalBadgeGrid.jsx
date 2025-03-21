import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import useOrdinalBadges from '../hooks/useOrdinalBadges';
import OrdinalBadge from '../components/OrdinalBadge';
import BadgeDesignControls from '../components/BadgeDesignControls';

export default function OrdinalBadgeDataGrid() {
    const { ordinalBadges, loading, error } = useOrdinalBadges();
    const [chipSize, setChipSize] = useState("medium");
    const [chipVariant, setChipVariant] = useState("filled");
    const [withIcon, setWithIcon] = useState(true);
    const [showValues, setShowValues] = useState(true); // control to toggle showing ordinal values

    if (loading) return <div>Loading ordinal badges...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!Array.isArray(ordinalBadges))
    {
        console.log('OrdinalBadges must be an array');
        console.log(ordinalBadges);
        return <div>Error: Expected ordinal badges data to be an array.</div>;
    }

    // Prepare rows for the DataGrid.
    const rows = ordinalBadges.map((badge, index) => ({
        id: index,
        badge, // custom field that holds the full ordinal badge object
        tooltip: badge.tooltip || "",
        type: badge.type || "",
    }));

    const columns = [
        {
            field: 'badge',
            headerName: 'Badge',
            flex: 1,
            filterable: false, // custom cell so filtering is off
            renderCell: (params) => (
                <OrdinalBadge
                    badge={params.value}
                    size={chipSize}
                    variant={chipVariant}
                    withIcon={withIcon}
                    showValues={showValues}
                />
            ),
        },
        {
            field: 'tooltip',
            headerName: 'Tooltip',
            flex: 2,
            filterable: true,
            renderCell: (params) => (
                <div style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>
                    {params.value}
                </div>
            ),
        },
        {
            field: 'type',
            headerName: 'Type',
            flex: 1,
            filterable: true,
        },
    ];

    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h5" gutterBottom>
                Ordinal Badge DataGrid
            </Typography>

            {/* Design Controls for both binary and ordinal badges */}
            <BadgeDesignControls
                chipSize={chipSize}
                setChipSize={setChipSize}
                chipVariant={chipVariant}
                setChipVariant={setChipVariant}
                withIcon={withIcon}
                setWithIcon={setWithIcon}
                // For ordinal badges, we'll repurpose this control to toggle showing values
                showTags={false}
                setShowTags={setShowValues}
            />

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
