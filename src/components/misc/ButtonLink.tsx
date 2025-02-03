import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";
import {LinkData} from "../../data/LinkData.tsx";
import {Box, ImageListItem} from "@mui/material";

interface StyledLinkProps {
    link: LinkData;
}

export function ButtonLink({link}: StyledLinkProps) {
    return <Link sx={{color: "white"}} to={link.url} target={"_blank"} rel="noopener noreferrer">
        <Typography sx={{fontSize: "1em", color: "white"}}>
            {link.name}
        </Typography>
    </Link>
}