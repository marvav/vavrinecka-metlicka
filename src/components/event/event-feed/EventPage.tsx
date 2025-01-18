import React, {useState} from "react";
import MainBar from "../../page/MainBar.tsx";
import {Box, Grid, useMediaQuery} from "@mui/material";
import metlicka_background from "../../../assets/images/metlicka_background.png";
import SideGraphic from "../../page/SideGraphic.tsx";
import EventFeed from "./EventFeed.tsx";
import {predefinedEvents} from "../../data/EventProvider.tsx";
import page_common_theme from "../../../themes/page_common_theme.ts";
import {EventButton} from "../../buttons/EventButtons.tsx";
import Typography from "@mui/material/Typography";
import FootNote from "../../footnote/FootNote.tsx";
import Event from "./Event.tsx";

interface EventPageProps {
    includePast: boolean;
    title: string
}

const EventPage: React.FC<EventPageProps> = (props) => {
    const isMobile = useMediaQuery(page_common_theme.breakpoints.down('sm'));
    const [showPastEvents, setShowPastEvents] = useState(false);
    const relevantEvents = predefinedEvents.filter(event => event.date >= new Date());
    const oldEvents = predefinedEvents.filter(event => event.date < new Date());
    const displayedEvents = showPastEvents ? predefinedEvents : relevantEvents;
    return <Box>
        <MainBar/>
        <Box sx={{marginTop: "15px", justifyContent: "right", width: "50%", paddingRight: "2em"}}>
            <EventButton onClick={() => setShowPastEvents(!showPastEvents)} title={
                showPastEvents ? "Skrýt minulé akce" : "Zobrazit minulé akce"
            }/>
        </Box>
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            padding: {
                sm: "1em",
                xs: "0em"
            },
            height: '100%',
        }}>
            <Box
                display="grid"
                gridTemplateColumns="repeat(2, 1fr)"
                gap={2} // Gap between the grid items
            >
                {displayedEvents.map((event) => (
                    <Event {...event}/>
                ))}
            </Box>
            <FootNote/>
        </Box>
    </Box>;
};

export default EventPage;