import Typography from "@mui/material/Typography";
import React from "react";
import {Box, ThemeProvider} from "@mui/material";
import article_theme from "../article-page/articles/article_theme.ts";

const IntroContents: React.FC = () => {
    return <Box sx={{
        textAlign: "center",
        bgcolor: article_theme.palette.primary.main,
        paddingTop: "80px",
        gap: "4em",
        paddingRight: "20px"

    }}>
        <h1>O Metličce</h1>
        <Typography>Metlička dělá věci..</Typography>
    </Box>
}

export default IntroContents;