import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Button} from "@mui/material";
import Logo from "../Logo.tsx";

const FrontBar: React.FC = () => {
    return (
        <AppBar position="fixed" sx={{ top: 0 }}>
            <Toolbar>
                <Logo/>
                <Typography variant="h6" component="div" sx={{ }}>
                    Vavřinecká Metlička
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
                </Typography>
                <Typography variant="h6" component="div" sx={{ }}>
                    <Button color="inherit">Přehled Akcí</Button>
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default FrontBar;

