import {Box} from "@mui/material";
import FieldEntry from "../../misc/FieldEntry.tsx";
import mapycz from "../../../assets/images/mapycz.png"
import {MapLinkButton} from "../../buttons/MapLinkButtons.tsx";
import {PlaceData} from "../../data/PlaceData.tsx";

interface EventFieldsProps {
    date: Date
    time: string | undefined
    place: PlaceData
}

function EventFields({date, time, place}: EventFieldsProps) {
    const placeElement = <Box sx={{display: "flex", gap: "0.5em", alignItems: "center"}}>
        {place.name + " "}
        <MapLinkButton image={mapycz as string} onClick={() => window.open(place.url, '_blank')}/>
    </Box>
    return <Box sx={{
        display: {
            sm: "flex",
            xs: "grid"
        },
        gap: {
            sm: "2em",
            xs: "0.5em"
        },
        columns: 2,
    }}>
        <FieldEntry name={"Datum"} value={date.toLocaleDateString('cs-CZ')} defaultValue={"Neoznámeno"}/>
        {time && <FieldEntry name={"Čas"} value={time} defaultValue={"Uveden na plakátu"}/>}
        <FieldEntry name={"Místo"} value={placeElement} defaultValue={"Neoznámeno"}/>
    </Box>
}

export default EventFields;