import React from "react";
import MainBar from "../page/AppBar.tsx";
import ArticleContent from "./ArticleContent.tsx";

const ArticlePage: React.FC = () => {
    return <>
        <MainBar/>
        <ArticleContent/>
    </>;
};

export default ArticlePage;