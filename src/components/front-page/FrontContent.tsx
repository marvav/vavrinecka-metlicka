import {Box, useMediaQuery} from "@mui/material";
import FrontGraphic from "./FrontGraphic.tsx";
import FrontFeed from "./FrontFeed.tsx";
import {predefinedArticles} from "../articles/ArticleProvider.tsx";
import React from "react";
import articleTheme from "../../themes/ArticleTheme.ts";

function FrontContent() {
    const isMobile = useMediaQuery(articleTheme.breakpoints.down('sm'));
    return <Box position="fixed" sx={{top: 0, display: "flex", flexDirection: "column", overflow: "auto"}}>
        <Box sx={{top: 0, display: "flex", flexGrow: 2, padding: "2em"}}>
            {isMobile ? <div/> : <FrontGraphic/>}
            <FrontFeed articles={predefinedArticles}/>
            {isMobile ? <div/> : <FrontGraphic/>}
        </Box>
    </Box>
}

export default FrontContent