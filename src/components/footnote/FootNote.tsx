import React from 'react';
import {Box, Typography, Link} from "@mui/material";

const Footer: React.FC = () => {
    return <Box
        sx={{
            display: "flex",
            flexDirection: {md: "column", lg: "row"},
            gap: {md: "0.5em", lg: "2em"},
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
        }}
    >
        <Typography variant="body1">
            Email: {" "}
            <Link
                href="mailto:vavrinecka-metlicka@seznam.cz"
                sx={{
                    color: "#61dafb",
                    textDecoration: "None"
                }}
            >
                vavrinecka-metlicka@seznam.cz
            </Link>
        </Typography>
        <Typography variant="body1">
            Sledujte nás na Facebooku: {" "}
            <Link
                href="https://www.facebook.com/people/Vav%C5%99ineck%C3%A1-Metli%C4%8Dka/61554262512667/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                    color: "#61dafb",
                    textDecoration: "None"
                }}
            >
                Facebook
            </Link>
        </Typography>
        <Typography variant="body1">
            Autoři stránek: Marek Horský, Oliver Horský
        </Typography>
    </Box>;
};

export default Footer;
