import React, {useState} from "react";
import {Box} from "@mui/material";
import {predefinedEvents} from "../../data/EventProvider.tsx";
import {ButtonStyle1} from "../../buttons/StyledButtons.tsx";
import FootNote from "../../footnote/FootNote.tsx";
import Event from "./Event.tsx";

const EventPage: React.FC = () => {
    const [showPastEvents, setShowPastEvents] = useState(false);
    const displayedEvents = showPastEvents
        ? predefinedEvents
        : predefinedEvents.filter(event => event.date >= new Date());

    return <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: {
            xs: "1em",
            sm: "3em",
            md: "9em",
            lg: "15em"
        },
        paddingRight: {
            xs: "1em",
            sm: "3em",
            md: "9em",
            lg: "15em"
        },
        gap: "1em",
        paddingBottom: "1em",
        height: "100%"
    }}>
        <Box sx={{display: "flex", justifyContent: "right", width: "100%"}}>
            <ButtonStyle1 onClick={() => setShowPastEvents(!showPastEvents)} title={
                showPastEvents ? "Skrýt minulé akce" : "Zobrazit minulé akce"
            }/>
        </Box>
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
                gap: "4em"
            }}>
            {displayedEvents.map((event) => (
                <Event {...event}/>
            ))}
        </Box>
        <Box sx={{flexGrow: 2, paddingTop: "2em"}}/>
        <FootNote/>
    </Box>
};

export default EventPage;