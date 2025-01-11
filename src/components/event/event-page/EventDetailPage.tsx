import React from "react";
import {Box} from "@mui/material";
import MainBar from "../../page/MainBar.tsx";
import metlicka_background from "../../../assets/images/metlicka_background.png";
import {EventData} from "../../data/EventData.tsx";
import Event from "../event-feed/Event.tsx";
import EventDetail from "./EventDetail.tsx";

interface EventDetailPageProps {
    event: EventData
}

const EventDetailPage: React.FC<EventDetailPageProps> = (props) => {
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
        <Box sx={{paddingTop: "5em"}}>
            <EventDetail {...props.event}/>
        </Box>
    </Box>
}

export default EventDetailPage;