import {MouseEventHandler} from "react";
import {Button, styled} from "@mui/material";

interface EventButtonProps {
    title: string;
    onClick?: MouseEventHandler | undefined;
}

export function EventButton({title, onClick}: EventButtonProps) {
    return <StyledButton sx={{width: 'min-content'}} onClick={onClick}>
        {title}
    </StyledButton>
}

const StyledButton = styled(Button)(() => ({
    backgroundColor: "#181a1b",
    border: "1px solid #00A000", // Green border
    textTransform: "none",    // Disable uppercase text
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)", // Subtle shadow
    transition: "all 0.3s ease-in",
    "&:hover": {
        backgroundColor: "#2c2e29", // Light grey on hover
        boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.3)", // Stronger shadow
    },
}));