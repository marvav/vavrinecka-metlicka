import React from 'react';
import { Box, Typography, Link, Container, Divider } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    return (
        <Box
            component="footer"
            sx={{
                width: '100%',
                backgroundColor: 'rgba(18, 18, 18, 0.8)',
                color: 'rgba(255, 255, 255, 0.7)',
                py: { xs: 2, sm: 2 },
                mt: 'auto',
            }}
        >
            <Container maxWidth="xl">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        textAlign: { xs: 'center', md: 'left' },
                        gap: 2,
                    }}
                >
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', gap: { xs: 2, sm: 3 } }}>
                        <Link
                            href="mailto:vavrinecka-metlicka@seznam.cz"
                            sx={{
                                color: 'inherit',
                                textDecoration: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                '&:hover': {
                                    color: '#fff',
                                    textDecoration: 'underline'
                                }
                            }}
                        >
                            <EmailIcon sx={{ fontSize: '1.2rem' }} />
                            <Typography variant="body2">vavrinecka-metlicka@seznam.cz</Typography>
                        </Link>

                        <Link
                            href="https://www.facebook.com/people/Vav%C5%99ineck%C3%A1-Metli%C4%8Dka/61554262512667/"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                color: 'inherit',
                                textDecoration: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                '&:hover': {
                                    color: '#fff',
                                    textDecoration: 'underline'
                                }
                            }}
                        >
                            <FacebookIcon sx={{ fontSize: '1.2rem' }} />
                            <Typography variant="body2">Sledujte nás na Facebooku</Typography>
                        </Link>
                    </Box>
                    <Box sx={{ textAlign: { xs: 'center', md: 'right' } }}>
                        <Typography variant="body2">
                            Autoři stránek: Marek Horský, Oliver Horský
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                            © {currentYear} Vavřinecká Metlička. Všechna práva vyhrazena.
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;