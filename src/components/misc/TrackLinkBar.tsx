import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";
import {ButtonStyle1} from "../buttons/StyledButtons.tsx";
import {Link} from "react-router-dom";
import {StyledLink} from "./StyledLink.tsx";

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
        <Box sx={{display: "flex", gap: "0.5em"}} >
            {Array.from(linkMap.entries())
                .map(([key, url]) => (
                    <StyledLink link={{name: "" + key + "km", url: url}}/>
                ))}
        </Box>
    </Box>
}


export default TrackLinkBar;