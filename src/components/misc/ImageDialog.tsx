import {Button, Dialog, DialogActions, DialogContent, ImageListItem,} from "@mui/material";


function imageDialog(img: string | undefined, open: boolean, setOpen: Function) {
    const handleClose = () => {
        setOpen(false);
    };

    return <Dialog open={open} onClose={handleClose}>
        <DialogContent>
            <ImageListItem><img src={img} alt={""} loading="lazy"/></ImageListItem>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>Zavřít</Button>
        </DialogActions>
    </Dialog>;
}

export default imageDialog;