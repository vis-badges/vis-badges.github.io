import React from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem, ToggleButtonGroup, ToggleButton, IconButton, Tooltip } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const muiColorOptions = [
    { value: 'default', label: 'Monochrome' },
    { value: 'primary', label: 'Blue' },
    { value: 'secondary', label: 'Pink' },
    { value: 'success', label: 'Green' },
    { value: 'warning', label: 'Orange' },
    { value: 'error', label: 'Red' },
    { value: 'info', label: 'Cyan' },
];

export default function BadgeDesignControls({
                                                chipSize, setChipSize,
                                                chipVariant, setChipVariant,
                                                colorMode, setColorMode,
                                                muiColor, setMuiColor,
                                                leftIconKey, setLeftIconKey,
                                                rightIconKey, setRightIconKey,
                                            }) {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, alignItems: 'center', mb: 2 }}>
            <FormControl size="small" sx={{ minWidth: 100 }}>
                <InputLabel>Size</InputLabel>
                <Select value={chipSize} label="Size" onChange={(e) => setChipSize(e.target.value)}>
                    <MenuItem value="small">MINI</MenuItem>
                    <MenuItem value="medium">SMALL</MenuItem>
                    <MenuItem value="large">MEDIUM</MenuItem>
                </Select>
            </FormControl>

            <ToggleButtonGroup
                value={chipVariant}
                exclusive
                onChange={(e, val) => val && setChipVariant(val)}
                size="small"
            >
                <ToggleButton value="filled">Filled</ToggleButton>
                <ToggleButton value="outlined">Outlined</ToggleButton>
            </ToggleButtonGroup>

            {/* Color Mode selection comes before icon selections */}
            <FormControl size="small" sx={{ minWidth: 160 }}>
                <InputLabel>Color Mode</InputLabel>
                <Select value={colorMode === 'standard' ? muiColor : colorMode} label="Color Mode" onChange={(e) => {
                    const val = e.target.value;
                    if (muiColorOptions.some(opt => opt.value === val)) {
                        setColorMode('standard');
                        setMuiColor(val);
                    } else {
                        setColorMode(val);
                    }
                }}>
                    <MenuItem value="intent">INTENT</MenuItem>
                    <MenuItem value="type">CATEGORY</MenuItem>
                    {muiColorOptions.map(color => (
                        <MenuItem key={color.value} value={color.value}>{color.label}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* Left Icon Selection: includes "None", "Avatar", "Icon 1", "Icon 2", "Icon 3" */}
            <FormControl size="small" sx={{ minWidth: 150 }}>
                <InputLabel>Left Icon</InputLabel>
                <Select value={leftIconKey} label="Left Icon" onChange={(e) => setLeftIconKey(e.target.value)}>
                    <MenuItem value="none">None</MenuItem>
                    <MenuItem value="icon1">INTENT</MenuItem>
                    <MenuItem value="icon2">CATEGORY</MenuItem>
                    <MenuItem value="icon3">BADGE</MenuItem>
                    <MenuItem value="avatar">AVATAR</MenuItem>
                </Select>
            </FormControl>

            {/* Right Icon Selection: includes "None", "Icon 1", "Icon 2", "Icon 3" */}
            <FormControl size="small" sx={{ minWidth: 150 }}>
                <InputLabel>Right Icon</InputLabel>
                <Select value={rightIconKey} label="Right Icon" onChange={(e) => setRightIconKey(e.target.value)}>
                    <MenuItem value="none">None</MenuItem>
                    <MenuItem value="icon1">INTENT</MenuItem>
                    <MenuItem value="icon2">CATEGORY</MenuItem>
                    <MenuItem value="icon3">BADGE</MenuItem>
                </Select>
            </FormControl>

            <Tooltip title="Reset to default">
                <IconButton color="secondary" size="small" onClick={() => window.location.reload()}>
                    <RestartAltIcon />
                </IconButton>
            </Tooltip>
        </Box>
    );
}
