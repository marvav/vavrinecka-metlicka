import {ArticleButton} from "../article-page/articles/ArticleButtonBar.tsx";
import {Box} from "@mui/material";

export interface LinkBarProps {
    title: string
    linkMap: Map<number, string>
}

function LinkBar({title, linkMap}: LinkBarProps) {
    return <Box sx={{display: "flex", gap: "0.5em", alignItems: "center"}}>
        <h4>{title + ":"}</h4>
        {Array.from(linkMap.entries())
            .map(([key, value]) => (
                <ArticleButton onClick={() => window.open(value ?? "", '_blank')} title={"" + key + "km"}/>
            ))}
    </Box>
}


export default LinkBar;