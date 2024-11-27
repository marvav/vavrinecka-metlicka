import Typography from "@mui/material/Typography";
import React from "react";
import {Box, ThemeProvider} from "@mui/material";
import articleTheme from "../../themes/ArticleTheme.ts";

const IntroContents: React.FC = () => {
    return <Box sx={{ 
    textAlign:"center", 
    bgcolor: articleTheme.palette.primary.main,
    paddingTop: "80px",
    gap: "4em",
    paddingRight: "20px"

    }}>
        <h1>O Metličce</h1>
        <Typography>Metlička dělá věci..</Typography>
    </Box>
}

export default IntroContents;