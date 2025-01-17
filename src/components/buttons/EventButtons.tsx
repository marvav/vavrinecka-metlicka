import {MouseEventHandler} from "react";
import {Button, styled} from "@mui/material";

interface EventButtonProps {
    title: string;
    onClick?: MouseEventHandler | undefined;
}

interface ImageButtonProps {
    image: string;
}

export function EventButton({title, onClick}: EventButtonProps) {
    return <StyledButton sx={{width: "auto", paddingLeft: "1em", paddingRight: "1em"}} onClick={onClick}>
        {title}
    </StyledButton>
}

export function EventImageButton({title, image, onClick}: EventButtonProps & ImageButtonProps) {
    return <StyledButton sx={{width: "auto", bgcolor: "white"}} onClick={onClick}>
        <img src={image} loading="eager" height={'auto'} width={'100%'} alt={title}/>
    </StyledButton>
}

const StyledButton = styled(Button)(() => ({
    backgroundColor: "#333333",
    color: "#ffffff",
    textTransform: "none",    // Disable uppercase text
    fontWeight: "bold",
    fontSize: "1em",
    background: 'linear-gradient(to right, #181a1b, #142d12)',
    boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.3)",
    transition: "all 0.3s ease-in",
    "&:hover": {
        backgroundColor: "#233e29", // Light grey on hover
        boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.3)", // Stronger shadow
    },
}));