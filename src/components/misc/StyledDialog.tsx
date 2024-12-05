import {Box, Dialog, DialogActions, DialogContent} from "@mui/material";
import {EventButton} from "../buttons/EventButtons.tsx";

interface StyledDialogProps {
    open: boolean
    setOpen: Function
    content: string | JSX.Element
}

function StyledDialog({open, setOpen, content}: StyledDialogProps) {
    const handleClose = () => {
        setOpen(false);
    };

    return <Dialog open={open} onClose={handleClose}>
        <Box sx={{border: "2px solid #00A000"}}>
            <DialogContent>
                {content}
            </DialogContent>
            <DialogActions>
                <EventButton title="Zavřít" onClick={handleClose}/>
            </DialogActions>
        </Box>
    </Dialog>
}

export default StyledDialog;