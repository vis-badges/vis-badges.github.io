import React from 'react';
import {
    Box,
    Typography,
    Card,
    CardContent,
    Avatar,
    Divider,
    Container,
    Grid2
} from '@mui/material';
import { Email, School, Download, Description, FolderZip } from '@mui/icons-material';

const authors = [
    {
        name: 'Valentin Edelsbrunner',
        institution: 'Inria Bordeaux',
        email: 'valentin.edelsbrunner@inria.fr',
        avatar: '/api/placeholder/150/150',
        color: '#1976d2'
    },
    {
        name: 'Jinrui Wang',
        institution: 'The University of Edinburgh',
        email: 'jinrui.wang@ed.ac.uk',
        avatar: '/api/placeholder/150/150',
        color: '#388e3c'
    },
    {
        name: 'Alexis Pister',
        institution: 'The University of Edinburgh',
        email: 'apister@ed.ac.uk',
        avatar: '/api/placeholder/150/150',
        color: '#f57c00'
    },
    {
        name: 'Tomas Vancisin',
        institution: 'The University of Edinburgh',
        email: 'Tomas.Vancisin@ed.ac.uk',
        avatar: '/api/placeholder/150/150',
        color: '#7b1fa2'
    },
    {
        name: 'Sian Phillips',
        institution: 'The University of Edinburgh',
        email: 'Sian.Phillips@ed.ac.uk',
        avatar: '/api/placeholder/150/150',
        color: '#d32f2f'
    },
    {
        name: 'Min Chen',
        institution: 'University of Oxford',
        email: 'min.chen@oerc.ox.ac.uk',
        avatar: '/api/placeholder/150/150',
        color: '#1976d2'
    },
    {
        name: 'Benjamin Bach',
        institution: 'Inria Bordeaux',
        institution2: 'the University of Edinburgh',
        email: 'benjamin.bach@inria.fr',
        avatar: '/api/placeholder/150/150',
        color: '#388e3c'
    }
];

