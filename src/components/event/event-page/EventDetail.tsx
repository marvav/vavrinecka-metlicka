import {Box} from "@mui/material";
import {Event} from "../../data/Event.tsx";
import event_theme from "../event-components/event_theme.ts";
import EventFields from "../event-components/EventFields.tsx";
import EventButtonBar from "../event-components/EventButtonBar.tsx";
import EventAffiliateBar from "../event-components/EventAffiliateBar.tsx";
import LinkBar from "../event-components/LinkBar.tsx";
import StyledDescription from "../../misc/StyledDescription.tsx";
import TrackLinkBar from "../../misc/TrackLinkBar.tsx";
import React from "react";
import {TypographyStyle2} from "../../../styles/TypographyStyles.tsx";
import Typography from "@mui/material/Typography";

export default EventDetail;

function EventDetail({date, title, place, links, pictures,
                         tracks, description, affiliates, eventLinks, banner
                     }: Event) {
    const areTicketsBeingSold = date >= new Date() && tracks === undefined;
    return <Box sx={{
            display: "flex",
            flexDirection: "column",
            borderRadius: "0.75em",
            width: "100%",
            boxShadow: '0 0 1px #000000, 0 0 1px #000000, 0 0 20px #000000, 0 0 50px #000000'
        }}>
            <Box component="img"
                 sx={{borderTopLeftRadius: "inherit", borderTopRightRadius: "inherit"}}
                 src={banner} loading="eager"/>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                background: '#111711',
                gap: {xs: event_theme.spacing(3), sm: event_theme.spacing(4)},
                padding: {xs: event_theme.spacing(3), sm: event_theme.spacing(6)},
            }}>
                <Typography sx={{textAlign: "left", ...TypographyStyle2}}>
                    {title}
                </Typography>
                <EventFields date={date} place={place} tracks={tracks}/>
                {tracks && <TrackLinkBar title={"Odkazy na trasy"} linkMap={tracks}/>}
                <StyledDescription paragraphs={description}/>
                <EventButtonBar pictures={pictures} links={links}/>
                {affiliates.length > 0 && <EventAffiliateBar affiliates={affiliates}/>}
                {eventLinks.length > 0 && <LinkBar title={"Akci najdete také na"} links={eventLinks}></LinkBar>}
            </Box>
            <Box sx={{flexGrow: 2}}></Box>
        </Box>
}
