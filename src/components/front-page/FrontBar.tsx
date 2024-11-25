import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Box, Button} from "@mui/material";
import Logo from "../Logo.tsx";

const FrontBar: React.FC = () => {
    return (
        <AppBar position="fixed" sx={{ top: 0 }}>
            <Toolbar sx={{display: "flex", gap: "1em"}}>
                <Logo/>
                <Typography variant="h6">
                    Vavřinecká Metlička
                </Typography>
                <Box sx={{flexGrow: 3, display: "flex", gap: "1em"}}/>
                <Button color="inherit">Přehled Akcí</Button>
                <Button color="inherit">O Metličce</Button>
            </Toolbar>
        </AppBar>
    );
};

export default FrontBar;