export default function About() {
    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.5 }}>
                    The website provides an interactive catalog of 132 visualization badges with their labels, descriptions and taxonomy; high-resolution examples that show how authors have already applied the badges in real-world projects; and step-by-step guidelines on how to apply them. For information we point to our{' '}
                    <Box
                        component="a"
                        href="/visualization-badges.pdf"
                        download
                        sx={{
                            color: 'primary.main',
                            textDecoration: 'none',
                            fontWeight: 600,
                            '&:hover': {
                                textDecoration: 'underline'
                            }
                        }}
                    >
                        paper
                    </Box>
                    .
                </Typography>
            </Box>

            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" component="h2" sx={{ fontWeight: 600, mb: 2 }}>
                    Citation
                </Typography>
                <Card sx={{ p: 2 }}>
                    <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: 1.4 }}>
                        Valentin Edelsbrunner, Jinrui Wang, Alexis Pister, Tomas Vancisin, Sian Phillips, Min Chen, and Benjamin Bach: Visualization Badges: Communicating Design and Provenance through Graphical Labels Alongside Visualizations. IEEE Transactions in Visualization and Computer Graphics (TVCG), 2026 (published at the IEEE VIS Conference 2025, Vienna, Austria).
                    </Typography>
                </Card>
            </Box>

            <Box sx={{ mb: 2 }}>
                <Typography variant="h6" component="h2" sx={{ fontWeight: 600 }}>
                    Authors
                </Typography>
            </Box>

            <Grid2 container spacing={2}>
                {authors.map((author, index) => (
                    <Grid2 item xs={12} sm={6} lg={4} key={index}>
                        <Card 
                            elevation={2}
                            sx={{ 
                                height: 220,
                                transition: 'all 0.3s ease-in-out',
                                '&:hover': {
                                    elevation: 8,
                                    transform: 'translateY(-4px)',
                                    boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                                }
                            }}
                        >
                            <CardContent sx={{ textAlign: 'center', p: 1.5, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <Box sx={{ position: 'relative', mb: 1 }}>
                                    <Avatar
                                        sx={{
                                            width: 75,
                                            height: 75,
                                            mx: 'auto',
                                            mb: 1,
                                            border: `3px solid ${author.color}`,
                                            backgroundColor: author.color,
                                            fontSize: '1.2rem',
                                            fontWeight: 600
                                        }}
                                    >
                                        {author.name.split(' ').map(n => n[0]).join('')}
                                    </Avatar>
                                </Box>
                                
                                <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 1, fontSize: '1rem' }}>
                                    {author.name}
                                </Typography>
                                
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1, gap: 0.5 }}>
                                    <School sx={{ fontSize: 14, color: 'text.secondary', flexShrink: 0 }} />
                                    <Box sx={{ textAlign: 'left' }}>
                                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>
                                            {author.institution}
                                        </Typography>
                                        {author.institution2 && (
                                            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>
                                                {author.institution2}
                                            </Typography>
                                        )}
                                    </Box>
                                </Box>
                                
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Email sx={{ fontSize: 14, mr: 0.5, color: 'text.secondary' }} />
                                    <Typography 
                                        variant="body2" 
                                        component="a" 
                                        href={`mailto:${author.email}`}
                                        sx={{ 
                                            color: 'primary.main',
                                            textDecoration: 'none',
                                            fontSize: '0.85rem',
                                            '&:hover': {
                                                textDecoration: 'underline'
                                            }
                                        }}
                                    >
                                        {author.email}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid2>
                ))}
            </Grid2>

            <Box sx={{ mt: 4, mb: 2 }}>
                <Typography variant="h6" component="h2" sx={{ fontWeight: 600, mb: 2 }}>
                    Downloads
                </Typography>
                <Grid2 container spacing={2}>
                    <Grid2 item xs={12} sm={6}>
                        <Card 
                            component="a"
                            href="/visualization-badges.pdf"
                            download
                            sx={{
                                textDecoration: 'none',
                                color: 'inherit',
                                height: '100%',
                                transition: 'all 0.2s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                                }
                            }}
                        >
                            <CardContent sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Description sx={{ fontSize: 24, color: 'primary.main' }} />
                                <Box>
                                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                                        Download our paper
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        PDF format
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid2>
                    
                    <Grid2 item xs={12} sm={6}>
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
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
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
                </Grid2>
            </Box>



            <Box sx={{ mt: 6, mb: 4 }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 4, flexWrap: 'wrap' }}>
                    <Box
                        component="img"
                        src="/inria-logo.png"
                        alt="Inria Logo"
                        sx={{
                            height: 60,
                            width: 'auto',
                            filter: 'grayscale(100%)',
                            opacity: 0.7,
                            transition: 'all 0.3s ease-in-out',
                            backgroundColor: 'white',
                            borderRadius: 1,
                            p: 1,
                            '&:hover': {
                                filter: 'grayscale(0%)',
                                opacity: 1
                            }
                        }}
                    />
                    <Box
                        component="img"
                        src="/uni-edinburgh-logo.png"
                        alt="University of Edinburgh Logo"
                        sx={{
                            height: 60,
                            width: 'auto',
                            filter: 'grayscale(100%)',
                            opacity: 0.7,
                            transition: 'all 0.3s ease-in-out',
                            '&:hover': {
                                filter: 'grayscale(0%)',
                                opacity: 1
                            }
                        }}
                    />
                    <Box
                        component="img"
                        src="/uni-oxford-logo.svg"
                        alt="University of Oxford Logo"
                        sx={{
                            height: 60,
                            width: 'auto',
                            filter: 'grayscale(100%)',
                            opacity: 0.7,
                            transition: 'all 0.3s ease-in-out',
                            backgroundColor: 'white',
                            borderRadius: 1,
                            p: 1,
                            '&:hover': {
                                filter: 'grayscale(0%)',
                                opacity: 1
                            }
                        }}
                    />
                </Box>
            </Box>
        </Container>
    );
}