import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";
import {LinkData} from "../data/LinkData.tsx";
import {Box} from "@mui/material";

interface StyledLinkProps {
    link: LinkData;
}

export function StyledLink({link}: StyledLinkProps) {
    return <Box sx={{
        width: "auto",
        paddingLeft: "1em",
        paddingTop: "0.3em",
        paddingRight: "1em",
        paddingBottom: "0.3em",
        borderRadius: "0.33em",
        background: 'linear-gradient(to right, #1d2922, #183815)',
        boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.3)",
        transition: "all 0.3s ease-in",
        border: '2px solid',
        borderColor: 'transparent',
        '&:hover': {
            borderColor: 'green',
        }
    }}>
        <Link sx={{color: "white"}} to={link.url}>
            <Typography sx={{fontSize: "1em", color: "white"}}>
                {link.name}
            </Typography>
        </Link>
    </Box>
}