import {ImageListItem, ThemeProvider, useMediaQuery, Button} from "@mui/material";
import {useState,} from "react";

import article_theme from "../article-page/articles/article_theme.ts";
import theme from "../../themes/ButtonTheme.ts";
import imageDialog from "./ImageDialog.tsx";

export interface ArticleImageProps {
    image: string | undefined
}

function ArticleImage({image}: ArticleImageProps) {
    const isMobile = useMediaQuery(article_theme.breakpoints.down('sm'));
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    return <ThemeProvider theme={theme}>
        {isMobile
            ?
            <Button onClick={handleClickOpen}>Zobrazit Plakát</Button>
            :
            <Button onClick={handleClickOpen}>
                <ImageListItem>
                    <img src={image} alt={""} loading="lazy"/>
                </ImageListItem></Button>
        }
        {imageDialog(image, open, setOpen)}
    </ThemeProvider>
}


export default ArticleImage;