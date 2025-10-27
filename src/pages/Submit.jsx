import React, { useMemo, useState } from 'react';
import {
    Box,
    Container,
    Divider,
    Grid,
    Paper,
    Stack,
    TextField,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    Chip,
    IconButton,
    Typography,
    FormHelperText,
} from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import { BinaryBadge, OrdinalBadge, CategoricalBadge, QuantitativeBadge } from 'vis-badges-react';
import { mapIntentToColor } from '../components/utils/badgeUtils';
import BadgeDesignControls from '../components/BadgeDesignControls';

const INTENTS = ['INFORMATION', 'CONFIRMATION', 'WARNING'];
const SCOPES = ['VISUAL ENCODING', 'INTERACTION', 'ANALYSIS', 'DATA', 'CONTEXT'];
const BADGE_TYPES = ['BINARY', 'ORDINAL', 'CATEGORICAL', 'QUANTITATIVE'];
const CHIP_SIZES = ['small', 'medium', 'large'];
const CHIP_VARIANTS = ['filled', 'outlined'];
// Icons are not configurable on this page; always hidden

export default function Submit() {
    const [label, setLabel] = useState('Open Data');
    const [description, setDescription] = useState('Data are openly available.');
    const [intent, setIntent] = useState('INFORMATION');
    const [scope, setScope] = useState('CONTEXT');
    const [badgeType, setBadgeType] = useState('BINARY');

    // Categorical values
    const [categoryInput, setCategoryInput] = useState('');
    const [categories, setCategories] = useState(['CC-BY 4.0']);

    // Ordinal value
    const [ordinalValue, setOrdinalValue] = useState('Up-to-date');

    // Quantitative value
    const [quantValue, setQuantValue] = useState(5);
    const [quantUnit, setQuantUnit] = useState('%');

    // Visual controls
    const [size, setSize] = useState('medium');
    const [variant, setVariant] = useState('filled');
    const [colorMode, setColorMode] = useState('intent'); // 'intent' | 'standard'
    const [muiColor, setMuiColor] = useState('default'); // default | primary | ...
    const [leftIconKey, setLeftIconKey] = useState('none'); // 'iconIntent' | 'iconScope' | 'none'
    const [rightIconKey, setRightIconKey] = useState('none');

    const addCategory = () => {
        const trimmed = categoryInput.trim();
        if (!trimmed) return;
        setCategories((prev) => (prev.includes(trimmed) ? prev : [...prev, trimmed]));
        setCategoryInput('');
    };

    const removeCategory = (value) => {
        setCategories((prev) => prev.filter((v) => v !== value));
    };

    // Submission UI state
    const [submitting, setSubmitting] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMsg, setSnackbarMsg] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');

    const closeSnackbar = () => setSnackbarOpen(false);

    const previewBadge = useMemo(() => {
        const base = {
            label,
            description,
            intent,
            type: scope,
            badgeType,
        };

        switch (badgeType) {
            case 'ORDINAL':
                return { ...base, value: ordinalValue };
            case 'QUANTITATIVE':
                return { ...base, value: quantValue, unit: quantUnit };
            case 'CATEGORICAL':
                return { ...base, values: categories.map((c) => ({ label: c })) };
            default:
                return base;
        }
    }, [badgeType, categories, description, intent, label, quantUnit, quantValue, ordinalValue, scope]);

    // Compute chip color from either intent or explicit MUI color
    const effectiveChipColor = useMemo(() => {
        return colorMode === 'intent' ? mapIntentToColor(intent) : muiColor;
    }, [colorMode, intent, muiColor]);

    const badgeProps = { size, variant, leftIconKey, rightIconKey };

    const preview = useMemo(() => {
        switch (badgeType) {
            case 'ORDINAL':
                return <OrdinalBadge badge={previewBadge} {...badgeProps} chipColor={effectiveChipColor} />;
            case 'QUANTITATIVE':
                return <QuantitativeBadge badge={previewBadge} {...badgeProps} chipColor={effectiveChipColor} />;
            case 'CATEGORICAL':
                return <CategoricalBadge badge={previewBadge} {...badgeProps} chipColor={effectiveChipColor} />;
            default:
                return <BinaryBadge badge={previewBadge} {...badgeProps} chipColor={effectiveChipColor} />;
        }
    }, [badgeType, previewBadge, size, variant, effectiveChipColor, leftIconKey, rightIconKey]);

    const isLabelError = label.trim() === '';
    const isDescriptionError = description.trim() === '';
    const isOrdinalError = badgeType === 'ORDINAL' && ordinalValue.trim() === '';
    const isQuantValueError = badgeType === 'QUANTITATIVE' && (quantValue === '' || Number.isNaN(Number(quantValue)));
    const isCategoricalError = badgeType === 'CATEGORICAL' && categories.length === 0;
    const isInvalid = isLabelError || isDescriptionError || isOrdinalError || isQuantValueError || isCategoricalError;

    const resetForm = () => {
        setBadgeType('BINARY');
        setLabel('Open Data');
        setDescription('Data are openly available.');
        setIntent('INFORMATION');
        setScope('CONTEXT');
        setOrdinalValue('Up-to-date');
        setQuantValue(5);
        setQuantUnit('%');
        setCategories(['CC-BY 4.0']);
        setCategoryInput('');
        setSize('medium');
        setVariant('filled');
    };

    const handleSubmit = async () => {
        if (isInvalid) {
            setSnackbarSeverity('error');
            setSnackbarMsg('Please complete the required fields before submitting.');
            setSnackbarOpen(true);
            return;
        }
        setSubmitting(true);
        try {
            const payload = {
                label,
                description,
                intent,
                scope,
                badgeType,
                ordinalValue: badgeType === 'ORDINAL' ? ordinalValue : undefined,
                quantitative: badgeType === 'QUANTITATIVE' ? { value: quantValue, unit: quantUnit } : undefined,
                categories: badgeType === 'CATEGORICAL' ? categories : undefined,
                ui: {
                    size,
                    variant,
                    colorMode,
                    muiColor,
                    leftIconKey,
                },
            };

            const endpoint = process.env.REACT_APP_FORM_ENDPOINT;
            const mode = process.env.REACT_APP_SUBMIT_MODE || (endpoint ? 'formspree' : 'github');

            if (mode === 'formspree' && endpoint) {
                const res = await fetch(endpoint, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload),
                });
                if (!res.ok) throw new Error(`Submit failed (${res.status})`);
                setSnackbarSeverity('success');
                setSnackbarMsg('Thank you for submitting! We will review your badge.');
                setSnackbarOpen(true);
            } else {
                // Fallback: open a prefilled GitHub issue
                const title = encodeURIComponent(`Badge: ${label}`);
                const bodyLines = [
                    `Label: ${label}`,
                    `Description: ${description}`,
                    `Type: ${badgeType}`,
                    `Intent: ${intent}`,
                    `Scope: ${scope}`,
                    `UI: size=${size}, variant=${variant}, colorMode=${colorMode}, muiColor=${muiColor}, leftIconKey=${leftIconKey}`,
                ];
                if (badgeType === 'ORDINAL') bodyLines.push(`Value: ${ordinalValue}`);
                if (badgeType === 'QUANTITATIVE') bodyLines.push(`Value: ${quantValue} ${quantUnit}`);
                if (badgeType === 'CATEGORICAL') bodyLines.push(`Values: ${categories.join(', ')}`);
                const body = encodeURIComponent(bodyLines.join('\n'));
                const url = `https://github.com/vis-badges/vis-badges.github.io/issues/new?title=${title}&body=${body}`;
                window.open(url, '_blank', 'noopener,noreferrer');
                setSnackbarSeverity('info');
                setSnackbarMsg('Opened a GitHub issue with your submission. Thank you!');
                setSnackbarOpen(true);
            }
        } catch (e) {
            setSnackbarSeverity('error');
            setSnackbarMsg('Submission failed. Please try again later.');
            setSnackbarOpen(true);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
        <Container maxWidth="md" sx={{ py: 2 }}>
            <Box sx={{ mb: 2 }}>
                <Typography variant="h5" sx={{ fontWeight: 600 }}>Submit a Badge</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                    Fill in the badge details, choose the genre-specific options, preview your badge, and submit. Required fields are marked.
                </Typography>
            </Box>
            <Grid container spacing={2} alignItems="stretch">
                <Grid item xs={12} md={7}>
                    <Paper variant="outlined" sx={{ p: 1.5 }}>
                        <Stack spacing={1.5}>
                            {/* Heading removed per request */}
                            {/* Order: Badge Type -> Label -> Description -> Intent | Scope */}
                            <FormControl fullWidth size="small">
                                <InputLabel>Badge Type</InputLabel>
                                <Select label="Badge Type" value={badgeType} onChange={(e) => setBadgeType(e.target.value)}>
                                    {BADGE_TYPES.map((t) => (
                                        <MenuItem key={t} value={t}>{t}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            <FormControl fullWidth size="small" error={isLabelError}>
                                <TextField size="small" required label="Badge Label" value={label} onChange={(e) => setLabel(e.target.value)} fullWidth />
                                {isLabelError && <FormHelperText>Label is required.</FormHelperText>}
                            </FormControl>
                            <FormControl fullWidth size="small" error={isDescriptionError}>
                                <TextField size="small" required label="Badge Description" value={description} onChange={(e) => setDescription(e.target.value)} fullWidth multiline minRows={2} placeholder="Concise description that clarifies the badge" />
                                {isDescriptionError && <FormHelperText>Description is required.</FormHelperText>}
                            </FormControl>

                            <Grid container spacing={1} sx={{ ml: { xs: -0.5, sm: -1 } }}>
                                <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth size="small">
                                        <InputLabel>Intent</InputLabel>
                                        <Select label="Intent" value={intent} onChange={(e) => setIntent(e.target.value)}>
                                            {INTENTS.map((i) => (
                                                <MenuItem key={i} value={i}>{i}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth size="small">
                                        <InputLabel>Scope</InputLabel>
                                        <Select label="Scope" value={scope} onChange={(e) => setScope(e.target.value)}>
                                            {SCOPES.map((s) => (
                                                <MenuItem key={s} value={s}>{s}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>

                            {badgeType === 'ORDINAL' && (
                                <FormControl fullWidth size="small" error={isOrdinalError}>
                                    <TextField size="small" required label="Value (e.g., Up-to-date)" value={ordinalValue} onChange={(e) => setOrdinalValue(e.target.value)} fullWidth />
                                    {isOrdinalError && <FormHelperText>Value is required for ordinal badges.</FormHelperText>}
                                </FormControl>
                            )}

                            {badgeType === 'QUANTITATIVE' && (
                                <Grid container spacing={2}>
                                    <Grid item xs={8}>
                                        <FormControl fullWidth size="small" error={isQuantValueError}>
                                            <TextField size="small" type="number" required label="Value" value={quantValue} onChange={(e) => setQuantValue(Number(e.target.value))} fullWidth />
                                            {isQuantValueError && <FormHelperText>Enter a numeric value.</FormHelperText>}
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField size="small" label="Unit" value={quantUnit} onChange={(e) => setQuantUnit(e.target.value)} fullWidth />
                                    </Grid>
                                </Grid>
                            )}

                            {badgeType === 'CATEGORICAL' && (
                                <Box>
                                    <FormControl fullWidth size="small" error={isCategoricalError}>
                                        <Stack direction="row" spacing={1} alignItems="center">
                                            <TextField label="Add value" value={categoryInput} onChange={(e) => setCategoryInput(e.target.value)} size="small" fullWidth />
                                            <IconButton color="primary" onClick={addCategory} aria-label="add value"><AddIcon /></IconButton>
                                        </Stack>
                                        {isCategoricalError && <FormHelperText sx={{ mt: 0.5 }}>Add at least one value.</FormHelperText>}
                                    </FormControl>
                                    <Box sx={{ mt: 1, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                                        {categories.map((cat) => (
                                            <Chip key={cat} label={cat} onDelete={() => removeCategory(cat)} deleteIcon={<DeleteIcon />} />
                                        ))}
                                    </Box>
                                </Box>
                            )}

                            <Divider sx={{ my: 0.5 }} />

                            {/* Appearance controls to match catalog */}
                            <BadgeDesignControls
                                chipSize={size}
                                setChipSize={setSize}
                                chipVariant={variant}
                                setChipVariant={setVariant}
                                colorMode={colorMode}
                                setColorMode={setColorMode}
                                muiColor={muiColor}
                                setMuiColor={setMuiColor}
                                leftIconKey={leftIconKey}
                                setLeftIconKey={setLeftIconKey}
                                rightIconKey={rightIconKey}
                                setRightIconKey={setRightIconKey}
                                showReset={false}
                            />
                            <Divider sx={{ my: 0.5 }} />
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                    <Tooltip title="Your submission will open a pre-filled GitHub issue in a new tab">
                                        <IconButton size="small" aria-label="Submission info">
                                            <InfoOutlined fontSize="small" />
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    <Button onClick={resetForm} disabled={submitting} variant="text" size="small">Reset</Button>
                                    <Button onClick={handleSubmit} disabled={submitting || isInvalid} variant="contained" size="small">
                                    {submitting ? 'Submitting…' : 'Submit'}
                                    </Button>
                                </Box>
                            </Box>
                        </Stack>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={5}>
                    <Paper variant="outlined" sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ mb: 1 }}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Live preview</Typography>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 220, flexGrow: 1 }}>
                            <Box sx={{
                                transform: { xs: 'scale(1.1)', sm: 'scale(1.2)', md: 'scale(1.3)' },
                                transformOrigin: 'center',
                            }}>
                                {preview}
                            </Box>
                        </Box>
                        <Box sx={{ mt: 1, pt: 1, borderTop: '1px solid', borderColor: 'divider' }}>
                            <Typography variant="caption" color="text.secondary">
                                Type: {badgeType} · Intent: {intent} · Scope: {scope} · Size: {size} · Style: {variant} · Pictogram: {leftIconKey === 'none' ? 'None' : (leftIconKey === 'iconIntent' ? 'Intent' : 'Scope')}
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
        <Snackbar open={snackbarOpen} autoHideDuration={3500} onClose={closeSnackbar} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
            <Alert onClose={closeSnackbar} severity={snackbarSeverity} variant="filled" sx={{ width: '100%' }}>
                {snackbarMsg}
            </Alert>
        </Snackbar>
        </>
    );
}


