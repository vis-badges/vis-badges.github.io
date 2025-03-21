import React, { useState } from 'react';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import QuantitativeBadge from '../components/QuantitativeBadge';
import BadgeDesignControls from '../components/BadgeDesignControls';
import useQuantitativeBadges from "../hooks/useQuantitativeBadges";

export default function QuantitativeBadgeGrid() {
    const { quantitativeBadges, loading, error } = useQuantitativeBadges();
    const [chipSize, setChipSize] = useState("medium");
    const [chipVariant, setChipVariant] = useState("filled");
    const [withIcon, setWithIcon] = useState(true);

    if (loading) return <div>Loading quant badges...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!Array.isArray(quantitativeBadges))
    {
        console.log('quantitativeBadges must be an array');
        console.log(quantitativeBadges);
        return <div>Error: Expected quant badges data to be an array.</div>;
    }

    const rows = quantitativeBadges.map((badge, index) => ({
        id: index,
        badge, // custom field that holds the full quant badge object
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
                <QuantitativeBadge
                    badge={params.value}
                    size={chipSize}
                    variant={chipVariant}
                    withIcon={withIcon}
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

            <BadgeDesignControls
                chipSize={chipSize}
                setChipSize={setChipSize}
                chipVariant={chipVariant}
                setChipVariant={setChipVariant}
                withIcon={withIcon}
                setWithIcon={setWithIcon}
            />

            <Box sx={{ width: '100%' }}>
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
