import React from "react";
import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";
import metlicka_maskot from "../../assets/images/metlicka_maskot.png";
import Footer from "../footnote/FootNote"
const IntroPage: React.FC = () => {
    return <Box sx={{
        display: "flex",
        flexDirection: 'column',
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
        <Typography>
            Metlička dělá věci..
        </Typography>
        <Box component="img"
             sx={{width: {sm: "50%", xs: "75%"}}}
             src={metlicka_maskot} loading="eager"/>
        <Box sx={{width: "95%"}}>
        <Footer/>
        </Box>
    </Box>
}
export default IntroPage;