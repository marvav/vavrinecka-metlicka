import {Box} from "@mui/material";
import StyledDialog from "./StyledDialog.tsx";

function TicketDialog(message: string | undefined, open: boolean, setOpen: Function) {
    const handleClose = () => {
        setOpen(false);
    };

    const content = <Box sx={{display: "flex", flexDirection: "column", paddingBottom: "1em", textAlign: "center"}}>
        <h3>Vstupenky</h3>
        {message}
    </Box>

    return <StyledDialog open={open} setOpen={handleClose} content={content}/>
}

export default TicketDialog;