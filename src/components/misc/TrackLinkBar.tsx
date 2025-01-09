import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";
import {EventButton} from "../buttons/EventButtons.tsx";

export interface LinkBarProps {
    title: string
    linkMap: Map<number, string>
}

function TrackLinkBar({title, linkMap}: LinkBarProps) {
    return <Box sx={{
        display: "flex",
        alignItems: {
            xs: "left",
            sm: "center"
        },
        width: "100%",
        flexDirection: {
            xs: "column",
            sm: "row"
        },
        paddingTop: {
            xs: "0.5em",
            sm: "1em"
        },
        gap: "0.5em"
    }}>
        <Typography sx={{fontWeight: "bold"}}>{title + ":"}</Typography>
        <Box sx={{display: "flex", gap: "0.5em"}}>
            {Array.from(linkMap.entries())
                .map(([key, value]) => (
                    <EventButton onClick={() => window.open(value ?? "", '_blank')} title={"" + key + "km"}/>
                ))}
        </Box>
    </Box>
}


export default TrackLinkBar;