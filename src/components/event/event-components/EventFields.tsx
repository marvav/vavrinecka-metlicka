import {Box} from "@mui/material";
import FieldEntry from "../../text-components/FieldEntry.tsx";
import mapycz from "../../../assets/images/mapycz.png"
import {LinkData} from "../../../data/LinkData.tsx";
import React from "react";
import {MapyCZLink} from "../../misc/ButtonLink.tsx";
import {Link} from "react-router-dom";
import Typography from "@mui/material/Typography";
import {TypographyLinkStyle} from "../../../styles/TypographyStyles.tsx";

interface EventFieldsProps {
    date: Date
    place: LinkData
}

function EventFields({date, place}: EventFieldsProps) {
    const placeElement = <Box sx={{display: "flex", gap: "0.5em", alignItems: "center"}}>
        <Link to={place.url} target={"_blank"} rel="noopener noreferrer">
            <Typography sx={TypographyLinkStyle}>{place.name + " "}</Typography>
        </Link>
    </Box>
    return <Box
        sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "left",
        }}>
        <FieldEntry name={"Datum"} value={date.toLocaleDateString('cs-CZ')} defaultValue={"Neoznámeno"}/>
        {date.getHours() != 0 && <FieldEntry name={"Čas"} value={date.toLocaleTimeString().substring(0, 5)}
                                             defaultValue={"Uveden na plakátu"}/>}
        <FieldEntry name={"Místo"} value={placeElement} defaultValue={"Neoznámeno"}/>
    </Box>
}

export default EventFields;