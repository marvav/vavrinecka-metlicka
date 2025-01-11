import React from "react";
import {Box} from "@mui/material";
import {EventData} from "../../data/EventData.tsx";
import Event from "./Event.tsx";

interface FeedProps {
    events: EventData[];
}

const EventFeed: React.FC<FeedProps> = ({events}) => {
    return <Box sx={{
        display: "flex",
        flexDirection: {
            xs: "column",
            md: "column"
        },
        paddingTop: "2em",
    }}>
        <Box sx={{
            display: "flex",
            flexDirection: {
                xs: "column",
                md: "column",
                lg: "row"
            },
            gap: "3em",
            padding: {
                xs: "0em",
                sm: "0em",
            },
            paddingBottom: "1em",
        }}>
            {events.map((article) => (
                <Event {...article}/>
            ))}
        </Box>
    </Box>;
};

export default EventFeed;