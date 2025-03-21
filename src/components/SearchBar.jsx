import React, { useState, useRef } from 'react';
import {
    Box,
    TextField,
    IconButton,
    Stack,
    Paper,
    Chip,
    ClickAwayListener,
    Tooltip,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ThemeSwitcher } from "@toolpad/core/DashboardLayout";

export default function SearchBar({ badges }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [open, setOpen] = useState(false);
    const containerRef = useRef(null);


    // Filter badges by label, ignoring case
    const filteredBadges = badges.filter((b) => {
        const label = b.label || '';
        return label.toLowerCase().includes(searchTerm.toLowerCase());
    });

    function handleChange(e) {
        const value = e.target.value;
        setSearchTerm(value);

        // If there's text, open the dropdown; if empty, close it
        setOpen(value.length > 0);
    }

    // If user clicks outside the results, close them
    function handleClickAway() {
        // If you want to close results whenever user clicks away
        setOpen(false);
    }

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <Box ref={containerRef} sx={{ position: 'relative' }}>
                <Stack direction="row" alignItems="center">
                    <TextField
                        value={searchTerm}
                        onChange={handleChange}
                        label="Search Badges"
                        variant="outlined"
                        size="small"
                        placeholder="Type to filter badges..."
                        sx={{ mr: 1, width: 200 }}
                        InputProps={{
                            endAdornment: (
                                <IconButton size="small">
                                    <SearchIcon />
                                </IconButton>
                            )
                        }}
                    />
                    <ThemeSwitcher />
                </Stack>

                {open && filteredBadges.length > 0 && (
                    <Paper
                        elevation={3}
                        sx={{
                            position: 'absolute',
                            top: 42,        // just below the TextField
                            left: 0,
                            width: '100%',  // match container width
                            maxHeight: 200,
                            overflowY: 'auto',
                            zIndex: 9999,
                            p: 1,
                        }}
                    >
                        {filteredBadges.map((badge) => (
                            <Tooltip key={badge.id} title={badge.description || ''}>
                                <Chip
                                    label={badge.label}
                                    size="small"
                                    sx={{ m: 0.5 }}
                                />
                            </Tooltip>
                        ))}

                        {/*
              Alternatively, you could render <BinaryBadge> or <OrdinalBadge>
              if you want the actual badge UI:

              {filteredBadges.map((badge) => (
                <Box key={badge.id} sx={{ m: 0.5, display: 'inline-block' }}>
                  <BinaryBadge badge={badge} ... />
                </Box>
              ))}
            */}
                    </Paper>
                )}
            </Box>
        </ClickAwayListener>
    );
}
