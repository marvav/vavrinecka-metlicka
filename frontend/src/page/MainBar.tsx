import React from 'react';
import { AppBar, Toolbar, Box, useMediaQuery, Container, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { Link, NavLink } from 'react-router-dom';
import event_theme from "../components/event-components/event_theme.ts";
import Logo from "../components/Logo.tsx";
import MainBarElement from "./MainBarElement.tsx";
import MenuIcon from '@mui/icons-material/Menu';

interface MainBarElementType {
    name: string;
    path: string;
}

const MainBar: React.FC = () => {
    const isMobile = useMediaQuery(event_theme.breakpoints.down('sm'));

    const mainBarContent: MainBarElementType[] = [
        { name: "Úvod", path: "/uvod" },
        { name: "Akce", path: "/akce" },
        { name: "O nás", path: "/metlicka" },
    ];

    return (
        <AppBar position="fixed" sx={{
            backgroundColor: 'rgba(18, 18, 18, 0.8)',
            backdropFilter: 'blur(10px)',
            boxShadow: 'none',
            borderBottom: '1px solid rgba(255, 255, 255, 0.12)'
        }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ display: "flex", alignItems: 'center' }}>
                    <Box component={Link} to="/uvod" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                        <Logo />
                        <Typography variant="h6" sx={{ ml: 2 }}>
                            Vavřinecká Metlička
                        </Typography>
                    </Box>

                    <Box sx={{ flexGrow: 1 }} />

                    {isMobile ? <MobileMenu elements={mainBarContent} /> : <DesktopMenu elements={mainBarContent} />}
                </Toolbar>
            </Container>
        </AppBar>
    );
};

interface MainBarMenuProps {
    elements: MainBarElementType[];
}

function DesktopMenu({ elements }: MainBarMenuProps) {
    return (
        <Box sx={{ display: 'flex' }}>
            {elements.map((element) => <MainBarElement key={element.name} to={element.path} title={element.name} />)}
        </Box>
    );
}

function MobileMenu({ elements }: MainBarMenuProps) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    return (
        <Box>
            <IconButton size="large" edge="end" color="inherit" onClick={handleMenu}>
                <MenuIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{ 'aria-labelledby': 'main-menu' }}
                PaperProps={{
                    sx: {
                        backgroundColor: 'rgba(30, 30, 30, 0.8)',
                        backdropFilter: 'blur(10px)',
                        color: 'white',
                        borderRadius: '8px',
                    }
                }}
            >
                {elements.map((element) => (
                    <MenuItem
                        key={element.name}
                        component={NavLink}
                        to={element.path}
                        onClick={handleClose}
                        sx={{
                            justifyContent: 'center',
                            '&.active': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
                        }}
                    >
                        {element.name}
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
}

export default MainBar;

