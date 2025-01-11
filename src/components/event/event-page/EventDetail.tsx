import {Box, ThemeProvider, useMediaQuery} from "@mui/material";
import {EventData} from "../../data/EventData.tsx";
import event_theme from "../event-components/event_theme.ts";
import EventTitle from "../event-components/EventTitle.tsx";
import EventFields from "../event-components/EventFields.tsx";
import TrackLinkBar from "../../misc/TrackLinkBar.tsx";
import EventButtonBar from "../event-components/EventButtonBar.tsx";
import EventPoster from "../../misc/Image.tsx";
import EventAffiliateBar from "../event-components/EventAffiliateBar.tsx";
import LinkBar from "../event-components/LinkBar.tsx";

export default EventDetail;

function EventDetail({content, date, title, place, ticket_link, image,
                   time, photos_url, tracks, affiliates, eventLinks, banner
               }: EventData) {
    const isMobile = useMediaQuery(event_theme.breakpoints.down('lg'));
    const areTicketsBeingSold = date >= new Date() && tracks === undefined;
    return <ThemeProvider theme={event_theme}>
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            bgcolor: 'background.default',
            borderRadius: "0.75em",
            width: "min-content",
            paddingTop: event_theme.spacing(16),
        }}>
            <Box>
                <img width={"800px"} src={banner} alt={""} loading="lazy"/>
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: {xs: event_theme.spacing(2), sm: event_theme.spacing(2)},
                padding: event_theme.spacing(4),
            }}>
                <EventTitle title={title}/>
                <EventFields date={date} time={time} place={place}/>
                {tracks && <TrackLinkBar title={"Odkazy na trasy"} linkMap={tracks}/>}
                {content || "Bude upřesněno"}
                <EventButtonBar image={image} photos_url={photos_url} ticket_url={ticket_link}
                                areTicketsAvailable={areTicketsBeingSold}/>
                {eventLinks.length > 0 && <LinkBar title={"Akci najdete také na"} links={eventLinks}></LinkBar>}
                {affiliates.length > 0 && <EventAffiliateBar affiliates={affiliates}/>}
            </Box>
            <Box sx={{flexGrow: 2}}></Box>
            {(false && image && !isMobile) && <EventPoster image={image}/>}
        </Box>
    </ThemeProvider>
}
