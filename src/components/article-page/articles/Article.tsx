import {Box, ThemeProvider} from "@mui/material";
import {ArticleData} from "../../data/ArticeData.tsx";
import FieldEntry from "../../misc/FieldEntry.tsx";

import ArticleImage from "../../misc/Image.tsx";
import article_theme from "./article_theme.ts";
import ArticleTitle from "./ArticleTitle.tsx";

export default Article;

function Article({content, date, title, place, image, time}: ArticleData) {
    return <ThemeProvider theme={article_theme}>
        <Box sx={{
            display: "flex",
            flexDirection: {xs: 'column', sm: 'row',},
            bgcolor: 'background.default',
            padding: {xs: article_theme.spacing(4), sm: article_theme.spacing(8),},
            borderRadius: article_theme.spacing(3)
        }}>
            <Box sx={{width: "100%", flexGrow: 2, paddingRight: {xs: 0, sm: article_theme.spacing(8)}}}>
                <ArticleTitle title={title}/>
                <Box sx={{display: "flex", gap: "2em", width: "100%"}}>
                    <FieldEntry name={"Datum: "} value={date} defaultValue={"Neoznámeno"}/>
                    <FieldEntry name={"Čas: "} value={time} defaultValue={"Dle plakátu"}/>
                </Box>
                <Box sx={{display: "flex"}}>
                    <FieldEntry name={"Místo: "} value={place} defaultValue={"Neoznámeno"}/>
                </Box>
                {content}
            </Box>
            {image ? <Box sx={{
                display: "flex",
                width: {xs: "100%", sm: "50%",},
                justifyContent: {xs: "center", sm: "right",},
                paddingTop: {xs: article_theme.spacing(4), sm: 0,}
            }}>
                <ArticleImage image={image}/>
            </Box> : <div/>}
        </Box>
    </ThemeProvider>;
}
