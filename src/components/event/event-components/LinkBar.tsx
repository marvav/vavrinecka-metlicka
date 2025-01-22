import {Box} from "@mui/material";
import {ButtonStyle1} from "../../buttons/StyledButtons.tsx";
import {LinkData} from "../../data/LinkData.tsx";
import Typography from "@mui/material/Typography";
import {StyledLink} from "../../misc/StyledLink.tsx";

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
            {links.map((link) => <StyledLink link={link}/>)}
        </Box>
    </Box>
}

export default LinkBar;