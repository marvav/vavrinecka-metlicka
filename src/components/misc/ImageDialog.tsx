import {ImageListItem, Typography} from "@mui/material";
import StyledDialog from "./StyledDialog.tsx";

function ImageDialog(img: string | undefined, open: boolean, setOpen: Function) {
    const handleClose = () => {
        setOpen(false);
    };

    const content = <Typography variant="h6">
        <ImageListItem><img src={img} alt={""} loading="lazy"/></ImageListItem>
    </Typography>

    return <StyledDialog open={open} setOpen={handleClose} content={content}/>
}

export default ImageDialog;