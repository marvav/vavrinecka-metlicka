import React, {useState} from "react";
import {Box} from "@mui/material";
import {ButtonStyle1} from "../../buttons/StyledButtons.tsx";
import FootNote from "../../footnote/FootNote.tsx";
import EventItem from "./EventItem.tsx";
import {fetchBasicEvents} from "../../data/EventProvider.tsx";
import {EventBase} from "../../data/EventBase.tsx";

const EventPage: React.FC = () => {
    const events = fetchBasicEvents();
    const filteredEvents = events.filter(event => isEventInFuture(event));
    const [showPastEvents, setShowPastEvents] = useState(filteredEvents.length === 0);
    const displayedEvents = showPastEvents ? events : filteredEvents;

    return <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: {
            xs: "1em",
            sm: "3em",
            md: "9em",
            lg: "9em",
            xl: "15em"
        },
        paddingRight: {
            xs: "1em",
            sm: "3em",
            md: "9em",
            lg: "9em",
            xl: "15em"
        },
        gap: "1em",
        paddingBottom: "1em",
        flexGrow: "2"
    }}>
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: {
                    xl: displayedEvents.length > 1 ? "repeat(2, 1fr)" : "repeat(1, 1fr)",
                    lg: 'repeat(1, 1fr)',
                },
                width: {
                    xl: displayedEvents.length > 1 ? "100%" : "50%",
                    lg: "75%",
                    md: "100%",
                },
                justifyContent: "center",
                gap: "4em",
                paddingTop: "2em"
            }}>
            {displayedEvents.map((event) => (
                <EventItem {...event}/>
            ))}
        </Box>
        <Box sx={{flexGrow: 2, paddingTop: "2em"}}/>
        <Box sx={{display: "flex", justifyContent: "right", width: "100%"}}>
            <ButtonStyle1 onClick={() => setShowPastEvents(!showPastEvents)} title={
                showPastEvents ? "Skrýt minulé akce" : "Zobrazit minulé akce"
            }/>
        </Box>
        <FootNote/>
    </Box>
};

export default EventPage;

function isEventInFuture(event: EventBase){
    const today = new Date();
    return event.date.getFullYear() >= today.getFullYear()
        && event.date.getMonth() >= today.getMonth()
        && event.date.getDate() >= today.getDate();
}