import {Box, ThemeProvider, useMediaQuery} from "@mui/material";
import {ArticleData} from "../../data/ArticeData.tsx";

import ArticleImage from "../../misc/Image.tsx";
import article_theme from "./article_theme.ts";
import ArticleTitle from "./ArticleTitle.tsx";
import ArticleFields from "./ArticleFields.tsx";
import ArticleButtonBar from "./ArticleButtonBar.tsx";
import TrackChooser from "../../misc/TrackChooser.tsx";

export default Article;

function Article({content, date, title, place, image, time, photos_url, tracks}: ArticleData) {
    const isMobile = useMediaQuery(article_theme.breakpoints.down('sm'));
    return <ThemeProvider theme={article_theme}>
        <Box sx={{
            display: "flex",
            flexDirection: {xs: 'column', sm: 'row',},
            bgcolor: 'background.default',
            borderStyle: "solid",
            borderColor: "#00A000",
            padding: {xs: article_theme.spacing(4), sm: article_theme.spacing(8),},
            borderRadius: article_theme.spacing(3)
        }}>
            <Box sx={{
                display: "flex",
                width: "100%",
                flexDirection: "column",
                paddingRight: {xs: 0, sm: article_theme.spacing(8)}
            }}>
                <ArticleTitle title={title}/>
                <ArticleFields date={date} place={place} time={time}/>
                {tracks && <Box sx={{display: "flex", gap: "0.5em", alignItems: "center"}}>
                    <h4>Trasy: </h4>
                    <TrackChooser tracks={tracks}/>
                </Box>}
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
