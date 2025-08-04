import React from 'react';
import {
    Box,
    Stepper,
    Step,
    StepLabel,
    StepContent,
    Paper,
    Typography,
} from '@mui/material';

/**
 * Step‑by‑step guidelines for applying visualization badges.
 * Exact wording copied from Edelsbrunner et al. (2025) Section 7.2.
 */
const steps = [
    {
        label: 'Analysis and visualization design',
        description:
            'Before applying any badges, consider all the visualization design and data processing decisions involved. The badge catalog can serve as a checklist. If a design decision cannot be adequately defended (e.g., through the description of a badge), then design revision should be considered. Note down each decision and its rationale, perhaps in a table.',
    },
    {
        label: 'Collect badge labels',
        description:
            'Then, repeat this process for all visualizations in a project to create a project‑specific list of badges. The catalog can help inspire badge labels. Do not be afraid of including duplicates into the list or badges that look close but are not the same. For each badge, write a clear description that explains what it covers.',
    },
    {
        label: 'Create badges and badge genres',
        description:
            'Resolve any ambiguities from this list and define clear badge labels and genres. Exclusive badges or badges with nuances can become ORDINAL badges; badge labels pointing to multiple options can become CATEGORICAL or LIST badges; SCORE badges require a predefined scoring system and are the most challenging to create. Refine badge descriptions to express more clearly the final badge label. Badge labels should be as short as possible (ideally 2‑3 words) and use terminology known by the audience or standard in a given field.',
    },
    {
        label: 'Assign intents, scopes, and topics',
        description:
            'Clarify how each badge is used. If you cannot clearly assign an intent for all uses, consider either listing multiple intents or duplicating the badge.',
    },
    {
        label: 'Store badges',
        description:
            'Badges, alongside their attributes and descriptions, should be stored in a central repository, such as a code book, accessible to anyone potentially applying them to their visualizations. In more technical settings badges could be pulled out of a database and rendered alongside a visualization.',
    },
    {
        label: 'Assign badges to visualizations',
        description:
            'Generally, the number of badges per visualization should be kept low. Ideally, a visualization team creates prioritization guidelines to help decide which badges to show in which situations. Prioritization can happen on a global level (e.g., prioritizing data quality badges) or individually for each visualization, depending on the context.',
    },
    {
        label: 'Design badge system',
        description:
            'If not using our standard design, choose a color scheme, backdrop style, and pictograms, if desired. Otherwise, match design decisions like mode, placement, and visual design with badge priorities.',
    },
    {
        label: 'Place badges',
        description:
            'Badges with high priority should be rendered in salient designs (colored, LABEL, FULL); lower‑priority badges can be aggregated. We suggest grouping badges according to their scope or topic. Badges relevant to the entire project can be placed at the top or bottom of a page.',
    },
    {
        label: 'Refine',
        description:
            'Once badges are published alongside a visualization, obtain feedback from actual readers — either in a dedicated study or by observing real users. Refine badge labels, descriptions, and design decisions to minimize misinterpretation.',
    },
];

export default function Guidelines() {
    return (
        <Box sx={{ px: { xs: 2, md: 4 }, py: { xs: 3, md: 5 } }}>
            <Stepper orientation="vertical" nonLinear={false}>
                {steps.map((step, index) => (
                    <Step key={index} active>
                        <StepLabel>
                            <Typography variant="subtitle1" fontWeight={600}>
                                {step.label}
                            </Typography>
                        </StepLabel>
                        <StepContent>
                            <Typography variant="body2" color="text.secondary" pb={2}>
                                {step.description}
                            </Typography>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}
