import {Box, Button} from "@mui/material";
import {useState,} from "react";
import imageDialog from "./ImageDialog.tsx";

export interface EventPosterProps {
    image: string | undefined
}

function EventPoster({image}: EventPosterProps) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    return <Box>
        <Button onClick={handleClickOpen}>
            <img width={"500px"} src={image} alt={""} loading="lazy"/>
        </Button>
        {imageDialog(image, open, setOpen)}
    </Box>
}


export default EventPoster;