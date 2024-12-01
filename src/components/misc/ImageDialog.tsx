import {Dialog, DialogActions, DialogContent, ImageListItem, Box} from "@mui/material";
import {ArticleButton} from "../buttons/ArticleButtons";

function ImageDialog(img: string | undefined, open: boolean, setOpen: Function) {
    const handleClose = () => {
        setOpen(false);
    };

    return <Dialog open={open} onClose={handleClose}>
        <Box sx={{border: "2px solid #00A000"}}>
            <DialogContent>
                <ImageListItem><img src={img} alt={""} loading="lazy"/></ImageListItem>
            </DialogContent>
            <DialogActions>
                <ArticleButton title="Zavřít" onClick={handleClose}/>
            </DialogActions>
        </Box>
    </Dialog>
}

export default ImageDialog;