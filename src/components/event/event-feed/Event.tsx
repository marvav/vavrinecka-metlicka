import {Box, Button, ThemeProvider} from "@mui/material";
import {EventData} from "../../data/EventData.tsx";
import event_theme from "../event-components/event_theme.ts";
import EventTitle from "../event-components/EventTitle.tsx";
import {useNavigate} from "react-router-dom";
import FieldEntry from "../../misc/FieldEntry.tsx";

export default Event;

function Event({date, title, place, time, url_fragment, banner}: EventData) {
    const navigate = useNavigate();
    return <ThemeProvider theme={event_theme}>
        <Button variant="outlined" sx={{
            display: "flex",
            flexDirection: {xs: 'column'},
            textTransform: 'none',
            bgcolor: 'background.default',
            borderRadius: "0.75em",
            borderWidth: '2px',
            borderColor: 'transparent',
            padding: "0em",
            width: "100%",
            gap: {sm: "1em", xs: "0.5em"},
            justifyContent: "center",
            '&:hover': {
                borderColor: 'green',
                borderWidth: '2px',
            },
        }} onClick={() => navigate("/akce/" + url_fragment)}>
            <Box
                component="img"
                sx={{
                    borderTopLeftRadius: "0.75em",
                    borderTopRightRadius: "0.75em",
                    width: '100%',
                    height: 'auto',
                }}
                src={banner}
                loading="eager"
            />
            <Box sx={{
                display: "flex",
                flexDirection: 'column',
                paddingLeft: "1em",
                flexGrow: 1,
                width: "100%",
                gap: "0.5em",
            }}>
                <EventTitle title={title}/>
                <Box sx={{flexGrow: 2}}/>
                <Box sx={{
                    display: {sm: "flex", xs: "grid"},
                    gap: {sm: "2em", xs: "0.5em"},
                    columns: 2,
                    paddingBottom: {sm: "1.5em", xs: "1.5em"},
                    width: '100%',
                }}>
                    <FieldEntry name={"Datum"} value={date.toLocaleDateString('cs-CZ')} defaultValue={"Neoznámeno"}/>
                    {<FieldEntry name={"Čas"} value={time} defaultValue={"Uveden na plakátu"}/>}
                    <FieldEntry name={"Místo"} value={place.name} defaultValue={"Neoznámeno"}/>
                </Box>
            </Box>
        </Button>
    </ThemeProvider>
        ;
}
