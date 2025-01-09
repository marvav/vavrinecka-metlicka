import {Box} from "@mui/material";
import {EventButton} from "../../buttons/EventButtons.tsx";
import {LinkData} from "../../data/LinkData.tsx";
import Typography from "@mui/material/Typography";

interface LinkBarProps {
    title: string;
    links: LinkData[];
}

function LinkBar({title, links}: LinkBarProps) {
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
            {links.map((link) => getLinkButton(link))}
        </Box>
    </Box>
}

function getLinkButton(link: LinkData) {
    return <EventButton title={link.name} onClick={() => window.open(link.url, '_blank')}/>;
}

export default LinkBar;