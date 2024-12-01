import {Box, useMediaQuery} from "@mui/material";
import SideGraphic from "../page/SideGraphic.tsx";
import ArticleFeed from "./ArticleFeed.tsx";
import {predefinedArticles} from "../data/ArticleProvider.tsx";
import page_common_theme from "../../themes/page_common_theme.ts";
import metlicka_background from "../../../src/assets/images/metlicka_background.png";

function ArticleContent() {
    const isMobile = useMediaQuery(page_common_theme.breakpoints.down('sm'));
    return <Box sx={{
        display: "flex",
        padding: "2em",
        backgroundImage: `url(${metlicka_background})`,
    }}>
        {isMobile ? <div/> : <SideGraphic/>}
        <ArticleFeed articles={predefinedArticles}/>
        {isMobile ? <div/> : <SideGraphic/>}
    </Box>
}

export default ArticleContent