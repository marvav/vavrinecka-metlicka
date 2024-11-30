import React from "react";
import MainBar from "../page/MainBar.tsx";
import ArticleContent from "./ArticleContent.tsx";
import FootNote from "../footnote/FootNote.tsx";

const ArticlePage: React.FC = () => {
    return <>
        <MainBar/>
        <ArticleContent/>
    </>;
};

export default ArticlePage;