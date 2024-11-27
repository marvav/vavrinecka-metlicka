import MainBar from "../page/AppBar";
import React from "react";
import Typography from "@mui/material/Typography";
import IntroContents from "./IntroContent";

const IntroPage: React.FC = () => {
    return <>
        <MainBar/>
        <IntroContents/>
    </>
}
export default IntroPage;