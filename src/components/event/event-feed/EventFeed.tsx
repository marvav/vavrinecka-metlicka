import React from "react";
import {Box} from "@mui/material";
import {EventData} from "../../data/EventData.tsx";
import Event from "./Event.tsx";

interface FeedProps {
    events: EventData[];
}

const EventFeed: React.FC<FeedProps> = ({events}) => {
    return <Box sx={{
        flexDirection: "column",
        display: 'flex',
    }}>
        <Box sx={{
            display: "flex",
            flexDirection: {
                xs: "column",
                md: "column",
                lg: "row"
            },
            gap: "3em",
            paddingBottom: "1em",
        }}>
            {events.map((article) => (
                <Event {...article}/>
            ))}
        </Box>
    </Box>;
};

export default EventFeed;