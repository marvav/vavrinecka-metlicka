import React from 'react';
import {Box, Typography, Link} from "@mui/material";

const ContactNote: React.FC = () => {
    return <Box
        sx={{
            display: "flex",
            flexDirection: {xs: "column", sm: "column",md: "column", lg: "row"},
            gap: {xs: "0.5em", sm: "0.5em", md: "0.5em", lg: "2em"},
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
        }}
    >
        <Typography variant="body1">
            V případě dotazů nás neváhejte kontaktovat na {" "}
            <Link
                href="mailto:vavrinecka-metlicka@seznam.cz"
                target="_blank"
                sx={{
                    color: "#61dafb",
                    textDecoration: "None"
                }}
            >
                vavrinecka-metlicka@seznam.cz
            </Link>
        </Typography>
    </Box>;
};

export default ContactNote;
