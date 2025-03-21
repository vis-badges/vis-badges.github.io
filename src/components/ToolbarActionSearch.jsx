import React from 'react';
import { Stack, IconButton, Tooltip, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ThemeSwitcher } from "@toolpad/core/DashboardLayout";
import SearchBar from './SearchBar';
import useBadges from "../hooks/useBadges"; // Our new search component

export default function ToolbarActionsSearch( ) {
    const { badges, loading, error } = useBadges();

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

    return (
        <Stack direction="row" spacing={1} alignItems="center">
            {/* You can remove this chunk if you prefer the new approach */}
            <Tooltip title="Search" enterDelay={1000}>
                <IconButton
                    type="button"
                    aria-label="search"
                    sx={{
                        display: { xs: 'inline', md: 'none' },
                    }}
                >
                    <SearchIcon />
                </IconButton>
            </Tooltip>

            <SearchBar badges={badges} />
        </Stack>
    );
}
