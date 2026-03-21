import {fetchEvent} from "../../data/EventProvider.tsx";
import {Box, Breadcrumbs} from "@mui/material";
import {Link} from "react-router-dom";
import Typography from "@mui/material/Typography";
import {TypographyBreadCrumbStyle} from "../../styles/TypographyStyles.tsx";
import React from "react";

function EventTracksPage(id: string){
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
        <Typography>
            {event.title}
        </Typography>
        <Breadcrumbs sx={{width: "100%"}}>
            {event.tracks.map(track => {
                    return <Link to={track.url}>
                        <Typography sx={TypographyBreadCrumbStyle}>{track.name}</Typography>
                    </Link>
                }
            )}
        </Breadcrumbs>
    </Box>
}

export default EventDetailPage;