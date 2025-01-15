import Typography from "@mui/material/Typography";
import React from "react";
import {Box} from "@mui/material";
import metlicka_maskot from "../../../src/assets/images/metlicka_maskot.png"

const IntroContents: React.FC = () => {
    return <Box sx={{
        display: "flex",
        flexDirection: 'column',
        paddingTop: "3em",
        textShadow: `
          -1px -1px 0 #000,  
          1px -1px 0 #000,
          -1px 1px 0 #000,
          1px 1px 0 #000
        `,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
    }}>
        <h1>Vavřinecká Metlička</h1>
        <Typography>
            Metlička dělá věci..
        </Typography>
        <Box component="img"
             sx={{width: {sm: "50%", xs: "75%"}}}
             src={metlicka_maskot} loading="eager"/>
    </Box>
}

export default IntroContents;