import Typography from "@mui/material/Typography";
import {Box, Divider} from "@mui/material";
import event_theme from "../event/event-components/event_theme.ts";

export interface StyledTextBlockProps {
    paragraphs: string[] | undefined;
}

function StyledTextBlock({paragraphs}: StyledTextBlockProps) {
    if(paragraphs == undefined){
        return <>Bude upřesněno</>;
    }
    const first = paragraphs[0];
    return <Box sx={{
        display: "flex",
        flexDirection: "column",
        gap: {xs: event_theme.spacing(3), sm: event_theme.spacing(4)},
    }}>
        {getTextBlock(first)}
        <Divider variant="fullWidth"/>
        {paragraphs.slice(1,paragraphs.length).map(paragraph => getTextBlock(paragraph))}
    </Box>
}

export default StyledTextBlock;

function getTextBlock(paragraph: string) {
    return <Typography>
        {paragraph}
    </Typography>
}