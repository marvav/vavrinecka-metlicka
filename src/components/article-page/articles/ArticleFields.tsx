import {Box} from "@mui/material";
import FieldEntry from "../../misc/FieldEntry.tsx";
interface ArticleFieldProps {
    date: string
    time: string | undefined
    place: string
    place_map: string | undefined
}

function ArticleFields({date, time, place, place_map}: ArticleFieldProps) {
    const pplace = <p>
        {place} 
        {place_map 
        ? 
        <a href={place_map} style={{fontSize: 11}}> mapa</a> : <div/> 
        }
    </p>
    return <Box sx={{
        display: {
            sm: "flex",
            xs: "grid"
        },
        gap: {
            sm: "2em",
            xs: "0em"
        },
        paddingTop: "1em"
    }}
    >
        <FieldEntry name={"Datum: "} value={date} defaultValue={"Neoznámeno"}/>
        <FieldEntry name={"Čas: "} value={time} defaultValue={"Dle plakátu"}/>
        <FieldEntry name={"Místo: "} value={pplace} defaultValue={"Neoznámeno"}/>
        
    </Box>
}

export default ArticleFields;