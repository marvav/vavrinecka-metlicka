import {Box, ThemeProvider, useMediaQuery} from "@mui/material";
import {EventData} from "../data/EventData.tsx";
import event_theme from "./event-components/event_theme.ts";
import EventTitle from "./event-components/EventTitle.tsx";
import EventFields from "./event-components/EventFields.tsx";
import LinkBar from "../misc/LinkBar.tsx";
import EventButtonBar from "./event-components/EventButtonBar.tsx";
import EventPoster from "../misc/Image.tsx";

export default Event;

function Event({content, date, title, place, ticket_link, place_link, image,
                     time, photos_url, tracks}: EventData) {
    const isMobile = useMediaQuery(event_theme.breakpoints.down('lg'));
    return <ThemeProvider theme={event_theme}>
        <Box sx={{
            display: "flex",
            flexDirection: {xs: 'column', sm: 'row',},
            bgcolor: 'background.default',
            borderStyle: "outset",
            borderWidth: "2px",
            borderColor: "#00A000",
            padding: {xs: event_theme.spacing(4), sm: event_theme.spacing(8)},
            borderRadius: "0.75em"
        }}>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                paddingRight: {xs: 0, sm: event_theme.spacing(8)},
            }}>
                <EventTitle title={title}/>
                <EventFields date={date} time={time} place={place} placeLink={place_link}/>
                {tracks && <LinkBar title={"Trasy"} linkMap={tracks}/>}
                <h3>Popis akce:</h3>
                {content || "Bude upřesněno"}
                <Box sx={{flexGrow: 2, paddingBottom: "1em"}}/>
                <EventButtonBar image={image} photos_url={photos_url} ticket_url={ticket_link}
                                  areTicketsAvailable={date >= new Date()}/>
            </Box>
            {(image && !isMobile) && <EventPoster image={image}/>}
        </Box>
    </ThemeProvider>;
}
