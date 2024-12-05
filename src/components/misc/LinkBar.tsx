import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";
import {EventButton} from "../buttons/EventButtons.tsx";

export interface LinkBarProps {
    title: string
    linkMap: Map<number, string>
}

function LinkBar({title, linkMap}: LinkBarProps) {
    return <Box sx={{
        display: "flex",
        gap: "0.5em",
        alignItems: "center",
        paddingTop: "1em",
        width: "min-content"
    }}>
        <Typography sx={{fontWeight: "bold"}}>{title + ":"}</Typography>
        {Array.from(linkMap.entries())
            .map(([key, value]) => (
                <EventButton onClick={() => window.open(value ?? "", '_blank')} title={"" + key + "km"}/>
            ))}
    </Box>
}


export default LinkBar;