import React from "react";
import {Box, Breadcrumbs, Button, Link} from "@mui/material";
import MainBar from "../../page/MainBar.tsx";
import metlicka_background from "../../../assets/images/metlicka_background.png";
import {EventData} from "../../data/EventData.tsx";
import EventDetail from "./EventDetail.tsx";
import Typography from "@mui/material/Typography";
import {useNavigate} from "react-router-dom";

interface EventDetailPageProps {
    event: EventData
}

const EventDetailPage: React.FC<EventDetailPageProps> = (props) => {
    const navigate = useNavigate();
    return <Box sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        bgcolor: 'background.default',
        backgroundImage: `url(${metlicka_background})`,
        overflow: "scroll",
        alignItems: "center",
    }}>
        <MainBar/>
        <Box sx={{paddingLeft: "1.5em", paddingTop: "5.25em", width: "100%"}}>
            <Breadcrumbs>
                <Link underline="hover" color="inherit" onClick={() => navigate("/akce")}>
                    Akce
                </Link>
                <Typography>
                    {props.event.title}
                </Typography>
            </Breadcrumbs>
        </Box>
        <Box sx={{paddingTop: "1em"}}>
            <EventDetail {...props.event}/>
        </Box>
    </Box>
}

export default EventDetailPage;