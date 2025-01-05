import {MouseEventHandler} from "react";
import {Button, styled} from "@mui/material";

interface EventButtonProps {
    title: string;
    image: string;
    onClick?: MouseEventHandler | undefined;
}

export function EventButton({title, onClick}: EventButtonProps) {
    return <StyledButton sx={{width: "auto"}} onClick={onClick}>
        {title}
    </StyledButton>
}

export function EventImageButton({title, image, onClick}: EventButtonProps) {
    return <StyledButton sx={{width: "auto", bgcolor: "white"}} onClick={onClick}>
        <img src={image} loading="lazy" height={'auto'} width={'100%'} alt={title}/>
    </StyledButton>
}

const StyledButton = styled(Button)(() => ({
    backgroundColor: "#181a1b",
    color: "#eee",
    textTransform: "none",    // Disable uppercase text
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)", // Subtle shadow
    transition: "all 0.3s ease-in",
    "&:hover": {
        backgroundColor: "#2c2e29", // Light grey on hover
        boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.3)", // Stronger shadow
    },
}));