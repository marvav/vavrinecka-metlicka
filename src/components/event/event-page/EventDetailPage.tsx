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
        bgcolor: 'background.default',
        height: '100vh',
        overflow: "scroll"
    }}>
        <MainBar/>
        <Box sx={{
            padding: "2em",
        }}/>
        <Box sx={{
            display: "flex",
            padding: "1em",
            backgroundImage: `url(${metlicka_background})`,
        }}>
            <EventDetail {...props.event}/>;
        </Box>
    </Box>;
};

export default EventDetailPage;