import React, {useState} from "react";
import {Box} from "@mui/material";
import FootNote from "../../footnote/FootNote.tsx";
import EventItem from "./EventItem.tsx";
import {fetchBasicEvents} from "../../../data/EventProvider.tsx";
import EventSearchBar from "./EventSearchBar.tsx";
import {isEventInFuture} from "../EventUtils.tsx";

const EventPage: React.FC = () => {
    const events = fetchBasicEvents();
    const [filteredItems, setFilteredItems] = useState(events);

    const handleSearch = (query: string, onlyUpcomingEvents: boolean) => {
        let results = events.filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase())
        )

        if(onlyUpcomingEvents){
            results = results.filter((item) => isEventInFuture(item));
        }

        console.log(query);
        setFilteredItems(results);
    };

    return <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: {
            xs: "1em",
            sm: "3em",
            md: "5em",
            lg: "7em",
            xl: "9em"
        },
        paddingRight: {
            xs: "1em",
            sm: "3em",
            md: "5em",
            lg: "7em",
            xl: "9em"
        },
        gap: "1em",
        paddingBottom: "1em",
        flexGrow: "2",
        width: "100%"
    }}>
        <Box sx={{paddingTop: "1.5em", width: "100%"}}>
            <EventSearchBar onChange={handleSearch}/>
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
        <FootNote/>
    </Box>
};

export default EventPage;