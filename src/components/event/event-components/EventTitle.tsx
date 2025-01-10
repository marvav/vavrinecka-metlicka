import Typography from "@mui/material/Typography";
import {useMediaQuery} from "@mui/material";
import event_theme from "./event_theme.ts";

interface EventTitleProps {
    title: string;
}

function EventTitle({title}: EventTitleProps) {
    const isMobile = useMediaQuery(event_theme.breakpoints.down('sm'));
    const variant = isMobile ? "h5" : "h3";
    return <Typography variant={variant}
                       sx={{
                           width: "100%",
                           display: "flex",
                           paddingLeft: "0.5em",
                           justifyContent: {
                               xs: "center", sm: "left",
                           },
                           textAlign: {
                               xs: "center", sm: "left",
                           },
                       }}>
        {title}
    </Typography>;
}

export default EventTitle;