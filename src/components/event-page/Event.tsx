import {Box, ThemeProvider, useMediaQuery} from "@mui/material";
import {EventData} from "../data/EventData.tsx";
import event_theme from "./event-components/event_theme.ts";
import EventTitle from "./event-components/EventTitle.tsx";
import EventFields from "./event-components/EventFields.tsx";
import LinkBar from "../misc/LinkBar.tsx";
import EventButtonBar from "./event-components/EventButtonBar.tsx";
import EventPoster from "../misc/Image.tsx";
import Typography from "@mui/material/Typography";

export default Event;

function Event({
                   content, date, title, place, ticket_link, place_link, image,
                   time, photos_url, tracks
               }: EventData) {
    const isMobile = useMediaQuery(event_theme.breakpoints.down('lg'));
    const areTicketsBeingSold = date >= new Date() && tracks === undefined;
    return <ThemeProvider theme={event_theme}>
        <Box sx={{
            display: "flex",
            flexDirection: {xs: 'column', sm: 'row',},
            bgcolor: 'background.default',
            padding: {xs: event_theme.spacing(4), sm: event_theme.spacing(8)},
            borderRadius: "0.75em",
            width: "100%",
            justifyContent: "center",
        }}>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                paddingRight: {xs: 0, sm: event_theme.spacing(8)},
            }}>
                <EventTitle title={title}/>
                <EventFields date={date} time={time} place={place} placeLink={place_link}/>
                {tracks && <LinkBar title={"Odkazy na trasy"} linkMap={tracks}/>}
                <Typography sx={{fontWeight: "bold", fontSize: 16, paddingTop: "0.5em", paddingBottom: "0.5em"}}>Popis akce:</Typography>
                {content || "Bude upřesněno"}
                <Box sx={{flexGrow: 2, paddingBottom: "1em"}}/>
                <EventButtonBar image={image} photos_url={photos_url} ticket_url={ticket_link}
                                areTicketsAvailable={areTicketsBeingSold}/>
            </Box>
            <Box sx={{flexGrow: 2}}></Box>
            {(image && !isMobile) && <EventPoster image={image}/>}
        </Box>
    </ThemeProvider>;
}
