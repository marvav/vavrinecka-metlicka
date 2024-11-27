import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Box, Button, useMediaQuery} from "@mui/material";
import articleTheme from "../../themes/ArticleTheme.ts";
import Logo from "../Logo.tsx";

const MainBar: React.FC = () => {
    const isMobile = useMediaQuery(articleTheme.breakpoints.down('sm'));
    let textSize = isMobile ? 12 : 17;
    return (
        <AppBar position="fixed" sx={{ top: 0 }}>
            <Toolbar sx={{display: "flex", gap: "1em"}}>
                <Logo/>
                <Typography variant="h6" sx={{ fontSize: textSize }}>
                    Vavřinecká Metlička
                </Typography>
                <Box sx={{flexGrow: 3, display: "flex", gap: "1em"}}/>
                <Button color="inherit" sx={{ fontSize: textSize }}>Přehled Akcí</Button>
                <Button color="inherit" sx={{ fontSize: textSize }}>O Metličce</Button>
            </Toolbar>
        </AppBar>
    );
};

export default MainBar;

