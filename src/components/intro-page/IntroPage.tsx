import React from "react";
import {Box, useMediaQuery} from "@mui/material";
import Typography from "@mui/material/Typography";
import metlicka_maskot from "../../assets/images/metlicka_maskot.png";
import Footer from "../footnote/FootNote"
import {TypographyStyle1} from "../../styles/TypographyStyles.tsx";
import event_theme from "../event/event-components/event_theme.ts";
import {StyledLink} from "../misc/StyledLink.tsx";
const IntroPage: React.FC = () => {
    const isMobile = useMediaQuery(event_theme.breakpoints.down('sm'));
    return <Box sx={{
        display: "flex",
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        paddingBottom: "1em",
        flexGrow: "2"
    }}>
        <Typography sx={TypographyStyle1}>
            Metlička dělá věci..
        </Typography>
        {false && isMobile && getCrossroad()}
        <Box component="img"
             sx={{width: {sm: "50%", xs: "95%"}}}
             src={metlicka_maskot} loading="eager"/>
        <Box sx={{flexGrow: "2"}}/>
        <Footer/>
    </Box>
}
export default IntroPage;

function getCrossroad(){
    return <Box sx={{display: "flex", flexDirection: "column", paddingTop: "2em",gap: "2em"}}>
        <StyledLink link={{name: "Akce", url: "/akce"}}/>
        <StyledLink link={{name: "O nás", url: "/metlicka"}}/>
    </Box>
}