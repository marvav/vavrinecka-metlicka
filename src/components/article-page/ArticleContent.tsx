import {Box, useMediaQuery} from "@mui/material";
import SideGraphic from "../page/SideGraphic.tsx";
import ArticleFeed from "./ArticleFeed.tsx";
import {predefinedArticles} from "../data/ArticleProvider.tsx";
import page_common_theme from "../../themes/page_common_theme.ts";

function ArticleContent() {
    const isMobile = useMediaQuery(page_common_theme.breakpoints.down('sm'));
    return <Box position="fixed" sx={{
        overflow: "auto",
        bgcolor: "background.default",
        maxHeight: "100vh",
    }}>
        <Box sx={{top: 0, display: "flex", padding: "2em"}}>
            {isMobile ? <div/> : <SideGraphic/>}
            <ArticleFeed articles={predefinedArticles}/>
            {isMobile ? <div/> : <SideGraphic/>}
        </Box>
    </Box>
}

export default ArticleContent