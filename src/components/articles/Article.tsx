import {Box, ThemeProvider} from "@mui/material";
import {ArticleData} from "../data/ArticeData.tsx";
import Date from "../misc/Date.tsx";
import Place from "../misc/Place.tsx";

import ArticleImage from "../misc/Image.tsx";
import articleTheme from "../../themes/ArticleTheme.ts";
import Typography from "@mui/material/Typography";

export default Article;

function Article({content, date, title, place, image}: ArticleData) {
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
                <Box sx={{width: "100%", flexGrow: 2}}>
                    <Typography variant="h3" sx={{
                        display: "flex",
                        justifyContent: {
                            xs: "center",
                            sm: "left",
                        }}}>
                        {title}
                    </Typography>
                    <Box sx={{display: "flex", gap: "2em", width: "100%"}}>
                        <Date date={date} defaultValue={"Neoznámeno"}/>
                        <Place place={place} defaultValue={"Neoznámeno"}/>
                    </Box>
                    {content}
                </Box>
                {image ? <Box sx={{
                    display: "flex",
                    width: {
                        xs: "100%",
                        sm: "50%",
                    },
                    justifyContent: {
                        xs: "center",
                        sm: "right",
                    },
                    paddingTop: {
                        xs: articleTheme.spacing(4),
                        sm: articleTheme.spacing(0),
                    },
                }}>
                    <ArticleImage image={image}/>
                </Box> : <div/>}
            </Box>
        </ThemeProvider>
    );
}
