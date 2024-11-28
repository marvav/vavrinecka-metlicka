import MainBar from "../page/MainBar.tsx";
import React from "react";
import IntroContents from "./IntroContent";
import {Box} from "@mui/material";

const IntroPage: React.FC = () => {
    return <Box sx={{bgcolor: 'background.default', height: '100vh'}}>
        <MainBar/>
        <IntroContents/>
    </Box>
}
export default IntroPage;