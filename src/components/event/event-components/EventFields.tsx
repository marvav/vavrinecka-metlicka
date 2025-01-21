import {Box} from "@mui/material";
import FieldEntry from "../../misc/FieldEntry.tsx";
import mapycz from "../../../assets/images/mapycz.png"
import {MapLinkButton} from "../../buttons/MapLinkButtons.tsx";
import {LinkData} from "../../data/LinkData.tsx";
import React from "react";
import TrackLinkBar from "../../misc/TrackLinkBar.tsx";

interface EventFieldsProps {
    date: Date
    place: LinkData
    tracks: Map<number, string> | undefined
}

function EventFields({date, place, tracks}: EventFieldsProps) {
    const placeElement = <Box sx={{display: "flex", gap: "0.5em", alignItems: "center"}}>
        {place.name + " "}
        <MapLinkButton image={mapycz as string} onClick={() => window.open(place.url, '_blank')}/>
    </Box>
    return <Box
        sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "left",
            gap: "1em"
        }}>
        <FieldEntry name={"Datum"} value={date.toLocaleDateString('cs-CZ')} defaultValue={"Neoznámeno"}/>
        {date.getHours() != 0 && <FieldEntry name={"Čas"} value={date.toLocaleTimeString().substring(0, 5)}
                                             defaultValue={"Uveden na plakátu"}/>}
        <FieldEntry name={"Místo"} value={placeElement} defaultValue={"Neoznámeno"}/>
        {tracks && <TrackLinkBar title={"Odkazy na trasy"} linkMap={tracks}/>}
    </Box>
}

export default EventFields;