import React from "react";
import {Box} from "@mui/material";
import {EventData} from "../data/EventData.tsx";
import FootNote from "../footnote/FootNote.tsx";
import Event from "./Event.tsx";

interface FeedProps {
    events: EventData[];
}

const EventFeed: React.FC<FeedProps> = ({events}) => {
    return <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "2em",
        width: {
            sm: "50%",
            xs: "100%"
        }
    }}
    >
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: "3em",
            paddingBottom: "1em",
        }}>
            {events.map((article) => (
                <Event {...article}/>
            ))}
        </Box>
        <FootNote/>
    </Box>;
};

export default EventFeed;