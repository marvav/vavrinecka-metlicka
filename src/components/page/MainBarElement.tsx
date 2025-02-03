import {MouseEventHandler} from 'react';
import {Button} from "@mui/material";
import {TypographyStyle1} from "../../styles/TypographyStyles.tsx";

interface MainBarElementProps {
    title: string
    onClick?: MouseEventHandler | undefined;
}

function MainBarElement({title, onClick}: MainBarElementProps) {
    return <Button sx={TypographyStyle1} onClick={onClick} width={"100%"}>
        {title}
    </Button>
}

export default MainBarElement;