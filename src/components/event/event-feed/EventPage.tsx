import React, {useState} from "react";
import MainBar from "../../page/MainBar.tsx";
import {Box} from "@mui/material";
import {predefinedEvents} from "../../data/EventProvider.tsx";
import {EventButton} from "../../buttons/EventButtons.tsx";
import FootNote from "../../footnote/FootNote.tsx";
import Event from "./Event.tsx";

interface EventPageProps {
    includePast: boolean;
    title: string
}

const EventPage: React.FC<EventPageProps> = (props) => {
    const [showPastEvents, setShowPastEvents] = useState(false);
    const relevantEvents = predefinedEvents.filter(event => event.date >= new Date());
    const displayedEvents = showPastEvents ? predefinedEvents : relevantEvents;
    return <Box>
    <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: {
                xs: "3em",
                sm: "4em"
            },
            paddingTop: "0em", paddingBottom: "0em",
            gap: "1em"
        }}>
            <Box sx={{display: "flex", justifyContent: "right", width: "100%"}}>
                <EventButton onClick={() => setShowPastEvents(!showPastEvents)} title={
                    showPastEvents ? "Skrýt minulé akce" : "Zobrazit minulé akce"
                }/>
            </Box>
            <Box
                sx={{
                    display: "grid", gridTemplateColumns: {
                        sm: displayedEvents.length > 1 ? "repeat(2, 1fr)" : "repeat(1, 1fr)",
                        xs: "repeat(1, 1fr)"
                    },
                    width: {
                        sm: displayedEvents.length > 1 ? "100%" : "50%",
                        xs: "100%"
                    },
                    justifyContent: "center",
                    gap: "4em"
                }}>
                {displayedEvents.map((event) => (
                    <Event {...event}/>
                ))}
            </Box>
            <Box sx={{flexGrow: 2, paddingTop: "2em"}}/>
            
            </Box>
            <FootNote/>
    </Box>;
};

export default EventPage;