import {MouseEventHandler} from 'react';
import {Button} from "@mui/material";

interface MainBarElementProps {
    title: string
    onClick?: MouseEventHandler | undefined;
}

function MainBarElement({title, onClick}: MainBarElementProps) {
    return <Button onClick={onClick}>
        {title}
    </Button>
};

export default MainBarElement;