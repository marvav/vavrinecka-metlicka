import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";
import {ButtonStyle1} from "../buttons/StyledButtons.tsx";

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
        flexDirection: {
            xs: "column",
            sm: "row"
        },
        gap: "0.5em"
    }}>
        <Typography sx={{fontWeight: "bold"}}>{title + ":"}</Typography>
        <Box sx={{display: "flex", gap: "0.5em"}}>
            {Array.from(linkMap.entries())
                .map(([key, value]) => (
                    <ButtonStyle1 onClick={() => window.open(value ?? "", '_blank')} title={"" + key + "km"}/>
                ))}
        </Box>
    </Box>
}


export default TrackLinkBar;