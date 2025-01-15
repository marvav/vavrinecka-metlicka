import {Box, Button, Dialog} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

interface StyledDialogProps {
    open: boolean
    setOpen: Function
    content: string | JSX.Element
}

function StyledDialog({open, setOpen, content}: StyledDialogProps) {
    return <Dialog open={open} onClose={() => setOpen(false)}>
        <Box style={{position: 'relative'}} sx={{position: 'relative', border: "1px solid #00A000"}}>
            {content}
            <Box
                style={{
                    position: 'absolute',
                    top: 8,
                    right: 8
                }}
            >
                <Button style={{padding: "none"}} onClick={() => {
                    setOpen(false)
                }}>
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
        </Box>
    </Dialog>
}

export default StyledDialog;