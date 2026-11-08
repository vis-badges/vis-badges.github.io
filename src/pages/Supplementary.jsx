import React from 'react';
import {
    Box,
    Typography,
    Card,
    CardContent,
    Container,
    Grid2
} from '@mui/material';
import { Description, FolderZip } from '@mui/icons-material';

const NewPill = () => (
    <Box
        component="span"
        sx={{
            px: 0.75,
            py: 0.15,
            borderRadius: 999,
            border: '1px solid',
            borderColor: 'divider',
            bgcolor: 'background.paper',
            color: 'text.secondary',
            fontSize: '0.62rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            lineHeight: 1.5,
            whiteSpace: 'nowrap',
        }}
    >
        NEW
    </Box>
);

export default function Supplementary() {
    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Box sx={{ mb: 2 }}>
                <Typography variant="h6" component="h2" sx={{ fontWeight: 600, mb: 2 }}>
                    Downloads
                </Typography>
                <Grid2 container spacing={2}>
                    <Grid2 item xs={12} sm={6} md={4}>
                        <Card
                            sx={{
                                height: '100%',
                            }}
                        >
                            <CardContent sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                                <Box
                                    component="a"
                                    href="/vis-badges-suppl-material.zip"
                                    download
                                    sx={{ display: 'flex', alignItems: 'center', gap: 2, textDecoration: 'none', color: 'inherit' }}
                                >
                                    <FolderZip sx={{ fontSize: 24, color: 'primary.main' }} />
                                    <Box>
                                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                                            Download Visualization Badges supplementary materials
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            ZIP format
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box
                                    component="a"
                                    href="/visualization-badges.pdf"
                                    download
                                    sx={{ display: 'flex', alignItems: 'center', gap: 2, textDecoration: 'none', color: 'inherit' }}
                                >
                                    <Description sx={{ fontSize: 24, color: 'primary.main' }} />
                                    <Box>
                                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                            Download Visualization Badges paper
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            PDF format
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid2>

                    <Grid2 item xs={12} sm={6} md={4}>
                        <Card
                            sx={{
                                height: '100%',
                            }}
                        >
                            <CardContent sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                                <Box
                                    component="a"
                                    href="/mind-the-badge-supplementary-material.zip"
                                    download
                                    sx={{ display: 'flex', alignItems: 'center', gap: 2, textDecoration: 'none', color: 'inherit' }}
                                >
                                    <FolderZip sx={{ fontSize: 24, color: 'primary.main' }} />
                                    <Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5, flexWrap: 'wrap' }}>
                                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                                Download Mind the Badge supplementary materials
                                            </Typography>
                                            <NewPill />
                                        </Box>
                                        <Typography variant="body2" color="text.secondary">
                                            ZIP format
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box
                                    component="a"
                                    href="/mind-the-badge.pdf"
                                    download
                                    sx={{ display: 'flex', alignItems: 'center', gap: 2, textDecoration: 'none', color: 'inherit' }}
                                >
                                    <Description sx={{ fontSize: 24, color: 'primary.main' }} />
                                    <Box>
                                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                            Download Mind the Badge paper
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            PDF format
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid2>
                </Grid2>
            </Box>

            <Box sx={{ mt: 4 }}>
                <Typography variant="h6" component="h2" sx={{ fontWeight: 600, mb: 2 }}>
                    Citation: Visualization Badges: Communicating Design and Provenance through Graphical Labels Alongside Visualizations
                </Typography>
                <Card sx={{ p: 2, mb: 3 }}>
                    <Box component="pre" sx={{ m: 0, p: 1.5, bgcolor: 'grey.50', borderRadius: 1, border: '1px solid', borderColor: 'divider', fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: 1.4, overflow: 'auto' }}>
                        {`@article{edelsbrunner2026visualization,
  title={Visualization Badges: Communicating Design and Provenance through Graphical Labels Alongside Visualizations},
  author={Edelsbrunner, Valentin and Wang, Jinrui and Pister, Alexis and Vancisin, Tomas and Phillips, Sian and Chen, Min and Bach, Benjamin},
  journal={IEEE Transactions in Visualization and Computer Graphics (TVCG)},
  year={2026},
  note={Published at the IEEE VIS Conference 2025, Vienna, Austria}
}`}
                    </Box>
                </Card>

                <Typography variant="h6" component="h2" sx={{ fontWeight: 600, mb: 2 }}>
                    Citation: Mind the Badge: How Visualization Badges Impact Reading Visualizations
                </Typography>
                <Card sx={{ p: 2 }}>
                    <Box component="pre" sx={{ m: 0, p: 1.5, bgcolor: 'grey.50', borderRadius: 1, border: '1px solid', borderColor: 'divider', fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: 1.4, overflow: 'auto' }}>
                        {`@article{edelsbrunner2027mind,
  title={Mind the Badge: How Visualization Badges Impact Reading Visualizations},
  author={Edelsbrunner, Valentin and Wang, Jinrui and Chen, Min and Dragicevic, Pierre and Bach, Benjamin},
  journal={IEEE Transactions on Visualization and Computer Graphics},
  year={2027}
}`}
                    </Box>
                </Card>
            </Box>
        </Container>
    );
}
