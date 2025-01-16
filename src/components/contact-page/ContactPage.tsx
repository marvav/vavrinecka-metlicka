import React from "react";
import {Box} from "@mui/material";
import MainBar from "../page/MainBar.tsx";

const ContactPage: React.FC = () => {
    return <>
        <MainBar/>
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
        </Box>
    </>
}

export default ContactPage;