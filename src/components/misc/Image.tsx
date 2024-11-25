import {Button, ImageList, ImageListItem, ThemeProvider, useMediaQuery} from "@mui/material";
import articleTheme from "../../themes/ArticleTheme.ts";
import theme from "../../themes/ButtonTheme.ts";

export interface ArticleImageProps {
    image: string | undefined
}

function ArticleImage({image}: ArticleImageProps) {
    const isMobile = useMediaQuery(articleTheme.breakpoints.down('sm'));
    return <ThemeProvider theme={theme}>
        {isMobile
            ? <Button sx={{color: theme.palette.primary.main}}>
                Zobrazit plakát
            </Button>
            : <ImageListItem>
                <img src={image} alt={""} loading="lazy"/>
            </ImageListItem>}
    </ThemeProvider>
}


export default ArticleImage;