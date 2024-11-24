import {Box} from "@mui/material";
import FrontGraphic from "./FrontGraphic.tsx";
import FrontFeed from "./FrontFeed.tsx";
import {predefinedArticles} from "../articles/ArticleProvider.tsx";

function FrontContent() {
    return <Box position="fixed" sx={{ top: 0 , display: "flex", width: "100%"}}>
        <FrontGraphic />
        <FrontFeed articles={predefinedArticles}/>
        <FrontGraphic />
    </Box>
}

export default FrontContent