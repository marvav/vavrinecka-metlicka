import React from 'react';
import {Box, ThemeProvider} from "@mui/material";
import articleTheme from "../../themes/ArticleTheme.ts";

const FootNote: React.FC = () => {
    return (
        <ThemeProvider theme={articleTheme}>
            <Box sx={{
                textAlign: "center",
                bgcolor: articleTheme.palette.primary.main,
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
