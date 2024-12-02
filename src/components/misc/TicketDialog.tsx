import {Typography} from "@mui/material";
import StyledDialog from "./StyledDialog.tsx";

function TicketDialog(message: string | undefined, open: boolean, setOpen: Function) {
    const handleClose = () => {
        setOpen(false);
    };

    const content = <Typography variant="h6">
        {message}
    </Typography>

    return <StyledDialog open={open} setOpen={handleClose} content={content}/>
}

export default TicketDialog;