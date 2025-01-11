import {Box, Button, ThemeProvider, useMediaQuery} from "@mui/material";
import {EventData} from "../../data/EventData.tsx";
import event_theme from "../event-components/event_theme.ts";
import EventTitle from "../event-components/EventTitle.tsx";
import EventFields from "../event-components/EventFields.tsx";
import Typography from "@mui/material/Typography";
import {NavigateFunction, useNavigate} from "react-router-dom";
import {EventButton} from "../../buttons/EventButtons.tsx";
import EventPoster from "../../misc/Image.tsx";
import FieldEntry from "../../misc/FieldEntry.tsx";

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
            gap: {sm: "1em", xs: "0.5em"},
            justifyContent: "center",
        }} onClick={() => navigate("/akce/" + url_fragment)}>
            <Box>
                <img width={"800px"} src={banner} alt={""} loading="lazy"/>
            </Box>
            <Box sx={{
                paddingLeft: "1em",
                flexGrow: 1,
                width: "100%"
            }}>
                <EventTitle title={title}/>
                <Box sx={{flexGrow: 1}}/>
                <Box sx={{
                    display: {sm: "flex", xs: "grid"},
                    gap: {sm: "2em", xs: "0.5em"},
                    columns: 2,
                    paddingBottom: "2em"
                }}>
                    <FieldEntry name={"Datum"} value={date.toLocaleDateString('cs-CZ')} defaultValue={"Neoznámeno"}/>
                    <FieldEntry name={"Čas"} value={time} defaultValue={"Dle plakátu"}/>
                    <FieldEntry name={"Místo"} value={place.name} defaultValue={"Neoznámeno"}/>
                </Box>
            </Box>
        </Button>
    </ThemeProvider>
        ;
}
