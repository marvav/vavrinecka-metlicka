import * as React from 'react';
import {MouseEventHandler} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Box} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {ArrowDropDown} from "@mui/icons-material";

export default function PageDropdownMenu() {
    const [anchorElement, setAnchorElement] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorElement);
    const navigate = useNavigate();
    const fbLink = "https://www.facebook.com/profile.php?id=61554262512667";

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElement(event.currentTarget);
    };

    const closeAndNavigate = (url: string) => {
        setAnchorElement(null);
        navigate(url);
    }

    return <Box>
        <Button
            id="page-dropdown-menu-button"
            variant="contained"
            disableElevation
            onClick={handleClick}
            color="inherit"
        >
            Menu
            <ArrowDropDown/>
        </Button>
        <Menu
            id="page-dropdown-menu"
            anchorEl={anchorElement}
            open={open}
            onClose={() => setAnchorElement(null)}
        >
            {getMenuItem("Akce", () => closeAndNavigate("/akce"))}
            {getMenuItem("O Nás", () => closeAndNavigate("/uvod"))}
            {getMenuItem("Facebook", () => window.open(fbLink, '_blank'))}
        </Menu>
    </Box>;
}


function getMenuItem(title: string, closeAndNavigate: MouseEventHandler<HTMLAnchorElement> | undefined) {
    return <MenuItem onClick={closeAndNavigate} disableRipple
                     sx={{
                         display: "flex",
                         justifyContent: "center",
                         textAlign: "center",
                     }}>
        {title}
    </MenuItem>;
}

