import React from "react";
import {Box, Button, Container, Typography} from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import banner from "../../assets/graphics/banner.png";

const ContactPage: React.FC = () => {
    return (
        <Container maxWidth="md" sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5em",
            minHeight: "78.75vh",
            textAlign: "center",
            py: { xs: 4, md: 6 },
        }}>
            <Box
                component="img"
                src={banner}
                alt="Vavřinecká Metlička Banner"
                sx={{
                    borderRadius: "0.75em",
                    width: '100%',
                    maxWidth: '700px',
                    height: 'auto',
                    mb: { xs: 4, md: 5 },
                    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                }}
            />
            <Typography
            sx={{fontWeight: 'bold'}}>
                Vítejte na stránkách Vavřinecké Metličky!
            </Typography>
            <Typography
                sx={{
                    maxWidth: '80ch',
                    lineHeight: 1.7,
                    mb: { xs: 4, md: 5 },
                }}
            >
                Jsme parta kamarádů, které spojují společné zájmy – rocková a metalová hudba, turistika, cyklovýlety, běh, ale i ochutnávání dobrého vína, piva a jídla.
                Ať už nás potkáte v lese, na horských stezkách, na kole, nebo pod pódiem na koncertě, vždycky nás žene dopředu nadšení pro sport, dobrodružství, dobrou hudbu a radost ze společných zážitků. Rádi vás uvidíme na našich akcích a společně si to užijeme!
            </Typography>

            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 2,
                width: '100%',
                justifyContent: 'center'
            }}>
                <Button
                    variant="outlined"
                    href="mailto:vavrinecka-metlicka@seznam.cz"
                    startIcon={<EmailIcon />}
                    sx={{
                        borderColor: '#61dafb',
                        color: '#61dafb',
                        textTransform: 'none',
                        fontWeight: 'bold',
                        padding: '10px 20px',
                        borderRadius: '0.75em',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            backgroundColor: 'rgba(97, 218, 251, 0.1)',
                            borderColor: '#61dafb',
                            transform: 'translateY(-2px)'
                        },
                    }}
                >
                    vavrinecka-metlicka@seznam.cz
                </Button>

                <Button
                    variant="contained"
                    href="https://www.facebook.com/profile.php?id=61554262512667"
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<FacebookIcon />}
                    sx={{
                        backgroundColor: '#1877F2',
                        textTransform: 'none',
                        fontWeight: 'bold',
                        padding: '10px 20px',
                        borderRadius: '0.75em',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            backgroundColor: '#145cb3',
                            transform: 'translateY(-2px)'
                        },
                    }}
                >
                    Najdete nás na Facebooku
                </Button>
            </Box>
        </Container>
    );
}

export default ContactPage;