import React, {MouseEventHandler} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Box, useMediaQuery} from "@mui/material";
import event_theme from "../components/event-components/event_theme.ts";
import Logo from "../components/Logo.tsx";
import {useNavigate} from 'react-router-dom';
import MainBarElement from "./MainBarElement.tsx";
import Button from "@mui/material/Button";
import {ArrowDropDown} from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export interface MainBarElementType {
    name: string,
    action: () => void
}

const MainBar: React.FC = () => {
    const isMobile = useMediaQuery(event_theme.breakpoints.down('sm'));
    const navigate = useNavigate();

    const mainBarContent: MainBarElementType[] = [
        {name: "Úvod", action: () => navigate("/uvod")},
        {name: "Akce", action: () => navigate("/akce")},
        {name: "O nás", action: () => navigate("/metlicka")},
    ];

    const menu = isMobile
        ? <MobileMainBarMenu elements={mainBarContent}/>
        : <DesktopMainBarMenu elements={mainBarContent}/>;

    return <AppBar position="fixed" sx={{top: 0}}>
        <Toolbar sx={{display: "flex", gap: "0.5em", backgroundColor: "#000000"}}>
            <Logo/>
            <Typography variant="h6">
                Vavřinecká Metlička
            </Typography>
            <Box sx={{flexGrow: 3}}/>
            {menu}
        </Toolbar>
    </AppBar>
};

export interface MainBarMenuProps {
    elements: MainBarElementType[]
}

function DesktopMainBarMenu({elements}: MainBarMenuProps) {
    return <>
        {elements.map((element) => <MainBarElement title={element.name} onClick={element.action}/>)}
    </>;
}

function MobileMainBarMenu({elements}: MainBarMenuProps) {
    const [anchorElement, setAnchorElement] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElement(event.currentTarget);
    };

    return <Box>
        <Button
            id="page-dropdown-menu-button"
            onClick={handleClick}
            color="inherit"
        >
            Menu
            <ArrowDropDown/>
        </Button>
        <Menu
            anchorEl={anchorElement}
            open={anchorElement != null}
            onClose={() => setAnchorElement(null)}
        >
            {elements.map((element) =>
                getMenuItem(element.name, () => {
                    setAnchorElement(null);
                    element.action();
                }))}
        </Menu>
    </Box>;
}


function getMenuItem(title: string, closeAndNavigate: MouseEventHandler<HTMLAnchorElement> | undefined) {
    return <MenuItem onClick={closeAndNavigate}
                     sx={{
                         display: "flex",
                         justifyContent: "center",
                         textAlign: "center",
                     }}>
        {title}
    </MenuItem>;
}

export default MainBar;

