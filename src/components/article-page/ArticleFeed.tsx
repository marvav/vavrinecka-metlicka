import React from "react";
import {Box} from "@mui/material";
import Article from "./articles/Article.tsx";
import {ArticleData} from "../data/ArticeData.tsx";
import FootNote from "../footnote/FootNote.tsx";
import Typography from "@mui/material/Typography";

interface FeedProps {
    articles: ArticleData[];
}

const ArticleFeed: React.FC<FeedProps> = ({articles}) => {
    return <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "2em",
    }}
    >
        <Typography sx={{fontWeight: "bold", fontSize: 36, padding: "1em"}}>Přehled akcí</Typography>
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: "3em",
            paddingBottom: "1em"
        }}>
            {articles.map((article) => (
                <Article {...article}/>
            ))}
        </Box>
        <FootNote/>
    </Box>;
};

export default ArticleFeed;