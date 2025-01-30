import {Box} from "@mui/material";
import FieldEntry from "../../misc/FieldEntry.tsx";
import mapycz from "../../../assets/images/mapycz.png"
import {LinkData} from "../../data/LinkData.tsx";
import React from "react";
import {MapyCZLink} from "../../misc/ButtonLink.tsx";

interface EventFieldsProps {
    date: Date
    place: LinkData
}

function EventFields({date, place}: EventFieldsProps) {
    const placeElement = <Box sx={{display: "flex", gap: "0.5em", alignItems: "center"}}>
        {place.name + " "}
        <MapyCZLink image={mapycz as string} link={place}/>
    </Box>
    return <Box
        sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "left",
            gap: {sm: "1em", xs: "0.5em"}
        }}>
        <FieldEntry name={"Datum"} value={date.toLocaleDateString('cs-CZ')} defaultValue={"Neoznámeno"}/>
        {date.getHours() != 0 && <FieldEntry name={"Čas"} value={date.toLocaleTimeString().substring(0, 5)}
                                             defaultValue={"Uveden na plakátu"}/>}
        <FieldEntry name={"Místo"} value={placeElement} defaultValue={"Neoznámeno"}/>
    </Box>
}

export default EventFields;