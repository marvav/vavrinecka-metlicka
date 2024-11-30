import {Box} from "@mui/material";
import FieldEntry from "../../misc/FieldEntry.tsx";
import mapycz from "../../../../public/assets/mapycz.png"
import { MapLinkButton } from "./ArticleButtonBar.tsx";
interface ArticleFieldProps {
    date: string
    time: string | undefined
    place: string
    placeLink: string | undefined
}

function ArticleFields({date, time, place, placeLink}: ArticleFieldProps) {
    const placeElement = <Box sx={{display: "flex", gap: "0.5em"}}>
        
        {<Box>
            {place + " "}
            {placeLink && <MapLinkButton image={mapycz} onClick={() => window.open(placeLink ?? "", '_blank')}/>}
        </Box>}
    </Box>
    return <Box sx={{
        display: {
            sm: "flex",
            xs: "grid"
        },
        gap: {
            sm: "2em",
            xs: "0em"
        },
        columns: 2,
        paddingTop: "1em"
    }}>
        <FieldEntry name={"Datum"} value={date} defaultValue={"Neoznámeno"}/>
        <FieldEntry name={"Čas"} value={time} defaultValue={"Dle plakátu"}/>
        <FieldEntry name={"Místo"} value={placeElement} defaultValue={"Neoznámeno"}/>

    </Box>
}

export default ArticleFields;