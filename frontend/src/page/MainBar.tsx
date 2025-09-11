import React from 'react';
import {
    AppBar,
    Box,
    Button,
    Container,
    Fade,
    Grow,
    IconButton,
    Link as MuiLink,
    Toolbar,
    Typography,
    useMediaQuery
} from "@mui/material";
import {Link, NavLink} from 'react-router-dom';
import event_theme from "../components/event-components/event_theme.ts";
import Logo from "../components/Logo.tsx";
import MainBarElement from "./MainBarElement.tsx";
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close';
import FacebookIcon from '@mui/icons-material/Facebook';

interface MainBarElementType {
    name: string;
    path: string;
}

const MainBar: React.FC = () => {
    const isMobile = useMediaQuery(event_theme.breakpoints.down('sm'));

    const mainBarContent: MainBarElementType[] = [
        {name: "Úvod", path: "/uvod"},
        {name: "Akce", path: "/akce"},
        {name: "O nás", path: "/metlicka"},
    ];

    return (
        <AppBar position="fixed" sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.83)',
            backdropFilter: 'blur(10px)',
            height: '7vh',
            boxShadow: 'none',
            borderBottom: '1px solid rgba(255, 255, 255, 0.12)'
        }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{display: "flex", alignItems: 'center'}}>
                    <Box component={Link} to="/uvod"
                         sx={{display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit'}}>
                        <Logo/>
                        <Typography variant="h6" sx={{ml: 2}}>
                            Vavřinecká Metlička
                        </Typography>
                    </Box>

                    <Box sx={{flexGrow: 1}}/>

                    {isMobile ? <MobileMenu elements={mainBarContent}/> : <DesktopMenu elements={mainBarContent}/>}
                </Toolbar>
            </Container>
        </AppBar>
    );
};

interface MainBarMenuProps {
    elements: MainBarElementType[];
}

function DesktopMenu({elements}: MainBarMenuProps) {
    return (
        <Box sx={{display: 'flex'}}>
            {elements.map((element) => <MainBarElement key={element.name} to={element.path} title={element.name}/>)}
        </Box>
    );
}

function MobileMenu({elements}: MainBarMenuProps) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <IconButton size="large" edge="end" color="inherit" onClick={handleOpen} aria-label="Otevřít menu">
                <MenuIcon/>
            </IconButton>
            <Fade in={open} timeout={400}>
                <Box
                    sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(18, 18, 18, 0.9)',
                        backdropFilter: 'blur(10px)',
                        color: 'white',
                        zIndex: (theme) => theme.zIndex.modal,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <IconButton
                        onClick={handleClose}
                        aria-label="Zavřít menu"
                        sx={{position: 'absolute', top: 16, right: 16, color: 'white'}}
                    >
                        <CloseIcon fontSize="large"/>
                    </IconButton>
                    <Box component="nav" sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                        {elements.map((element, index) => (
                            <Grow in={open} key={element.name} timeout={500 + index * 200}>
                                <Button
                                    component={NavLink}
                                    to={element.path}
                                    onClick={handleClose}
                                    startIcon={element.icon}
                                    sx={{
                                        color: 'white',
                                        fontSize: '1.5rem',
                                        fontWeight: 'bold',
                                        padding: '12px 24px',
                                        borderRadius: '8px',
                                        justifyContent: 'flex-start',
                                        '&.active': {
                                            color: 'green',
                                        }
                                    }}
                                >
                                    {element.name}
                                </Button>
                            </Grow>
                        ))}
                    </Box>
                    <Box sx={{position: 'absolute', bottom: 40}}>
                        <MuiLink
                            href="https://www.facebook.com/people/Vav%C5%99ineck%C3%A1-Metli%C4%8Dka/61554262512667/"
                            target="_blank" rel="noopener noreferrer">
                            <FacebookIcon sx={{
                                color: 'rgba(255, 255, 255, 0.7)',
                                fontSize: '2rem',
                                '&:hover': {color: 'white'}
                            }}/>
                        </MuiLink>
                    </Box>
                </Box>
            </Fade>
        </>
    );
}

export default MainBar;

