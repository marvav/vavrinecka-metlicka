import React from "react";
import {Box, Breadcrumbs, Link} from "@mui/material";
import {Event} from "../../data/Event.tsx";
import EventDetail from "./EventDetail.tsx";
import Typography from "@mui/material/Typography";
import {useNavigate} from "react-router-dom";

interface EventDetailPageProps {
    event: Event
}

const EventDetailPage: React.FC<EventDetailPageProps> = (props) => {
    const navigate = useNavigate();
    return <Box sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        alignItems: "center",
        gap: "1em",
        width: {xl: "55%", lg: "65%", md: "85%", sm: "95%", xs: "95%"},
        paddingBottom: "4em",
        paddingTop: "6em",
    }}>
        <Breadcrumbs sx={{width: "100%"}}>
            <Link underline="hover" color="inherit" onClick={() => navigate("/akce")}>
                Akce
            </Link>
            <Typography>
                {props.event.title}
            </Typography>
        </Breadcrumbs>
        <EventDetail {...props.event}/>
    </Box>
}

export default EventDetailPage;