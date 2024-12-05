import {MouseEventHandler} from "react";
import {Button, styled, Typography} from "@mui/material";

interface ProminentStyledProps {
    title : string;
    onClick?: MouseEventHandler | undefined;
}

export function ProminentButton({title, onClick} : ProminentStyledProps){
    return <ProminentStyledButton onClick={onClick}>
        <Typography variant="h6" sx={{fontWeight: "bold"}}>
            {title}
        </Typography>
    </ProminentStyledButton>
}

const ProminentStyledButton = styled(Button)(() => ({
    borderRadius: "0.3em",
    color: "#eee",
    width: "50%",
    fontSize: "10px",
    display: "flex",
    alignItems: "center",
    padding: "auto",
    marginTop: "15px",
    border: "1px solid #00FF00",
    backgroundColor: "#00a000",
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s ease-out",
    "&:hover": {
        backgroundColor: "#00a000",
        boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.3)",
        filter: "brightness(95%)"
    },
}));