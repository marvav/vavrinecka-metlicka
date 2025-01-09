import React, {MouseEventHandler} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Box, ThemeProvider, useMediaQuery} from "@mui/material";
import event_theme from "../event/event-components/event_theme.ts";
import Logo from "../Logo.tsx";
import {useNavigate} from 'react-router-dom';
import MainBarElement from "./MainBarElement.tsx";
import {desktopTheme, mobileTheme} from "./main_bar_theme.ts";
import PageDropdownMenu from './PageDropdownMenu.tsx';

const MainBar: React.FC = () => {
    const isMobile = useMediaQuery(event_theme.breakpoints.down('sm'));
    const navigate = useNavigate();
    const theme = isMobile ? mobileTheme : desktopTheme;

    const mainBarContent: ({ name: string; action: MouseEventHandler})[] = [
        {name: "Akce", action: () => navigate("/akce")},
        {name: "O Metličce", action: () => navigate("/uvod")},
        {
            name: "Facebook",
            action: () => window.open("https://www.facebook.com/profile.php?id=61554262512667", '_blank')
        },
    ];


    return <ThemeProvider theme={theme}>
        <AppBar position="fixed" sx={{top: 0}}>
            <Toolbar sx={{display: "flex", gap: "1em", backgroundColor: "background.default"}}>
                <Logo/>
                <Typography variant="h6">
                    Vavřinecká Metlička
                </Typography>
                <Box sx={{flexGrow: 3, display: "flex", gap: "1em"}}/>
                {isMobile ? <PageDropdownMenu/> : <div>
                    {mainBarContent.map((element) =>
                        <MainBarElement title={element.name} onClick={element.action}/>)}
                </div>
                }
            </Toolbar>
        </AppBar>
    </ThemeProvider>
};

export default MainBar;

