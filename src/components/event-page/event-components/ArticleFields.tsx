import {Box} from "@mui/material";
import FieldEntry from "../../misc/FieldEntry.tsx";
import mapycz from "../../../../src/assets/images/mapycz.png"
import {MapLinkButton} from "../../buttons/MapLinkButtons.tsx";

interface ArticleFieldProps {
    date: Date
    time: string | undefined
    place: string
    placeLink: string | undefined
}

function ArticleFields({date, time, place, placeLink}: ArticleFieldProps) {
    const placeElement = <Box sx={{display: "flex", gap: "0.5em", alignItems: "center"}}>
        {place + " "}
        {placeLink && <MapLinkButton image={mapycz as string}
                                     onClick={() => window.open(placeLink ?? "", '_blank')}/>}
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
        paddingTop: "1em"
    }}>
        <FieldEntry name={"Datum"} value={date.toLocaleDateString('cs-CZ')} defaultValue={"Neoznámeno"}/>
        <FieldEntry name={"Čas"} value={time} defaultValue={"Dle plakátu"}/>
        <FieldEntry name={"Místo"} value={placeElement} defaultValue={"Neoznámeno"}/>
    </Box>
}

export default ArticleFields;