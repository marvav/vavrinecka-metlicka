import React from "react";
import MainBar from "../page/MainBar.tsx";
import ArticleContent from "./ArticleContent.tsx";
import metlicka_background from "../../../public/metlicka_background.png";
import {Box} from "@mui/material";

const ArticlePage: React.FC = () => {
    return <Box sx={{
        backgroundImage: `url(${metlicka_background})`,
        backgroundSize: 'cover',
        bgcolor: 'background.default',
        height: '100vh'
    }}>
        <MainBar/>
        <ArticleContent/>
    </Box>;
};

export default ArticlePage;