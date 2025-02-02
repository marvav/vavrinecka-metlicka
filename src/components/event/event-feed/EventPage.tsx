import React, {useState} from "react";
import {Box} from "@mui/material";
import {ButtonStyle1} from "../../buttons/StyledButtons.tsx";
import FootNote from "../../footnote/FootNote.tsx";
import EventItem from "./EventItem.tsx";
import {fetchBasicEvents} from "../../../data/EventProvider.tsx";
import SearchBar from "./SearchBar.tsx";
import {isEventInFuture} from "../EventUtils.tsx";

const EventPage: React.FC = () => {
    const events = fetchBasicEvents();

    const [filteredItems, setFilteredItems] = useState(events);

    const handleSearch = (query: string) => {
        const results = events.filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredItems(results);
    };

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
            xl: "12em"
        },
        paddingRight: {
            xs: "1em",
            sm: "3em",
            md: "9em",
            lg: "9em",
            xl: "12em"
        },
        gap: "1em",
        paddingBottom: "1em",
        flexGrow: "2"
    }}>
        <Box sx={{paddingTop: "1.5em", width: "100%"}}>
            <SearchBar onSearch={handleSearch}/>
        </Box>
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: {
                    xl: "repeat(3, 1fr)",
                    lg: 'repeat(2, 1fr)',
                    md: 'repeat(1, 1fr)',
                },
                width: "100%",
                justifyContent: "center",
                gap: "2.5em",
                paddingTop: "2em"
            }}>
            {filteredItems.map((event) => (
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