// BadgeDesignControls.jsx
import React from 'react';
import {
    Box,
    ToggleButtonGroup,
    ToggleButton,
    IconButton,
    Tooltip,
    Typography,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const muiColorOptions = [
    { value: 'default', label: '', fullName: 'Monochrome' },
    { value: 'primary', label: '', fullName: 'Blue' },
    { value: 'secondary', label: '', fullName: 'Pink' },
    { value: 'success', label: '', fullName: 'Green' },
    { value: 'warning', label: '', fullName: 'Orange' },
    { value: 'error', label: '', fullName: 'Red' },
    { value: 'info', label: '', fullName: 'Cyan' },
];

export default function BadgeDesignControls({
                                                chipSize,
                                                setChipSize,
                                                chipVariant,
                                                setChipVariant,
                                                colorMode,
                                                setColorMode,
                                                muiColor,
                                                setMuiColor,
                                                leftIconKey,
                                                setLeftIconKey,
                                                rightIconKey, // not used here, but left for consistency
                                                setRightIconKey,
                                            }) {
    // Handle color toggle: if a MUI color is chosen, set colorMode to "standard" and store that color in muiColor.
    const handleColorChange = (event, newValue) => {
        if (!newValue) return; // Prevent unselection
        const isMuiColor = muiColorOptions.some((opt) => opt.value === newValue);
        if (isMuiColor) {
            setColorMode('standard');
            setMuiColor(newValue);
        } else {
            // newValue might be "intent"
            setColorMode(newValue);
        }
    };

    // Compute the value for the ToggleButtonGroup
    const colorValue = colorMode === 'standard' ? muiColor : colorMode;

    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 2,
                alignItems: 'flex-start',
                mb: 2,
            }}
        >
            {/* Size Selection */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Typography variant="caption" sx={{ fontWeight: 'bold', mb: 0 }}>
                    Size
                </Typography>
                <ToggleButtonGroup
                    value={chipSize}
                    exclusive
                    onChange={(e, val) => val && setChipSize(val)}
                    size="small"
                >
                    <ToggleButton value="small">Mini</ToggleButton>
                    <ToggleButton value="medium">Small</ToggleButton>
                    <ToggleButton value="large">Medium</ToggleButton>
                </ToggleButtonGroup>
            </Box>

            {/* Variant / Style Selection */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Typography variant="caption" sx={{ fontWeight: 'bold', mb: 0 }}>
                    Style
                </Typography>
                <ToggleButtonGroup
                    value={chipVariant}
                    exclusive
                    onChange={(e, val) => val && setChipVariant(val)}
                    size="small"
                >
                    <ToggleButton value="filled">Filled</ToggleButton>
                    <ToggleButton value="outlined">Outlined</ToggleButton>
                </ToggleButtonGroup>
            </Box>

            {/* Icon / Pictogram Selection */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Typography variant="caption" sx={{ fontWeight: 'bold', mb: 0 }}>
                    Pictogram
                </Typography>
                <ToggleButtonGroup
                    value={leftIconKey}
                    exclusive
                    onChange={(e, val) => val && setLeftIconKey(val)}
                    size="small"
                >
                    <ToggleButton value="iconIntent">INTENT</ToggleButton>
                    <ToggleButton value="iconScope">SCOPE</ToggleButton>
                    <ToggleButton value="none">NONE</ToggleButton>
                </ToggleButtonGroup>
            </Box>

            {/* Color Selection */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Typography variant="caption" sx={{ fontWeight: 'bold', mb: 0 }}>
                    Color
                </Typography>
                <ToggleButtonGroup
                    value={colorValue}
                    exclusive
                    onChange={handleColorChange}
                    size="small"
                >
                    {/* INTENT button with tooltip */}
                    <Tooltip title="Colored by Intent, Confirmation is Green, Information is Blue and Warning is Orange">
                        <ToggleButton
                            value="intent"
                            sx={{
                                background: 'linear-gradient(90deg, rgba(56,142,60,0.2), rgba(30,136,229,0.2), rgba(245,124,0,0.2))',
                                textTransform: 'uppercase',
                                borderRadius: 1,
                                '&.Mui-selected': {
                                    background: 'linear-gradient(90deg, rgba(56,142,60,0.2), rgba(30,136,229,0.2), rgba(245,124,0,0.2))',
                                },
                                '&:hover': {
                                    background: 'linear-gradient(90deg, rgba(56,142,60,0.2), rgba(30,136,229,0.2), rgba(245,124,0,0.2))',
                                },
                            }}
                        >
                            INTENT
                        </ToggleButton>
                    </Tooltip>

                    {muiColorOptions.map((item) => (
                        <ToggleButton
                            key={item.value}
                            value={item.value}
                            sx={{
                                width: '20px',
                                backgroundColor: (theme) =>
                                    alpha(theme.palette[item.value]?.main || theme.palette.grey[500], 0.2),
                                color: (theme) =>
                                    theme.palette.getContrastText(
                                        alpha(theme.palette[item.value]?.main || theme.palette.grey[500], 0.2)
                                    ),
                                fontWeight: 'bold',
                                borderRadius: 1,
                                '&.Mui-selected': {
                                    backgroundColor: (theme) =>
                                        theme.palette[item.value]?.dark || theme.palette.grey[700],
                                },
                                '&:hover': {
                                    backgroundColor: (theme) =>
                                        theme.palette[item.value]?.main || theme.palette.grey[500],
                                },
                            }}
                        >
                            {item.value === 'default' ? '' : item.label}
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
            </Box>

            <Tooltip title="Reset to default">
                <IconButton
                    color="default"
                    size="small"
                    onClick={() => window.location.reload()}
                >
                    <RestartAltIcon />
                </IconButton>
            </Tooltip>
        </Box>
    );
}
