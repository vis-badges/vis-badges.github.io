import React from 'react';
import {
    Box,
    Grid,
    Card,
    CardContent,
    Typography,
    Divider,
} from '@mui/material';
import BinaryBadge from "../components/BinaryBadge";
import OrdinalBadge from "../components/OrdinalBadge";
import CategoricalBadge from "../components/CategoricalBadge";
import QuantitativeBadge from "../components/QuantitativeBadge";

// ----------------------------------------------------------------------------
// Example badge data (kept for future use – do not remove)
// ----------------------------------------------------------------------------
/*
const examples = {
  binary: [...],
  ordinal: [...],
  categorical: [...],
  list: [...],
  quantitative: [...],
  score: [...],
};
*/

// ----------------------------------------------------------------------------
// Helper – reusable genre card component
// ----------------------------------------------------------------------------
function GenreCard({ title, definition }) {
    // Render the genre name itself as a neutral badge header.
    const headerBadge = {
        label: title.replace(' Badges', ''),
        intent: 'information',
        type: 'context',
    };

    return (
        <Grid item xs={12} md={6}>
            <Card elevation={2} sx={{ height: '100%' }}>
                <CardContent>
                    {/* Header rendered as a badge */}
                    <BinaryBadge badge={headerBadge} size="medium" variant="outlined" chipColor="default" />

                    {/* Definition from the VIS 2025 paper */}
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                        {definition}
                    </Typography>

                    {/* Example rendering has been commented out for now – keep for later */}
                    {/**
                     <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                     {examples?.map((ex, idx) => (
                     <SomeBadgeComponent key={idx} badge={ex} />
                     ))}
                     </Stack>
                     **/}
                </CardContent>
            </Card>
        </Grid>
    );
}

export default function Genres() {
    return (
        <Box sx={{ px: { xs: 2, md: 4 }, py: { xs: 3, md: 5 } }}>
            <Grid container spacing={4}>
                {/* ---------------- Binary / Mono ---------------- */}
                <GenreCard
                    title="Binary Badges"
                    definition="Mono badges or binary badges are the simplest form of a visualization badge, consisting of only a badge label, such as Colorblind Safe. This genre has no attribute and is only applied if the respective information is intended to be disclosed or not. The absence of a specific mono badge does not imply the opposite to be true but may indicate that the author did not consider the badge relevant or simply did not think of it."/>

                {/* ---------------- Ordinal ---------------- */}
                <GenreCard
                    title="Ordinal Badges"
                    definition="Ordinal badges can appear to different degrees, for example yes/no or full/partial/none. Each attribute can change the badge’s overall intent. For instance, an ordinal badge Data Source Currency (Up‑to‑date, Slightly Outdated, Outdated) sets a clear ordered scale. Unlike mono badges, ordinal badges imply consistent use across visualizations by explicitly stating the (in)existence or degree of a feature."/>

                {/* ---------------- Categorical ---------------- */}
                <GenreCard
                    title="Categorical Badges"
                    definition="Categorical badges, unlike ordinal badges, can have multiple states or attributes without implying any order or changing intent. For instance, a badge Visualization: Public Domain/Creative Commons might indicate different licensing types. Such badges let authors specify relevant categories rather than a progression or scale."/>

                {/* ---------------- List ---------------- */}
                <GenreCard
                    title="List Badges"
                    definition="List badges can be best thought of as semantic badge groups. While categorical badges show a single attribute, list badges can contain multiple valid values. For example, Interaction [Hover, Brush, Zoom] displays the available interaction affordances."/>

                {/* ---------------- Quantitative ---------------- */}
                <GenreCard
                    title="Quantitative Badges"
                    definition="Numerical badges display a single attribute as a numeric value or quantity, for example Missing Data: 5 % or Update‑Frequency: 7 days. A visualization author can adjust this value for each visualization as needed."/>

                {/* ---------------- Score ---------------- */}
                <GenreCard
                    title="Score Badges"
                    definition="Score badges are a hybrid of numerical, ordinal, and list badges. They reflect how many predefined attributes (out of a specified total) apply, for example 3/7 (three out of seven)."/>
            </Grid>

        </Box>
    );
}
