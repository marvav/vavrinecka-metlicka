import {Box} from "@mui/material";
import {Event} from "../../data/Event.tsx";
import event_theme from "../../components/event-components/event_theme.ts";
import EventFields from "../../components/event-components/EventFields.tsx";
import EventButtonBar from "../../components/event-components/EventButtonBar.tsx";
import EventAffiliateBar from "../../components/event-components/EventAffiliateBar.tsx";
import LinkBar from "../../components/event-components/LinkBar.tsx";
import StyledDescription from "../../components/text-components/StyledDescription.tsx";
import React from "react";
import {TypographyStyle2} from "../../styles/TypographyStyles.tsx";
import Typography from "@mui/material/Typography";

export default EventDetail;

function EventDetail(event: Event) {
    return <Box sx={{
            display: "flex",
            flexDirection: "column",
            borderRadius: "0.75em",
            width: "100%",
            boxShadow: '0 0 1px #000000, 0 0 1px #000000, 0 0 20px #000000, 0 0 50px #000000'
        }}>
            <Box component="img"
                 sx={{borderTopLeftRadius: "inherit", borderTopRightRadius: "inherit"}}
                 src={event.banner} loading="eager"/>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                background: '#111711',
                gap: {xs: event_theme.spacing(3), sm: event_theme.spacing(4)},
                padding: {xs: event_theme.spacing(3), sm: event_theme.spacing(6)},
            }}>
                <Typography sx={{textAlign: "left", ...TypographyStyle2}}>
                    {event.title}
                </Typography>
                <EventFields date={event.date} place={event.place}/>
                {event.tracks.length > 0 && <LinkBar title={"Odkazy na trasy"} links={event.tracks}/>}
                <StyledDescription paragraphs={event.description}/>
                <EventButtonBar event={event}/>
                {event.affiliates.length > 0 && <EventAffiliateBar affiliates={event.affiliates}/>}
            </Box>
            <Box sx={{flexGrow: 2}}/>
        </Box>
}
