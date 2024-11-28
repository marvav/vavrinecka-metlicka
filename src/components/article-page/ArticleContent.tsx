import {Box, useMediaQuery} from "@mui/material";
import SideGraphic from "../page/SideGraphic.tsx";
import ArticleFeed from "./ArticleFeed.tsx";
import {predefinedArticles} from "./articles/ArticleProvider.tsx";
import theme from "../../themes/theme.ts";

function ArticleContent() {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return <Box position="fixed" sx={{top: 0, display: "flex", flexDirection: "column", overflow: "auto"}}>
        <Box sx={{top: 0, display: "flex", flexGrow: 2, padding: "2em"}}>
            {isMobile ? <div/> : <SideGraphic/>}
            <ArticleFeed articles={predefinedArticles}/>
            {isMobile ? <div/> : <SideGraphic/>}
        </Box>
    </Box>
}

export default ArticleContent