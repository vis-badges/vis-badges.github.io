import React, { useState } from 'react';
import {
    Box,
    Stack,
    Typography,
    TextField,
    Select,
    MenuItem,
    Chip,
    Button,
    FormControl,
    InputLabel
} from '@mui/material';
import * as MuiIcons from '@mui/icons-material';
import BadgeDesignControls from "../components/BadgeDesignControls";
import IconGallery from "../components/IconGallery";
import { useBadgeDesignControls } from "../hooks/useBadgeDesignControls";

export default function BadgeEditorPage() {
    const {
        chipSize, setChipSize,
        chipVariant, setChipVariant,
        withIcon, setWithIcon
    } = useBadgeDesignControls();

    const [badgeName, setBadgeName] = useState('');
    const [description, setDescription] = useState('');
    const [badgeType, setBadgeType] = useState('BINARY');
    const [badgeIntent, setBadgeIntent] = useState('Confirmation');
    const [badgeCategory, setBadgeCategory] = useState('Visual Encoding');
    const [link, setLink] = useState('');
    const [selectedIcon1, setSelectedIcon1] = useState(null);
    const [selectedIcon2, setSelectedIcon2] = useState(null);
    const [avatar, setAvatar] = useState({ type: 'letter', value: '' });

    const handleSave = () => {
        console.log({
            badgeType: badgeType,
            label: badgeName,
            description,
            type: badgeCategory,
            intent: badgeIntent,
            link,
            icon1: selectedIcon1,
            icon2: selectedIcon2,
            avatar
        });
        alert('Badge saved! (Check console for details)');
    };

    return (
        <Stack direction="row" spacing={4} sx={{ p: 2 }}>
            {/* Left: Form Inputs */}
            <Stack spacing={2} sx={{ width: 320 }}>
                <Typography variant="h6">Badge Editor</Typography>
                <TextField
                    label="Badge Name"
                    value={badgeName}
                    onChange={(e) => setBadgeName(e.target.value)}
                />
                <TextField
                    label="Description"
                    multiline rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <FormControl>
                    <InputLabel>Category</InputLabel>
                    <Select
                        value={badgeCategory}
                        onChange={(e) => setBadgeCategory(e.target.value)}
                    >
                        <MenuItem value="Data">Data</MenuItem>
                        <MenuItem value="Analysis">Analysis</MenuItem>
                        <MenuItem value="Context">Context</MenuItem>
                        <MenuItem value="Interaction">Interaction</MenuItem>
                        <MenuItem value="Visual Encoding">Visual Encoding</MenuItem>
                    </Select>
                </FormControl>
                <FormControl>
                    <InputLabel>Intent</InputLabel>
                    <Select
                        value={badgeIntent}
                        onChange={(e) => setBadgeIntent(e.target.value)}
                    >
                        <MenuItem value="Confirmation">Confirmation</MenuItem>
                        <MenuItem value="Warning">Warning</MenuItem>
                        <MenuItem value="Information">Information</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    label="External Link (Optional)"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                />
                <Typography variant="subtitle1">Select Primary Icon</Typography>
                <IconGallery onSelect={setSelectedIcon1} />
                <Typography variant="subtitle1">Select Secondary Icon (Optional)</Typography>
                <IconGallery onSelect={setSelectedIcon2} />
                <TextField
                    label="Avatar Letter"
                    value={avatar.value}
                    onChange={(e) => setAvatar({ type: 'letter', value: e.target.value.toUpperCase() })}
                />
                <Button variant="contained" onClick={handleSave}>Save</Button>
            </Stack>

            {/* Right: Preview Section */}
            <Box flex={1}>
                <BadgeDesignControls
                    chipSize={chipSize} setChipSize={setChipSize}
                    chipVariant={chipVariant} setChipVariant={setChipVariant}
                    withIcon={withIcon} setWithIcon={setWithIcon}
                />
                <Typography variant="h6">Preview</Typography>
                <Chip
                    label={badgeName || '(No Name)'}
                    icon={selectedIcon1 && withIcon ? React.createElement(MuiIcons[selectedIcon1], { fontSize: 'small' }) : null}
                    color={badgeIntent !== 'default' ? badgeIntent.toLowerCase() : undefined}
                    size={chipSize || 'small'}
                    variant={chipVariant || 'outlined'}
                />
                <Typography variant="body2" sx={{ mt: 1 }}>{description || '(No Description)'}</Typography>
            </Box>
        </Stack>
    );
}
