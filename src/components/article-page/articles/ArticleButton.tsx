import {Button, styled, ThemeProvider} from "@mui/material";
import {MouseEventHandler} from "react";
import {article_button_theme} from "./article_theme.ts";

interface ArticleButtonProps {
    title: string;
    onClick?: MouseEventHandler | undefined;
}

const StyledButton = styled(Button)(() => ({
    backgroundColor: "background",
    border: "1px solid #2c2e29", // Black border
    textTransform: "none",    // Disable uppercase text
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)", // Subtle shadow
    transition: "all 0.3s ease-in",
    "&:hover": {
        backgroundColor: "#2c2e29", // Light grey on hover
        boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.3)", // Stronger shadow
    },
}));

function ArticleButton({title, onClick}: ArticleButtonProps) {
    return <ThemeProvider theme={article_button_theme}>
        <StyledButton sx={{width:'min-content'}} onClick={onClick}>
            {title}
        </StyledButton>
    </ThemeProvider>
}

export default ArticleButton;