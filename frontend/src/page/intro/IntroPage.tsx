import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import metlicka_maskot from "../../assets/images/metlicka_maskot.png";

const IntroPage: React.FC = () => {
    return (
        <Box sx={{
            width: '100%',
            minHeight: '93vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
        }}>
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center" justifyContent="center">
                    <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box
                            component="img"
                            src={metlicka_maskot}
                            alt="Maskot Vavřinecké Metličky"
                            sx={{
                                width: '100%',
                                maxWidth: { xs: '300px', md: '500px' },
                                height: 'auto',
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                        <Typography
                            variant="h2"
                            component="h1"
                            sx={{
                                fontWeight: 'bold',
                                mb: 2,
                                background: 'linear-gradient(45deg, #90ee90, #61dafb)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            Vítejte na stránkách Vavřinecké Metličky
                        </Typography>

                        <Typography
                            variant="h6"
                            component="p"
                            sx={{
                                color: 'rgba(255, 255, 255, 0.7)',
                                mb: 4,
                                maxWidth: '500px',
                                mx: { xs: 'auto', md: 0 }
                            }}
                        >
                            Pořádáme parádní rockové koncerty i sportovní a turistické akce. Mrkni se do přehledu akcí, co zrovna chystáme.
                        </Typography>

                        <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                            <Button
                                component={Link}
                                to="/akce"
                                variant="contained"
                                size="large"
                                sx={{
                                    backgroundColor: 'green',
                                    fontWeight: 'bold',
                                    padding: '12px 24px',
                                    borderRadius: '8px',
                                    transition: 'transform 0.2s ease',
                                    '&:hover': {
                                        backgroundColor: '#006400',
                                        transform: 'scale(1.05)',
                                    }
                                }}
                            >
                                Naše Akce
                            </Button>
                            <Button
                                component={Link}
                                to="/metlicka"
                                variant="outlined"
                                size="large"
                                sx={{
                                    borderColor: 'green',
                                    color: 'green',
                                    fontWeight: 'bold',
                                    padding: '12px 24px',
                                    borderRadius: '8px',
                                    transition: 'transform 0.2s ease, background-color 0.2s ease',
                                    '&:hover': {
                                        borderColor: 'green',
                                        backgroundColor: 'rgba(0, 128, 0, 0.1)',
                                        transform: 'scale(1.05)',
                                    }
                                }}
                            >
                                O nás
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default IntroPage;