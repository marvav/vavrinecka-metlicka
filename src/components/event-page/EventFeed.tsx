import React from "react";
import {Box} from "@mui/material";
import {EventData} from "../data/EventData.tsx";
import FootNote from "../footnote/FootNote.tsx";
import Typography from "@mui/material/Typography";
import Event from "./Event.tsx";

interface FeedProps {
    title: string
    events: EventData[];
}

const EventFeed: React.FC<FeedProps> = ({title, events}) => {
    return <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "2em",
    }}
    >
        <Typography sx={{fontWeight: "bold", fontSize: 36, padding: "1em"}}>{title}</Typography>
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: "3em",
            paddingBottom: "1em"
        }}>
            {events.map((article) => (
                <Event {...article}/>
            ))}
        </Box>
        <FootNote/>
    </Box>;
};

export default EventFeed;