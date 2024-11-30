import {Box} from "@mui/material";
import FieldEntry from "../../misc/FieldEntry.tsx";

interface ArticleFieldProps {
    date: string
    time: string | undefined
    place: string
    placeLink: string | undefined
}

function ArticleFields({date, time, place, placeLink}: ArticleFieldProps) {
    const placeElement = <Box sx={{display: "flex", alignItems: "center", gap: "0.5em"}}>
        {place}
        {placeLink && <a href={placeLink} target={"_blank"} style={{fontSize: 11}}> mapy.cz</a>}
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
    }}>
        <FieldEntry name={"Datum: "} value={date} defaultValue={"Neoznámeno"}/>
        <FieldEntry name={"Čas: "} value={time} defaultValue={"Dle plakátu"}/>
        <FieldEntry name={"Místo: "} value={placeElement} defaultValue={"Neoznámeno"}/>

    </Box>
}

export default ArticleFields;