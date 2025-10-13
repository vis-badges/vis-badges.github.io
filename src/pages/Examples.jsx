import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Stack,
    Button,
    List,
    ListItem,
} from '@mui/material';
import GetAppIcon from '@mui/icons-material/GetApp';

// -----------------------------------------------------------------------------
// Badge‑usage case studies (verbatim reasoning text; no paper‑internal refs)
// -----------------------------------------------------------------------------


const cases = [
    {
        key: 'peace',
        title: 'Peace Visualization – Messy Timeline',
        pdf: '/1-peace-visualization-messy-timeline.pdf',
        paragraph:
            'The Messy timeline was designed to illustrate how peace processes were shaped and progressed as peace agreements were signed in different stages. The visualization intends to break assumptions that “peace negotiations progress from one stage to the next” while the messy reality is they go back and forth or even face abrupt intervals. During workshops, the following popular badges were selected by participants with rationales provided, some in participants quotes.',
        bullets: [
            'Technical Termininology: “Users may not be aware of the definitions of the terminology used, or why the order of these stages matter in this visualisation.”[P13]',
            'Overlapping Elements: On one hand, this badge “let the audience know this is an intentional design decision, to show how messy peace processes are”[P3] while on the other hand we place all recorded peace processes in the database the overlaps are inevitable.',
            'Mind False Conclusions: “As intention with visualization is to break assumptions of how the trajectory of processes are in reality, we do not want users to look at a process they think is ‘successful’, and draw conclusions that this trajectory results in a successful process.”[P14]',
            'Can Sort & Filter: The filtering feature provided by a dropdown list is placed on top‑right corner of the screen which may not be obvious for new users.',
            'Open Data: The underlying data is both openly accessible and provided by the same peace and conflict research group.',
        ],
    },
    {
        key: 'cobens',
        title: 'Co‑Benefit Atlas – Local Area Report',
        pdf: '/2-co-benefits-local-report.pdf',
        paragraph:
            'In this visualization atlas collaboration where we communicate a series of co‑benefits data gained from reducing CO₂ emissions and reaching net‑zero goals by 2050. A local area report contains comprehensive charts on regional information ranging from co‑benefit values in different transitioning pathways, distribution of co‑benefits across smaller data zones, and impacts on different types of households. These are some of the badges discussed during the workshops that apply to the entire page and should be aggregated:',
        bullets: [
            'Contains Modeled Data: The co‑benefit values are predictions output created by a supercomputer model from 2025 to 2050. There cannot be exact promised benefits.',
            'Aggregated Data: Co‑benefit values are calculated on granular small data zones and then aggregated for the entire local area.',
            'Open Data: The research outputs will be openly accessible to public audiences.',
            'Dataset Linked: There is linked dataset that feeds into this specific local area available.',
            'Major Finding and Qualitative Categories badges accompany specific charts describing household characteristics with ordinal numbers.',
        ],
    },
    {
        key: 'nasa',
        title: 'Greenhouse Gases Hyperwall Dashboard',
        pdf: '/3-nasa-hyperwall-dashboard.pdf',
        paragraph:
            'The NASA hyperwall dashboards are high‑resolution dashboard videos dedicated to large exhibitions. Visitors stand in front of the wall to read the visualizations, which leads to the selected badges placed inside the visualization near the title section. We adopted dark‑mode badge styles to match the tone of the dashboards. The example dashboard depicts the modeled flow of greenhouse gases from space, air, and ground. Participants selected the following examples:',
        bullets: [
            'Contains Modeled Data: These visualizations use modeled data (e.g., GEOS).',
            'For General Audience: They are frequently used in exhibitions, scientific storytelling, and educational settings.',
            'Multiple Data Sources: Data comes from NASA and its partner agencies.',
            'Adapted Elsewhere: The hyperwall is listed in a digital library and is free for affiliated members to adapt and tell their own stories.',
            'Data Creator(s) Attributed: The original data contributors are credited.',
        ],
    },
];

const PdfViewer = ({ src }) => (
    <Box
        component="iframe"
        src={src}
        sx={{ width: '100%', height: { xs: 420, md: 600 }, border: 0, mt: 2 }}
        title="PDF preview"
    />
);

export default function Examples() {
    return (
        <Box sx={{ px: { xs: 2, md: 4 }, py: { xs: 3, md: 5 } }}>

            <Stack spacing={4} mt={2}>
                {cases.map(({ key, title, pdf, paragraph, bullets }) => (
                    <Card key={key} elevation={2}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                {title}
                            </Typography>

                            <Typography variant="body2" paragraph>
                                {paragraph}
                            </Typography>

                            <List dense sx={{ pl: 2 }}>
                                {bullets.map((b, i) => (
                                    <ListItem key={i} sx={{ display: 'list-item', py: 0 }}>
                                        <Typography variant="body2">{b}</Typography>
                                    </ListItem>
                                ))}
                            </List>

                            <Button variant="outlined" startIcon={<GetAppIcon />} href={pdf} download sx={{ mt: 1 }}>
                                Download PDF
                            </Button>

                            <PdfViewer src={pdf} />
                        </CardContent>
                    </Card>
                ))}
            </Stack>
        </Box>
    );
}
