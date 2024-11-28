import {Box} from "@mui/material";
import FieldEntry from "../../misc/FieldEntry.tsx";

interface ArticleFieldProps {
    date: string
    time: string | undefined
    place: string
}

function ArticleFields({date, time, place}: ArticleFieldProps) {
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
        <FieldEntry name={"Místo: "} value={place} defaultValue={"Neoznámeno"}/>
    </Box>
}

export default ArticleFields;