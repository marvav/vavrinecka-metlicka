import React from "react";
import {Box} from "@mui/material";
import metlicka_background from "../../assets/images/metlicka_background.png";
import Typography from "@mui/material/Typography";

interface StyledPageProps {
    title: string | undefined;
    content: React.ReactNode;
}

const StyledPage: React.FC<StyledPageProps> = (props) => {
    return <Box sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        bgcolor: 'background.default',
        backgroundImage: `url(${metlicka_background})`,
        paddingBottom: "2em",
        alignItems: "center",
    }}>
        {props.title && <Typography sx={{
            fontWeight: "bold",
            fontSize: 36,
            paddingTop: {sm: "3.5em", xs: "2em"},
            paddingBottom: "0.5em"
        }}>{props.title}</Typography>}
        {props.content}
    </Box>
}

export default StyledPage;