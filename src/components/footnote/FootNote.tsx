import React from 'react';
import {Box} from "@mui/material";

const FootNote: React.FC = () => {
    return <Box sx={{
            textAlign: "center",
            paddingLeft: "1em",
            paddingRight: "1em",
            borderTopLeftRadius: "1em",
            borderTopRightRadius: "1em",
        }}>
            <h6> Autorstvo jež tuto stránku zhotovilo bude zde vyjmenováno řádně a abecedně.</h6>
        </Box>;
};

export default FootNote;
