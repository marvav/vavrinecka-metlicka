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
    if (paragraphs.length == 0) {
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
        {paragraphs.slice(1, paragraphs.length).map(paragraph => ChooseParagraphFormat(paragraph))}
    </Box>
}

export default StyledDescription;

function ChooseParagraphFormat(paragraph: Paragraph) {
    if (paragraph.bulletPoints) {
        return getList(paragraph);
    }
    return getTextBlock(paragraph);
}

function getList(paragraph: Paragraph) {
    return <Box sx={{
        display: "flex",
        flexDirection: "column",
        gap: event_theme.spacing(2),
    }}>
        <Typography sx={{fontWeight: "bold", padding: "0.0em", gap: "0em"}}>
            {paragraph.title + ":"}
        </Typography>
        <List sx={{listStyleType: 'disc', margin: 0, padding: 0, paddingLeft: "1.5em"}}>
            {paragraph.bulletPoints?.map(point =>
                <ListItem sx={{display: 'list-item', padding: "0.15em", pl: "0.25em"}} primary="Item with padding">
                    <ListItemText primary={point} />
                </ListItem>)}
        </List>
    </Box>
}

function getTextBlock(paragraph: Paragraph) {
    return <Typography>
        {paragraph.content}
    </Typography>
}