import React from "react";
import MainBar from "../page/MainBar.tsx";
import ArticleContent from "./ArticleContent.tsx";
import {Box} from "@mui/material";

const ArticlePage: React.FC = () => {
    return <Box sx={{
        bgcolor: 'background.default',
        height: '100vh',
        overflow: "scroll"
    }}>
        <MainBar/>
        <ArticleContent/>
    </Box>;
};

export default ArticlePage;