import {MouseEventHandler} from "react";
import {Button, styled, Typography} from "@mui/material";

interface TicketLinkButtonProps {
    onClick?: MouseEventHandler | undefined;
}

export function TicketLinkButton({onClick} : TicketLinkButtonProps){
    return <TicketLinkStyledButton onClick={onClick}>
        <Typography variant="h6" sx={{fontWeight: "bold"}}>
            Vstupenky
        </Typography>
    </TicketLinkStyledButton>
}

const TicketLinkStyledButton = styled(Button)(() => ({
    borderRadius: "0.3em",
    width: "60%",
    margin: "left",
    padding: "auto",
    border: "1px solid #00FF00",
    backgroundColor: "#00a000",
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s ease-out",
    "&:hover": {
        backgroundColor: "#00a000",
        boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.3)",
        filter: "brightness(70%)"
    },
}));