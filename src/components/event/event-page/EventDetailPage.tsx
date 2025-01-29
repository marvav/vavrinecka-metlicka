import React from "react";
import {Box, Breadcrumbs} from "@mui/material";
import EventDetail from "./EventDetail.tsx";
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";
import {fetchEvent} from "../../data/EventProvider.tsx";

function EventDetailPage(id: string){
    const event = fetchEvent(id);
    return <Box sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        alignItems: "center",
        gap: "1em",
        width: {xl: "55%", lg: "65%", md: "85%", sm: "95%", xs: "95%"},
        paddingBottom: "4em",
        paddingTop: "1em",
    }}>
        <Breadcrumbs sx={{width: "100%"}}>
            <Link to={"/akce"}>
                🤘Akce
            </Link>
            <Typography>
                {event.title}
            </Typography>
        </Breadcrumbs>
        {EventDetail(event)}
    </Box>
}

export default EventDetailPage;