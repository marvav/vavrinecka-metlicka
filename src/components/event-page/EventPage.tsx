import React, {useState} from "react";
import MainBar from "../page/MainBar.tsx";
import {Box, useMediaQuery} from "@mui/material";
import metlicka_background from "../../assets/images/metlicka_background.png";
import SideGraphic from "../page/SideGraphic.tsx";
import EventFeed from "./EventFeed.tsx";
import {predefinedEvents} from "../data/EventProvider.tsx";
import page_common_theme from "../../themes/page_common_theme.ts";
import {EventButton} from "../buttons/EventButtons.tsx";
import Typography from "@mui/material/Typography";
import FootNote from "../footnote/FootNote.tsx";

interface EventPageProps {
    includePast: boolean;
    title: string
}

const EventPage: React.FC<EventPageProps> = (props) => {
    const isMobile = useMediaQuery(page_common_theme.breakpoints.down('sm'));
    const [showPastEvents, setShowPastEvents] = useState(false);
    const relevantEvents = predefinedEvents.filter(event => event.date >= new Date());
    const oldEvents = predefinedEvents.filter(event => event.date < new Date());

    return <Box sx={{
        bgcolor: 'background.default',
        height: '100vh',
        overflow: "scroll"
    }}>
        <MainBar/>
        <Box sx={{
            display: "flex",
            padding: "1em",
            backgroundImage: `url(${metlicka_background})`,
        }}>
            {isMobile ? <div/> : <SideGraphic/>}
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Typography sx={{fontWeight: "bold", fontSize: 36, paddingTop: "2em", paddingBottom: "0.5em"}}>{props.title}</Typography>
                <EventFeed events={relevantEvents}/>
                <Box sx={{marginTop: "15px", display: "flex", justifyContent: "right", width: "100%"}}>
                    <EventButton onClick={() => setShowPastEvents(!showPastEvents)} title={
                        showPastEvents ? "Skrýt minulé akce" : "Zobrazit minulé akce"
                    }/>
                </Box>
                {showPastEvents && <EventFeed events={oldEvents}></EventFeed>}
                <FootNote/>
            </Box>
            {isMobile ? <div/> : <SideGraphic/>}
        </Box>
    </Box>;
};

export default EventPage;