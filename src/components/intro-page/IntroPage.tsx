import MainBar from "../page/MainBar.tsx";
import React from "react";
import IntroContents from "./IntroContent";
import {Box} from "@mui/material";

const IntroPage: React.FC = () => {
    return <Box>
        <MainBar/>
        <IntroContents/>
    </Box>
}
export default IntroPage;