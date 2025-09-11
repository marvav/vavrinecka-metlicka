import React, {useEffect} from "react";
import {Box} from "@mui/material";
import metlicka_background from "../assets/images/metlicka_background.png";
import Typography from "@mui/material/Typography";
import MainBar from "./MainBar.tsx";
import {useLocation} from 'react-router-dom';
import {TypographyStyle2} from "../styles/TypographyStyles.tsx";
import FootNote from "../components/footnote/FootNote.tsx";

interface StyledPageProps {
    title: string | undefined;
    content: React.ReactNode;
}

const StyledPage: React.FC<StyledPageProps> = (props) => {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return <Box sx={{background: 'linear-gradient(45deg, #121212 30%, #282828 90%)',}}>
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            backgroundImage: `url(${metlicka_background})`,
            alignItems: "center",
        }}>
            <MainBar/>
            {props.title && <Box sx={{paddingTop: "10vh"}}></Box>}
            {props.title && <Typography sx={TypographyStyle2}>
                {props.title}
            </Typography>}
            {props.content}
            <FootNote/>
        </Box>
    </Box>
}

export default StyledPage;