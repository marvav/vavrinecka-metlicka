import {Box} from "@mui/material";
import {ButtonStyle1} from "../../buttons/StyledButtons.tsx";
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
        gap: "0.5em"
    }}>
        <Typography sx={{fontWeight: "bold"}}>{title + ":"}</Typography>
        <Box sx={{display: "flex", gap: "0.5em"}}>
            {links.map((link) => getLinkButton(link))}
        </Box>
    </Box>
}

function getLinkButton(link: LinkData) {
    return <ButtonStyle1 title={link.name} onClick={() => window.open(link.url, '_blank')}/>;
}

export default LinkBar;