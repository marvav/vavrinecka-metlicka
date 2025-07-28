import {Box, Button, Dialog} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {PrimaryBackground} from "../../styles/ColorDefinitions.ts";

interface StyledDialogProps {
    open: boolean
    setOpen: Function
    content: string | JSX.Element
}

function StyledDialog({open, setOpen, content}: StyledDialogProps) {
    return <Dialog maxWidth={"md"} open={open} onClose={() => setOpen(false)}>
        <Box sx={{border: "1px solid #00A000", backgroundColor: PrimaryBackground}}>
            {content}
            <Button style={{position: 'absolute',top: 8,right: 8, padding: "none"}} onClick={() => setOpen(false)}>
                <CloseIcon style={{
                    stroke: 'black',
                    strokeWidth: 1.5,
                    color: 'black',
                    backgroundColor: 'white',
                    opacity: '0.85',
                    borderRadius: "0.25em"
                }}/>
            </Button>
        </Box>
    </Dialog>
}

export default StyledDialog;