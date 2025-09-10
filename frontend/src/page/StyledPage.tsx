import React from "react";
import {Box} from "@mui/material";
import metlicka_background from "../assets/images/metlicka_background.png";
import Typography from "@mui/material/Typography";
import MainBar from "./MainBar.tsx";
import {useLocation} from 'react-router-dom';
import {TypographyStyle2} from "../styles/TypographyStyles.tsx";
import {SecondaryBackground} from "../styles/ColorDefinitions.ts";
import {useEffect} from 'react';

interface StyledPageProps {
    title: string | undefined;
    content: React.ReactNode;
}

const StyledPage: React.FC<StyledPageProps> = (props) => {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return <Box sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: SecondaryBackground,
        backgroundImage: `url(${metlicka_background})`,
        alignItems: "center",
    }}>
        <MainBar/>
        <Box sx={{paddingTop: "5em"}}></Box>
        {props.title && <Typography sx={TypographyStyle2}>
            {props.title}
        </Typography>}
        {props.content}
    </Box>
}

export default StyledPage;