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
} from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { BinaryBadge, OrdinalBadge, CategoricalBadge, QuantitativeBadge } from 'vis-badges-react';
import { mapIntentToColor } from '../components/utils/badgeUtils';

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
    // Icons disabled in the Submit UI; always hidden in preview

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

    const badgeProps = { size, variant, leftIconKey: 'none', rightIconKey: 'none' };

    const effectiveChipColor = useMemo(() => mapIntentToColor(intent), [intent]);

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
    }, [badgeType, previewBadge, size, variant, effectiveChipColor]);

    const handleSubmit = async () => {
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
            <Grid container spacing={2} alignItems="stretch">
                <Grid item xs={12} md={7}>
                    <Paper variant="outlined" sx={{ p: 1.5 }}>
                        <Stack spacing={1.5}>
                            {/* Order: Badge Type -> Label -> Description -> Intent | Scope */}
                            <FormControl fullWidth size="small">
                                <InputLabel>Badge Type</InputLabel>
                                <Select label="Badge Type" value={badgeType} onChange={(e) => setBadgeType(e.target.value)}>
                                    {BADGE_TYPES.map((t) => (
                                        <MenuItem key={t} value={t}>{t}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            <TextField size="small" label="Badge Label" value={label} onChange={(e) => setLabel(e.target.value)} fullWidth />
                            <TextField size="small" label="Badge Description" value={description} onChange={(e) => setDescription(e.target.value)} fullWidth multiline minRows={2} sx={{ '& .MuiInputBase-root': { pl: 1 } }} />

                            <Grid container spacing={2}>
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
                                <TextField size="small" label="Value (e.g., Up-to-date)" value={ordinalValue} onChange={(e) => setOrdinalValue(e.target.value)} fullWidth />
                            )}

                            {badgeType === 'QUANTITATIVE' && (
                                <Grid container spacing={2}>
                                    <Grid item xs={8}>
                                        <TextField size="small" type="number" label="Value" value={quantValue} onChange={(e) => setQuantValue(Number(e.target.value))} fullWidth />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField size="small" label="Unit" value={quantUnit} onChange={(e) => setQuantUnit(e.target.value)} fullWidth />
                                    </Grid>
                                </Grid>
                            )}

                            {badgeType === 'CATEGORICAL' && (
                                <Box>
                                    <Stack direction="row" spacing={1} alignItems="center">
                                        <TextField label="Add value" value={categoryInput} onChange={(e) => setCategoryInput(e.target.value)} size="small" fullWidth />
                                        <IconButton color="primary" onClick={addCategory} aria-label="add value"><AddIcon /></IconButton>
                                    </Stack>
                                    <Box sx={{ mt: 1, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                                        {categories.map((cat) => (
                                            <Chip key={cat} label={cat} onDelete={() => removeCategory(cat)} deleteIcon={<DeleteIcon />} />
                                        ))}
                                    </Box>
                                </Box>
                            )}

                            <Divider sx={{ my: 0.5 }} />

                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={4}>
                                    <FormControl fullWidth size="small">
                                        <InputLabel>Size</InputLabel>
                                        <Select label="Size" value={size} onChange={(e) => setSize(e.target.value)}>
                                            {CHIP_SIZES.map((s) => (
                                                <MenuItem key={s} value={s}>{s}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <FormControl fullWidth size="small">
                                        <InputLabel>Variant</InputLabel>
                                        <Select label="Variant" value={variant} onChange={(e) => setVariant(e.target.value)}>
                                            {CHIP_VARIANTS.map((v) => (
                                                <MenuItem key={v} value={v}>{v}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>

                            {/* Icon configuration removed per request */}
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <Button onClick={handleSubmit} disabled={submitting} variant="contained" size="small">
                                    {submitting ? 'Submitting…' : 'Submit'}
                                </Button>
                            </Box>
                        </Stack>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={5}>
                    <Paper variant="outlined" sx={{ p: 2, height: '100%', background: (theme) => theme.palette.mode === 'light' ? 'linear-gradient(180deg, #fff 0%, #fafafa 100%)' : 'linear-gradient(180deg, #121212 0%, #0f0f0f 100%)', borderColor: (theme) => theme.palette.primary.light }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                            <Chip color="primary" size="small" label="Live Preview" />
                            <Tooltip title="Color follows Intent" placement="left">
                                <Chip size="small" label={effectiveChipColor} variant="outlined" />
                            </Tooltip>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 160 }}>
                            {preview}
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


