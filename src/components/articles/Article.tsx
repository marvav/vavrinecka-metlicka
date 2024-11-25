import {Box, Button, ThemeProvider, useMediaQuery} from "@mui/material";
import {ArticleData} from "../data/ArticeData.tsx";
import Date from "../misc/Date.tsx";
import Place from "../misc/Place.tsx";

import ArticleImage from "../misc/Image.tsx";
import articleTheme from "../../themes/ArticleTheme.ts";
import ImageButton from "../misc/ImageButton.tsx";

export default Article;

function Article({content, date, title, place, image}: ArticleData) {
    const isMobile = useMediaQuery(articleTheme.breakpoints.down('sm'));
    return (
        <ThemeProvider theme={articleTheme}>
            <Box sx={{
                display: "flex",
                flexDirection: {
                    xs: 'column',
                    sm: 'row',
                },
                bgcolor: articleTheme.palette.primary.main,
                padding: {
                    xs: articleTheme.spacing(4),
                    sm: articleTheme.spacing(8),
                },
                borderRadius: articleTheme.spacing(3)
            }}>
                <Box sx={{width: "100%"}}>
                    <h1>{title}</h1>
                    <Box sx={{flexGrow: 3, display: "flex", gap: "2em", width: "100%"}}>
                        <Date date={date} defaultValue={"Neoznámeno"}/>
                        <Place place={place} defaultValue={"Neoznámeno"}/>
                    </Box>
                    {content}
                </Box>
                {isMobile ? <ImageButton image={image}>Zobrazit plakát</ImageButton>
                    : (image && <ArticleImage image={image}/>)}
            </Box>
        </ThemeProvider>
    );
}
