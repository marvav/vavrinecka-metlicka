import React from "react";
import {Box} from "@mui/material";
import {EventData} from "../../data/EventData.tsx";
import Event from "./Event.tsx";

interface EventRowProps {
    events: EventData[];
}

const EventRow: React.FC<EventRowProps> = ({events}) => {
    return <Box sx={{
        display: "flex",
        flexDirection: {
            xs: "column",
            md: "column",
            lg: "row"
        },
        gap: "3em",
    }}>
        {events.map((article) => (
            <Event {...article}/>
        ))}
    </Box>;
};

export default EventRow;