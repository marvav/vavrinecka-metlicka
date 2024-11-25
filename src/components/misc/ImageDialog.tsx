import {Button, ImageListItem, Dialog, DialogActions, DialogContent, DialogTitle, } from "@mui/material";
import {Fragment } from "react";
import theme from "../../themes/ButtonTheme.ts";

function ImageDialog(img : string | undefined, open : boolean, setOpen : Function){
    const handleClickOpen = () => {
        setOpen(true);
      };

      const handleClose = () => {
        setOpen(false);
      };
    
    return (
    <Fragment>
        <Button sx={{color: theme.palette.primary.main}} onClick={handleClickOpen}>Zobraz Plakát</Button> 
        <Dialog
            open={open}
            onClose={handleClose}
        >
        <DialogTitle>Plakát</DialogTitle>
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
export default ImageDialog;