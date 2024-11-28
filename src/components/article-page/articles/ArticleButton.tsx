import {Button} from "@mui/material";
import {MouseEventHandler} from "react";

interface ArticleButtonProps {
    title: string;
    onClick?: MouseEventHandler | undefined;
}

function ArticleButton({title, onClick}: ArticleButtonProps) {
    return <Button sx={{width:'min-content'}} onClick={onClick}>
        {title}
    </Button>
}

export default ArticleButton;