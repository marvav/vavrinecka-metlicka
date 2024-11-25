import {Button, ThemeProvider} from "@mui/material";
import theme from "../../themes/ButtonTheme.ts";

export interface ImageButtonProps {
    image: string | undefined
}

function ImageButton({image}: ImageButtonProps) {
    return <ThemeProvider theme={theme}>
        {image ? <Button sx={{color: theme.palette.primary.main}}>
                Zobrazit plakát
            </Button>
            : <div/>}
    </ThemeProvider>
}

export default ImageButton;