import React from 'react';
import { Box, Grid, Card, CardContent, Typography, Stack, Chip } from '@mui/material';
import { CheckCircleOutline, InfoOutlined, WarningAmber } from '@mui/icons-material';
import { BinaryBadge } from 'vis-badges-react';

function GenreCard({ title, definition }) {
    const headerBadge = {
        label: title.replace(' Badges', ''),
        intent: 'information',
        type: 'context',
    };

    return (
        <Grid item xs={12} md={6}>
            <Card elevation={2} sx={{ height: '100%' }}>
                <CardContent>
                    <BinaryBadge badge={headerBadge} size="medium" variant="outlined" chipColor="default" />
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                        {definition}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default function System() {
    return (
        <Box sx={{ px: { xs: 2, md: 4 }, py: { xs: 3, md: 5 } }}>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Typography variant="h5">Intent</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body2" color="text.secondary">
                        The intent of a visualization badge specifies the interpretative stance (or purpose) of the badge. During our coding and co-design processes, we found that the collected badges naturally aligned on three core interpretative stances (positive, neutral, warning), leading us to settle on three instances for badge intent:
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ mt: 1 }} useFlexGap flexWrap="wrap">
                        <Chip size="small" variant="outlined" icon={<CheckCircleOutline sx={{ color: 'success.main' }} fontSize="small" />} label="Positive" />
                        <Chip size="small" variant="outlined" icon={<InfoOutlined sx={{ color: 'info.main' }} fontSize="small" />} label="Neutral" />
                        <Chip size="small" variant="outlined" icon={<WarningAmber sx={{ color: 'warning.main' }} fontSize="small" />} label="Warning" />
                    </Stack>
                    <Box
                        component="img"
                        src="/intent.png"
                        alt="Visualization badge intent overview"
                        sx={{
                            display: 'block',
                            mt: 2,
                            maxWidth: 720,
                            height: 'auto',
                            borderRadius: 1,
                        }}
                    />
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block', textAlign: 'left', mt: 1 }}>
                        Three intent stances
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="h5">Genres</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body2" color="text.secondary">
                        We identified six badge genres, each implying a slightly different way of structuring or presenting the underlying information.
                    </Typography>
                    <Box
                        component="img"
                        src="/genre.png"
                        alt="Visualization badge genres overview"
                        sx={{
                            display: 'block',
                            mt: 1,
                            maxWidth: '100%',
                            height: 'auto',
                            borderRadius: 1,
                        }}
                    />
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block', textAlign: 'left', mt: 1 }}>
                        Badge genres overview
                    </Typography>
                </Grid>

                <GenreCard
                    title="Binary Badges"
                    definition="Mono badges or binary badges are the simplest form of a visualization badge, consisting of only a badge label, such as Colorblind Safe. This genre has no attribute and is only applied if the respective information is intended to be disclosed or not. The absence of a specific mono badge does not imply the opposite to be true but may indicate that the author did not consider the badge relevant or simply did not think of it."/>

                <GenreCard
                    title="Ordinal Badges"
                    definition="Ordinal badges can appear to different degrees, for example yes/no or full/partial/none. Each attribute can change the badge’s overall intent. For instance, an ordinal badge Data Source Currency (Up‑to‑date, Slightly Outdated, Outdated) sets a clear ordered scale. Unlike mono badges, ordinal badges imply consistent use across visualizations by explicitly stating the (in)existence or degree of a feature."/>

                <GenreCard
                    title="Categorical Badges"
                    definition="Categorical badges, unlike ordinal badges, can have multiple states or attributes without implying any order or changing intent. For instance, a badge Visualization: Public Domain/Creative Commons might indicate different licensing types. Such badges let authors specify relevant categories rather than a progression or scale."/>

                <GenreCard
                    title="List Badges"
                    definition="List badges can be best thought of as semantic badge groups. While categorical badges show a single attribute, list badges can contain multiple valid values. For example, Interaction [Hover, Brush, Zoom] displays the available interaction affordances."/>

                <GenreCard
                    title="Quantitative Badges"
                    definition="Numerical badges display a single attribute as a numeric value or quantity, for example Missing Data: 5 % or Update‑Frequency: 7 days. A visualization author can adjust this value for each visualization as needed."/>

                <GenreCard
                    title="Score Badges"
                    definition="Score badges are a hybrid of numerical, ordinal, and list badges. They reflect how many predefined attributes (out of a specified total) apply, for example 3/7 (three out of seven)."/>

                <Grid item xs={12}>
                    <Typography variant="h5">Scope</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body2" color="text.secondary">
                        In addition to intents and genres, we identified a set of scopes to group the badges roughly by different stages of the visualization creation process from data collection to interactive exploration.
                    </Typography>
                    <Box
                        component="img"
                        src="/scope.png"
                        alt="Visualization badge scopes overview"
                        sx={{
                            display: 'block',
                            mt: 2,
                            maxWidth: 960,
                            height: 'auto',
                            borderRadius: 1,
                        }}
                    />
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block', textAlign: 'left', mt: 1 }}>
                        Badge scopes overview
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}


