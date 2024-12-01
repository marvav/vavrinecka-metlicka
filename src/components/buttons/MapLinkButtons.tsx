import {MouseEventHandler} from "react";
import {Button, styled} from "@mui/material";

interface MapLinkButtonProps {
    image: string;
    onClick?: MouseEventHandler | undefined;
}

export function MapLinkButton({image, onClick} : MapLinkButtonProps){
    return <MapLinkStyledButton onClick={onClick}>
        <img src={image} loading="lazy" height={'auto'} width={'100%'} alt={"mapy.cz"}/>
    </MapLinkStyledButton>
}

const MapLinkStyledButton = styled(Button)(() => ({
    borderRadius: "0.3em",
    width: "min-content",
    padding: "0.2em",
    backgroundColor: "#06a927",
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s ease-out",
    "&:hover": {
        backgroundColor: "#06a927",
        boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.3)",
        filter: "brightness(70%)"
    },
}));