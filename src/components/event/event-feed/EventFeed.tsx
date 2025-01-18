import React from "react";
import {Box} from "@mui/material";
import {EventData} from "../../data/EventData.tsx";
import Event from "./Event.tsx";
import EventRow from "./EventRow.tsx";

interface FeedProps {
    events: EventData[];
}

const EventFeed: React.FC<FeedProps> = ({events}) => {
    const eventRows = groupByThree(events);
    return <Box sx={{
        display: "flex",
        flexDirection: "column",
        gap: "3em",
        paddingBottom: "1em",
    }}>
        {eventRows.map((eventRow) => (
            <EventRow events={eventRow}/>
        ))}
    </Box>;
};

export default EventFeed;

function groupByThree<T>(array: T[]): T[][] {
    const grouped: T[][] = [];

    for (let i = 0; i < array.length; i += 2) {
        grouped.push(array.slice(i, i + 2));
    }

    return grouped;
}