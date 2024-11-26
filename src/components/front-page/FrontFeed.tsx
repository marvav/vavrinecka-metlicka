import React from "react";
import {Box} from "@mui/material";
import Article from "../articles/Article.tsx";
import {ArticleData} from "../data/ArticeData.tsx";
import FootNote from "../footnote/FootNote.tsx";

interface FeedProps {
    articles: ArticleData[];
}

const FrontFeed: React.FC<FeedProps> = ({articles}) => {
    return <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "3.5em"}}>
        <h1>Přehled akcí</h1>
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: "4em",
            width: "100%",
            maxHeight: "80vh",
        }}>
            {articles.map((article) => (
                <Article
                    title={article.title}
                    date={article.date}
                    place={article.place}
                    content={article.content}
                    purchasable_tickets={false}
                    image={article.image}
                    time={article.time}/>
            ))}
            <Box>
                <FootNote></FootNote>
            </Box>
        </Box>
    </Box>;
};

export default FrontFeed;