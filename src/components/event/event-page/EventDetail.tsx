import {Box, ThemeProvider} from "@mui/material";
import {EventData} from "../../data/EventData.tsx";
import event_theme from "../event-components/event_theme.ts";
import EventTitle from "../event-components/EventTitle.tsx";
import EventFields from "../event-components/EventFields.tsx";
import TrackLinkBar from "../../misc/TrackLinkBar.tsx";
import EventButtonBar from "../event-components/EventButtonBar.tsx";
import EventAffiliateBar from "../event-components/EventAffiliateBar.tsx";
import LinkBar from "../event-components/LinkBar.tsx";
import Typography from "@mui/material/Typography";

export default EventDetail;

function EventDetail({
                         content, date, title, place, links, pictures,
                         time, tracks, affiliates, eventLinks, banner
                     }: EventData) {
    const areTicketsBeingSold = date >= new Date() && tracks === undefined;
    return <ThemeProvider theme={event_theme}>
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            borderRadius: "0.75em",
            width: {xl: "55%", lg: "65%", md: "85%", sm: "95%", xs: "95%"},
            boxShadow: '0 0 1px #000000, 0 0 1px #000000, 0 0 20px #000000, 0 0 50px #000000',
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
                <EventTitle title={title}/>
                <EventFields date={date} time={time} place={place}/>
                {tracks && <TrackLinkBar title={"Odkazy na trasy"} linkMap={tracks}/>}
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: {xs: event_theme.spacing(3), sm: event_theme.spacing(4)},
                }}>
                    {content
                        ? content.map(text => <Typography>{text}</Typography>)
                        : "Bude upřesněno"}
                </Box>
                <EventButtonBar pictures={pictures} links={links} areTicketsAvailable={areTicketsBeingSold}/>
                {eventLinks.length > 0 && <LinkBar title={"Akci najdete také na"} links={eventLinks}></LinkBar>}
                {affiliates.length > 0 && <EventAffiliateBar affiliates={affiliates}/>}
            </Box>
            <Box sx={{flexGrow: 2}}></Box>
        </Box>
    </ThemeProvider>
}
