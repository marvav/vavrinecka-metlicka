import React from "react";
import {Box} from "@mui/material";
import Article from "../articles/Article.tsx";

// Define the FeedProps interface
interface FeedProps {
    articles: ArticleData[];
}

const FrontFeed: React.FC<FeedProps> = ({articles}) => {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: "5em",
            width: "100%",
            paddingTop: "8em",
            maxHeight: "80vh",
            overflow: "auto",
        }}>
            {articles.map((article) => (
                <Article title={article.title} date={article.date} content={article.content}/>
            ))}
        </Box>
    );
};

export default FrontFeed;