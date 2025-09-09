import React, {useState} from "react";
import {Box, Container, Grow, Typography} from "@mui/material";
import FootNote from "../../components/footnote/FootNote.tsx";
import EventItem from "./EventItem.tsx";
import {fetchBasicEvents} from "../../data/EventProvider.tsx";
import EventSearchBar from "./EventSearchBar.tsx";
import {isEventInFuture} from "./EventUtils.tsx";

const EventPage: React.FC = () => {
    const events = fetchBasicEvents();
    const [filteredItems, setFilteredItems] = useState(events);

    const handleSearch = (query: string, onlyUpcomingEvents: boolean) => {
        let results = events.filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase())
        );

        if (onlyUpcomingEvents) {
            results = results.filter((item) => isEventInFuture(item));
        }

        setFilteredItems(results);
    };

    return (
        <Box sx={{minHeight: '100vh'}}>
            <Container maxWidth="xl" sx={{
                py: {xs: 3, md: 5},
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4
            }}>

                <Box sx={{width: "100%", maxWidth: "800px"}}>
                    <EventSearchBar onChange={handleSearch}/>
                </Box>

                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "repeat(1, 1fr)",
                            sm: "repeat(2, 1fr)",
                            lg: "repeat(3, 1fr)",
                        },
                        width: "100%",
                        gap: 4,
                        mt: 2,
                    }}>
                    {filteredItems.length > 0 ? (
                        filteredItems.map((event, index) => (
                            <Grow in={true} timeout={200 * (index + 1)}>
                                <Box sx={{ height: '100%' }}>
                                    <EventItem key={event.id} {...event}/>
                                </Box>
                            </Grow>
                        ))
                    ) : (
                        <Typography sx={{gridColumn: '1 / -1', textAlign: 'center', mt: 5, color: 'text.secondary'}}>
                            Nebyly nalezeny žádné akce.
                        </Typography>
                    )}
                </Box>

                <Box sx={{flexGrow: 1}}/>
                <FootNote/>
            </Container>
        </Box>
    );
};

export default EventPage;