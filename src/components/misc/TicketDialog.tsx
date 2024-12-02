import {Dialog, DialogActions, DialogContent, Typography, Box} from "@mui/material";
import {EventButton} from "../buttons/EventButtons.tsx";

function TicketDialog(message : string | undefined, open: boolean, setOpen: Function) {
    const handleClose = () => {
        setOpen(false);
    };

    return <Dialog open={open} onClose={handleClose} >
        <Box sx={{border: "2px solid #00A000"}}>
            <DialogContent >
            <Typography variant="h6">
                {message}
            </Typography>
            </DialogContent>
            <DialogActions>
                <EventButton title="Zavřít" onClick={handleClose}/>
            </DialogActions>
        </Box>
    </Dialog>
}

export default TicketDialog;