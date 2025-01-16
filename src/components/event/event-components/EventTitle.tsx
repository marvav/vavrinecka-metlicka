import Typography from "@mui/material/Typography";
import {useMediaQuery} from "@mui/material";
import event_theme from "./event_theme.ts";

interface EventTitleProps {
    title: string;
}

function EventTitle({title}: EventTitleProps) {
    const isMobile = useMediaQuery(event_theme.breakpoints.down('sm'));
    const variant = isMobile ? "h5" : "h4";
    return <Typography variant={variant}
                       sx={{
                           paddingTop: event_theme.spacing(1),
                           paddingBottom: event_theme.spacing(1),
                           display: "flex",
                           justifyContent: "left",
                           textAlign: "left",
                       }}>
        {title}
    </Typography>;
}

export default EventTitle;