import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Box, ThemeProvider, useMediaQuery} from "@mui/material";
import article_theme from "../article-page/articles/article_theme.ts";
import Logo from "../Logo.tsx";
import {useNavigate} from 'react-router-dom';
import MainBarElement from "./MainBarElement.tsx";
import {desktopTheme, mobileTheme} from "./main_bar_theme.ts";

const MainBar: React.FC = () => {
    const isMobile = useMediaQuery(article_theme.breakpoints.down('sm'));
    const navigate = useNavigate();
    const theme = isMobile ? mobileTheme : desktopTheme;
    return <ThemeProvider theme={theme}>
        <AppBar position="fixed" sx={{ top: 0 }}>
            <Toolbar sx={{display: "flex", gap: "1em", backgroundColor: "background.default"}}>
                <Logo/>
                <Typography variant="h6">
                    Vavřinecká Metlička
                </Typography>
                <Box sx={{flexGrow: 3, display: "flex", gap: "1em"}}/>
                <MainBarElement title={"Přehled Akcí"} onClick={() => navigate("/akce")}/>
                <MainBarElement title={"O Metličce"} onClick={() => navigate("/uvod")}/>
            </Toolbar>
        </AppBar>;
    </ThemeProvider>
};

export default MainBar;

