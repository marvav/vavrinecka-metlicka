import Typography from "@mui/material/Typography";
import React from "react";
import {Box} from "@mui/material";
import article_theme from "../article-page/articles/article_theme.ts";
import Logo from "../Logo.tsx";

const IntroContents: React.FC = () => {
    return <Box sx={{
        textAlign: "center",
        paddingTop: "80px",
        gap: "4em",
        paddingRight: "20px"

    }}>
        <h1>Vavřinecká Metlička</h1>
        <Typography>Metlička dělá věci..</Typography>
    </Box>
}

export default IntroContents;