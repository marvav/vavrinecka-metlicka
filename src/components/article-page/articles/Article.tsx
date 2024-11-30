import {Box, ThemeProvider, useMediaQuery} from "@mui/material";
import {ArticleData} from "../../data/ArticeData.tsx";

import ArticleImage from "../../misc/Image.tsx";
import article_theme from "./article_theme.ts";
import ArticleTitle from "./ArticleTitle.tsx";
import ArticleFields from "./ArticleFields.tsx";
import ArticleButtonBar from "./ArticleButtonBar.tsx";
import LinkBar from "../../misc/LinkBar.tsx";

export default Article;

function Article({content, date, title, place, place_map, image, time, photos_url, tracks}: ArticleData) {
    const isMobile = useMediaQuery(article_theme.breakpoints.down('sm'));
    let style = getComputedStyle(document.body);
    return <ThemeProvider theme={article_theme}>
        <Box sx={{
            display: "flex",
            flexDirection: {xs: 'column', sm: 'row',},
            bgcolor: 'background.default',
            borderStyle: "solid",
            borderColor: "#00A000",
            padding: {xs: article_theme.spacing(4), sm: article_theme.spacing(8),},
        }}>
            <Box sx={{
                display: "flex",
                width: "100%",
                flexDirection: "column",
                paddingRight: {xs: 0, sm: article_theme.spacing(8)}
            }}>
                <ArticleTitle title={title}/>
                <ArticleFields date={date} time={time} place={place} placeLink= {place_map}/>
                {tracks && <LinkBar title={"Trasy"} linkMap={tracks}/>}
                {content && <>
                    <h3>Popis akce:</h3>
                    {content}
                </>}
                <Box sx={{flexGrow: 2, paddingBottom: "1em"}}/>
                <ArticleButtonBar image={image} photos_url={photos_url}/>
            </Box>
            {
                (image && !isMobile) ? <Box sx={{
                    display: "flex",
                    width: {xs: "100%", sm: "50%",},
                    justifyContent: {xs: "center", sm: "right",},
                    paddingTop: {xs: article_theme.spacing(4), sm: 0,}
                }}>
                    <ArticleImage image={image}/>
                </Box> : <div/>
            }
        </Box>
    </ThemeProvider>
        ;
}
