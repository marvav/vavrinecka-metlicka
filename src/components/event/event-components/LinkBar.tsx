import {Box} from "@mui/material";
import {LinkData} from "../../../data/LinkData.tsx";
import Typography from "@mui/material/Typography";
import {ButtonLink} from "../../misc/ButtonLink.tsx";
import {ButtonStyle1} from "../../../styles/ButtonStyles.tsx";

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
        <Box sx={{display: "flex", gap: "inherit"}}>
            {links.map((link) => <Box sx={ButtonStyle1}>
                <ButtonLink link={link}/>
            </Box>)}
        </Box>
    </Box>
}

export default LinkBar;