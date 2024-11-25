import {Box} from "@mui/material";
import FrontGraphic from "./FrontGraphic.tsx";
import FrontFeed from "./FrontFeed.tsx";
import {predefinedArticles} from "../articles/ArticleProvider.tsx";

function FrontContent() {
    return <Box position="fixed" sx={{top: 0, display: "flex", width: "100%", overflow: "auto"}}>
        <FrontGraphic/>
        <Box sx={{flexGrow: 2}}>
            <FrontFeed articles={predefinedArticles}/>
        </Box>
        <FrontGraphic/>
    </Box>
}

export default FrontContent