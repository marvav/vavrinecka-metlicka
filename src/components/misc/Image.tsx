import {ImageListItem, ThemeProvider, useMediaQuery, Button} from "@mui/material";
import {useState,} from "react";

import event_theme from "../event-page/event-components/event_theme.ts";
import theme from "../../themes/ButtonTheme.ts";
import imageDialog from "./ImageDialog.tsx";

export interface EventPosterProps {
    image: string | undefined
}

function EventPoster({image}: EventPosterProps) {
    const isMobile = useMediaQuery(event_theme.breakpoints.down('sm'));
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    return <ThemeProvider theme={theme}>
        <Button onClick={handleClickOpen}>{isMobile
            ? "Zobrazit Plakát"
            : <ImageListItem>
                <img src={image} alt={""} loading="lazy"/>
            </ImageListItem>}
        </Button>
        {imageDialog(image, open, setOpen)}
    </ThemeProvider>
}


export default EventPoster;