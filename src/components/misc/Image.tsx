import {ImageListItem, ThemeProvider, useMediaQuery,} from "@mui/material";
import { useState,} from "react";

import articleTheme from "../../themes/ArticleTheme.ts";
import theme from "../../themes/ButtonTheme.ts";
import imageDialog from "./image_dialog.tsx";

export interface ArticleImageProps {
    image: string | undefined
}

function ArticleImage({image}: ArticleImageProps) {
    const isMobile = useMediaQuery(articleTheme.breakpoints.down('sm'));
    const [open, setOpen] = useState(false);
    
    return <ThemeProvider theme={theme}>
        {isMobile 
        ? 
        imageDialog(image, open, setOpen) 
        : 
        <ImageListItem>
                <img src={image} alt={""} loading="lazy"/>
        </ImageListItem>
        }
        
    </ThemeProvider>
}


export default ArticleImage;