import Typography from "@mui/material/Typography";
import {Box, Divider, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import event_theme from "../event/event-components/event_theme.ts";
import {Paragraph} from "../data/Paragraph.tsx";
import {
    ArrowDownwardTwoTone, ChangeCircleOutlined, ChangeCircleSharp, ChangeHistory,
    Circle,
    FormatListBulleted,
    ListAltRounded,
    RadioButtonChecked
} from "@mui/icons-material";

export interface StyledTextBlockProps {
    paragraphs: Paragraph[];
}

function StyledDescription({paragraphs}: StyledTextBlockProps) {
    if(paragraphs.length == 0){
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
        {paragraphs.slice(1,paragraphs.length).map(paragraph => ChooseParagraphFormat(paragraph))}
    </Box>
}

export default StyledDescription;

function ChooseParagraphFormat(paragraph: Paragraph) {
    if(paragraph.bulletPoints){
        return getList(paragraph);
    }
    return getTextBlock(paragraph);
}

function getList(paragraph: Paragraph) {
    return <List sx={{padding: "none"}}>
        <Typography sx={{fontWeight: "bold", padding: "none"}}>{paragraph.title+":"}</Typography>
        {paragraph.bulletPoints?.map(point => <ListItem sx={{display: "flex", gap: "1em", padding: "none"}}>
            <ChangeCircleOutlined fontSize="0.5" />
            {point}
        </ListItem>)}
    </List>
}

function getTextBlock(paragraph: Paragraph) {
    return <Typography>
        {paragraph.content}
    </Typography>
}