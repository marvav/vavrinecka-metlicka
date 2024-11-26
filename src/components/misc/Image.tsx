import {ImageListItem, ThemeProvider, useMediaQuery, Button} from "@mui/material";
import { useState,} from "react";

import articleTheme from "../../themes/ArticleTheme.ts";
import theme from "../../themes/ButtonTheme.ts";
import imageDialog from "./ImageDialog.tsx";

export interface ArticleImageProps {
    image: string | undefined
}

function ArticleImage({image}: ArticleImageProps) {
    const isMobile = useMediaQuery(articleTheme.breakpoints.down('sm'));
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    return <ThemeProvider theme={theme}>
        {isMobile 
        ?   
            <Button sx={{color: theme.palette.primary.main}} onClick={handleClickOpen}>Zobraz Plakát</Button>
        : 
        <Button sx={{color: theme.palette.primary.main}} onClick={handleClickOpen}>
        <ImageListItem>
            <img src={image} alt={""} loading="lazy"/>
        </ImageListItem></Button>
        }
    {imageDialog(image, open, setOpen)}
    </ThemeProvider>
}


export default ArticleImage;