import React from "react";
import {Box} from "@mui/material";
import Article from "../articles/Article.tsx";
import {ArticleData} from "../data/ArticeData.tsx";

interface FeedProps {
    articles: ArticleData[];
}

const FrontFeed: React.FC<FeedProps> = ({articles}) => {
    return (
        <Box sx={{paddingTop: "3.5em"}}>
            <h1>Přehled akcí</h1>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: "5em",
                width: "100%",
                paddingRight: "2em",
                paddingLeft: "2em",
                maxHeight: "80vh",
            }}>
                {articles.map((article) => (
                    <Article
                        title={article.title}
                        date={article.date}
                        place={article.place}
                        content={article.content}
                        purchasable_tickets={false}
                        image={article.image}/>
                ))}
            </Box>
        </Box>
    );
};

export default FrontFeed;