import React from "react";
import {Box, Link, Typography} from "@mui/material";
import facebook_logo from "../../assets/images/facebook_logo.png";
import Button from "@mui/material/Button";
import banner from "../../assets/graphics/banner.png";
import {TypographyStyle1, TypographyStyle2} from "../../styles/TypographyStyles.tsx";

const ContactPage: React.FC = () => {
    return <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        width: {sm: "40%", xs: "80%"},
        gap: "3em",
        paddingTop: "3em",
    }}>
        <Box
            component="img"
            sx={{
                borderRadius: "0.75em",
                width: '100%',
                height: 'auto',
            }}
            src={banner}
            loading="eager"
        />
        <Typography sx={TypographyStyle1}>
            Jsme parta přátel tvrdé hudby a pořádné turistiky.
        </Typography>
        <Typography sx={TypographyStyle1} variant="body1">
            Kontaktovat nás můžete na emailu  {" "}
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