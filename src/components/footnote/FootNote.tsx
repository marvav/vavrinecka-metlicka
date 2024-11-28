import React from 'react';
import {Box, ThemeProvider} from "@mui/material";
import article_theme from "../article-page/articles/article_theme.ts";

const FootNote: React.FC = () => {
    return (
        <ThemeProvider theme={article_theme}>
            <Box sx={{
                textAlign: "center",
                bgcolor: article_theme.palette.primary.main,
                paddingLeft: "1em",
                paddingRight: "1em",
                borderTopLeftRadius: "1em",
                borderTopRightRadius: "1em"
            }}>
                <h6> Copyright </h6>
            </Box>
        </ThemeProvider>
    );
};

export default FootNote;
