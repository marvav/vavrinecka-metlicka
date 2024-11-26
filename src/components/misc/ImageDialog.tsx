import {Button, ImageListItem, Dialog, DialogActions, DialogContent, DialogTitle, } from "@mui/material";
import {Fragment } from "react";


function imageDialog(img : string | undefined, open : boolean, setOpen : Function){
    const handleClose = () => {
        setOpen(false);
    };
    
    return (
    <Fragment>
        
        <Dialog
            open={open}
            onClose={handleClose}
        >
        <DialogTitle></DialogTitle>
            <DialogContent>
                <ImageListItem><img src={img} alt={""} loading="lazy"/></ImageListItem>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Zavřít</Button>
            </DialogActions>
        </Dialog>
    </Fragment>
    );
}
export default imageDialog;