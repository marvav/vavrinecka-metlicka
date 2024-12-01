import {ArticleButton} from "../buttons/ArticleButtons";
import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";

export interface LinkBarProps {
    title: string
    linkMap: Map<number, string>
}

function LinkBar({title, linkMap}: LinkBarProps) {
    return <Box sx={{display: "flex", gap: "0.5em", alignItems: "center", paddingTop: "1em"}}>
        <Typography sx={{fontWeight: "bold"}}>{title + ":"}</Typography>
        {Array.from(linkMap.entries())
            .map(([key, value]) => (
                <ArticleButton onClick={() => window.open(value ?? "", '_blank')} title={"" + key + "km"}/>
            ))}
    </Box>
}


export default LinkBar;