import MainBar from "../page/MainBar.tsx";
import React from "react";
import IntroContents from "./IntroContent";
import {Box} from "@mui/material";
import metlicka_background from "../../../src/assets/images/metlicka_background.png"

const IntroPage: React.FC = () => {
    return <Box sx={{
        backgroundImage: `url(${metlicka_background})`,
        backgroundSize: 'cover',
        bgcolor: 'background.default',
        height: '100vh',
    }}>
        <MainBar/>
        <IntroContents/>
    </Box>
}
export default IntroPage;