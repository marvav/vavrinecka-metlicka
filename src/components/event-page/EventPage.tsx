import React from "react";
import MainBar from "../page/MainBar.tsx";
import {Box, useMediaQuery} from "@mui/material";
import metlicka_background from "../../assets/images/metlicka_background.png";
import SideGraphic from "../page/SideGraphic.tsx";
import EventFeed from "./EventFeed.tsx";
import {predefinedEvents} from "../data/EventProvider.tsx";
import page_common_theme from "../../themes/page_common_theme.ts";

interface EventPageProps {
    includePast: boolean;
    title: string
}

const EventPage: React.FC<EventPageProps> = (props) => {
    const isMobile = useMediaQuery(page_common_theme.breakpoints.down('sm'));
    const events = props.includePast
        ? predefinedEvents.filter(event => event.date < new Date())
        : predefinedEvents.filter(event => event.date >= new Date())

    return <Box sx={{
        bgcolor: 'background.default',
        height: '100vh',
        overflow: "scroll"
    }}>
        <MainBar/>
        <Box sx={{
            display: "flex",
            padding: "2em",
            backgroundImage: `url(${metlicka_background})`,
        }}>
            {isMobile ? <div/> : <SideGraphic/>}
            <EventFeed title={props.title} events={events}/>
            {isMobile ? <div/> : <SideGraphic/>}
        </Box>
    </Box>;
};

export default EventPage;