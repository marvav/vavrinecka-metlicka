import Typography from "@mui/material/Typography";
import React from "react";
import {Box} from "@mui/material";

const IntroContents: React.FC = () => {
    return <Box sx={{
        textAlign: "center",
        paddingTop: "3em",
        textShadow: `
          -1px -1px 0 #000,  
          1px -1px 0 #000,
          -1px 1px 0 #000,
          1px 1px 0 #000
        `,
    }}>
        <h1>Vavřinecká Metlička</h1>
        <Typography>
            Metlička dělá věci..
        </Typography>
    </Box>
}

export default IntroContents;