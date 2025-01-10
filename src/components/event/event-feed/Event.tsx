import {Box, Button, ThemeProvider, useMediaQuery} from "@mui/material";
import {EventData} from "../../data/EventData.tsx";
import event_theme from "../event-components/event_theme.ts";
import EventTitle from "../event-components/EventTitle.tsx";
import EventFields from "../event-components/EventFields.tsx";
import {useNavigate} from "react-router-dom";

export default Event;

function Event({content, date, title, place, time, url_fragment, image, banner}: EventData) {
    const isMobile = useMediaQuery(event_theme.breakpoints.down('lg'));
    const navigate = useNavigate();
    return <ThemeProvider theme={event_theme}>
        <Button sx={{
            display: "flex",
            flexDirection: {xs: 'column'},
            bgcolor: 'background.default',
            borderRadius: "0.75em",
            padding: "0em",
            width: "100%",
            justifyContent: "center",
        }} onClick={() => navigate("/akce/"+url_fragment)}>
            <Box>
                <img width={"800px"} src={banner} alt={""} loading="lazy"/>
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                padding: {xs: event_theme.spacing(4), sm: event_theme.spacing(8)},
                gap: {xs: event_theme.spacing(2), sm: event_theme.spacing(2)},
            }}>
                <EventTitle title={title}/>
                <EventFields date={date} time={time} place={place}/>
                {isMobile ? <></> : <Box sx={{flexGrow: {xs: 0, sm: 2}}}/>}
            </Box>
            <Box sx={{flexGrow: 2}}></Box>
        </Button>
    </ThemeProvider>;
}
