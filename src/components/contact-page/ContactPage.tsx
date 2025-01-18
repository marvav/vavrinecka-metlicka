import React from "react";
import {Box} from "@mui/material";
import facebook_logo from "../../assets/images/facebook_logo.png";
import Button from "@mui/material/Button";

const ContactPage: React.FC = () => {
    return <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        width: {sm: "40%", xs: "80%"},
        gap: "3em"
    }}>
        V případě dotazů pište na email vavrinecka-metlicka@seznam.cz, případně rovnou na naše Facebookové stránky.
        <Button sx={{
            borderTopLeftRadius: "0.75em",
            borderTopRightRadius: "0.75em",
            width: {sm: "40%", xs: "70%"},
        }}
                onClick={() => window.open("https://www.facebook.com/profile.php?id=61554262512667", '_blank')}>
            <Box
                sx={{
                    width: '100%',
                }}
                component="img"
                src={facebook_logo}
                loading="eager"
            />
        </Button>
    </Box>
}

export default ContactPage;