import React from 'react';
import {
    Box,
    Typography,
    Card,
    CardContent,
    Container,
    Grid2
} from '@mui/material';
import { FolderZip } from '@mui/icons-material';

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
                            component="a"
                            href="/vis-badges-suppl-material.zip"
                            download
                            sx={{
                                textDecoration: 'none',
                                color: 'inherit',
                                height: '100%',
                                transition: 'all 0.2s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-2px)',
                                }
                            }}
                        >
                            <CardContent sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                                <FolderZip sx={{ fontSize: 24, color: 'primary.main' }} />
                                <Box>
                                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                                        Download our supplementary materials
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        ZIP format
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid2>

                    <Grid2 item xs={12} sm={6} md={4}>
                        <Card
                            component="a"
                            href="/mind-the-badge-supplementary-material.zip"
                            download
                            sx={{
                                textDecoration: 'none',
                                color: 'inherit',
                                height: '100%',
                                transition: 'all 0.2s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-2px)',
                                }
                            }}
                        >
                            <CardContent sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
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
                            </CardContent>
                        </Card>
                    </Grid2>
                </Grid2>
            </Box>
        </Container>
    );
}
