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

export function ButtonStyle1({title, onClick}: EventButtonProps) {
    return <Button sx={{
        width: "auto",
        paddingLeft: "1em",
        paddingRight: "1em",
        textTransform: "none",
        color: "white",
        fontWeight: "bold",
        fontSize: "1em",
        background: 'linear-gradient(to right, #1d2922, #183815)',
        boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.3)",
        transition: "all 0.3s ease-in",
        border: '2px solid',
        borderColor: 'transparent',
        '&:hover': {
            borderColor: 'green',
        },
    }} onClick={onClick}>
        <Typography sx={{fontSize: "1em",}}>
            {title}
        </Typography>
    </Button>
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