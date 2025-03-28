// BadgeDesignControls.jsx
import React from 'react';
import {
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    ToggleButtonGroup,
    ToggleButton,
    IconButton,
    Tooltip,
} from '@mui/material';
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
                                                rightIconKey,
                                                setRightIconKey,
                                            }) {
    return (
        <Box
            sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, alignItems: 'center', mb: 2 }}
        >
            {/* Refactored: Size selection as a ToggleButtonGroup with only two options */}
            <ToggleButtonGroup
                value={chipSize}
                exclusive
                onChange={(e, val) => val && setChipSize(val)}
                size="small"
            >
                {/*<ToggleButton value="small">Mini</ToggleButton>*/}
                <ToggleButton value="medium">Small</ToggleButton>
                <ToggleButton value="large">Medium</ToggleButton>
            </ToggleButtonGroup>

            <ToggleButtonGroup
                value={chipVariant}
                exclusive
                onChange={(e, val) => val && setChipVariant(val)}
                size="small"
            >
                <ToggleButton value="filled">Filled</ToggleButton>
                <ToggleButton value="outlined">Outlined</ToggleButton>
            </ToggleButtonGroup>

            <FormControl size="small" sx={{ minWidth: 160 }}>
                <InputLabel>Color Mode</InputLabel>
                <Select
                    value={colorMode === 'standard' ? muiColor : colorMode}
                    label="Color Mode"
                    onChange={(e) => {
                        const val = e.target.value;
                        if (muiColorOptions.some((opt) => opt.value === val)) {
                            setColorMode('standard');
                            setMuiColor(val);
                        } else {
                            setColorMode(val);
                        }
                    }}
                >
                    <MenuItem value="intent">INTENT</MenuItem>
                    <MenuItem value="type">CATEGORY</MenuItem>
                    {muiColorOptions.map((color) => (
                        <MenuItem key={color.value} value={color.value}>
                            {color.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl size="small" sx={{ minWidth: 150 }}>
                <InputLabel>Left Icon</InputLabel>
                <Select
                    value={leftIconKey}
                    label="Left Icon"
                    onChange={(e) => setLeftIconKey(e.target.value)}
                >
                    <MenuItem value="none">None</MenuItem>
                    <MenuItem value="iconIntent">INTENT</MenuItem>
                    <MenuItem value="iconScope">CATEGORY</MenuItem>
                    <MenuItem value="iconTopic">BADGE</MenuItem>
                    <MenuItem value="avatar">AVATAR</MenuItem>
                </Select>
            </FormControl>


            {/*<FormControl size="small" sx={{ minWidth: 150 }}>*/}
            {/*    <InputLabel>Right Icon</InputLabel>*/}
            {/*    <Select*/}
            {/*        value={rightIconKey}*/}
            {/*        label="Right Icon"*/}
            {/*        onChange={(e) => setRightIconKey(e.target.value)}*/}
            {/*    >*/}
            {/*        <MenuItem value="none">None</MenuItem>*/}
            {/*        <MenuItem value="iconIntent">INTENT</MenuItem>*/}
            {/*        <MenuItem value="iconScope">CATEGORY</MenuItem>*/}
            {/*        <MenuItem value="iconTopic">BADGE</MenuItem>*/}
            {/*    </Select>*/}
            {/*</FormControl>*/}

            <Tooltip title="Reset to default">
                <IconButton
                    color="secondary"
                    size="small"
                    onClick={() => window.location.reload()}
                >
                    <RestartAltIcon />
                </IconButton>
            </Tooltip>
        </Box>
    );
}
