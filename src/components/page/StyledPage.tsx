import React from "react";
import {Box} from "@mui/material";
import metlicka_background from "../../assets/images/metlicka_background.png";

interface StyledPageProps {
    content: React.ReactNode;
}

const StyledPage: React.FC<StyledPageProps> = (props) => {
    return <Box sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        bgcolor: 'background.default',
        backgroundImage: `url(${metlicka_background})`,
        paddingBottom: "2em"
    }}>
        {props.content}
    </Box>
}

export default StyledPage;