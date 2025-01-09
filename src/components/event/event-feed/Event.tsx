import {Box, ThemeProvider, useMediaQuery} from "@mui/material";
import {EventData} from "../../data/EventData.tsx";
import event_theme from "../event-components/event_theme.ts";
import EventTitle from "../event-components/EventTitle.tsx";
import EventFields from "../event-components/EventFields.tsx";
import Typography from "@mui/material/Typography";
import {NavigateFunction, useNavigate} from "react-router-dom";
import {EventButton} from "../../buttons/EventButtons.tsx";

export default Event;

function Event({content, date, title, place, time, url_fragment}: EventData) {
    const isMobile = useMediaQuery(event_theme.breakpoints.down('lg'));
    const navigate = useNavigate();
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
                gap: {xs: event_theme.spacing(2), sm: event_theme.spacing(2)},
            }}>
                <EventTitle title={title}/>
                <EventFields date={date} time={time} place={place}/>
                <Typography sx={{fontWeight: "bold", fontSize: 16, paddingTop: "0.5em"}}>Popis akce:</Typography>
                {content || "Bude upřesněno"}
                {isMobile ? <></> : <Box sx={{flexGrow: {xs: 0, sm: 2}}}/>}
                {getDetailButton(url_fragment, navigate)}
            </Box>
            <Box sx={{flexGrow: 2}}></Box>
        </Box>
    </ThemeProvider>;
}

function getDetailButton(url_fragment: string, navigate: NavigateFunction) {
    return <EventButton title={"Detaily Akce"} onClick={() => navigate("/akce/"+url_fragment)}/>;
}
