import {MouseEventHandler} from "react";
import {Button, styled} from "@mui/material";
import Typography from "@mui/material/Typography";

interface EventButtonProps {
    title: string;
    onClick?: MouseEventHandler | undefined;
}

interface ImageButtonProps {
    image: string;
}

export function EventButton({title, onClick}: EventButtonProps) {
    return <StyledButton sx={{width: "auto", paddingLeft: "1em", paddingRight: "1em"}} onClick={onClick}>
        <Typography sx={{ fontSize: "1em",}}>
            {title}
        </Typography>
    </StyledButton>
}

export function ImageButton({title, image, onClick}: EventButtonProps & ImageButtonProps) {
    return <BlankButton sx={{width: "auto", bgcolor: "white"}} onClick={onClick}>
        <img src={image} loading="eager" height={'auto'} width={'100%'} alt={title}/>
    </BlankButton>
}

const BlankButton = styled(Button)(() => ({
    backgroundColor: "#333333",
    color: "#ffffff",
    textTransform: "none",    // Disable uppercase text
    transition: "all 0.3s ease-in",
    '&:hover': {
        borderColor: 'green',
        borderWidth: '2px',
    },
}));

const StyledButton = styled(Button)(() => ({
    textTransform: "none",    // Disable uppercase text
    fontWeight: "bold",
    fontSize: "1em",
    background: 'linear-gradient(to right, #1d2922, #142d12)',
    boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.3)",
    transition: "all 0.3s ease-in",
    borderWidth: '2px',
    borderColor: 'transparent',
    '&:hover': {
        borderColor: 'green',
        borderWidth: '2px',
    },
}));