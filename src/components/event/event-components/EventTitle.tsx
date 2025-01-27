import Typography from "@mui/material/Typography";
import event_theme from "./event_theme.ts";
import {TypographyStyle2} from "../../../styles/TypographyStyles.tsx";

interface EventTitleProps {
    title: string;
}

function EventTitle({title}: EventTitleProps) {
    return <Typography sx={{
                           paddingTop: event_theme.spacing(1),
                           paddingBottom: event_theme.spacing(1),
                           display: "flex",
                           justifyContent: "left",
                           textAlign: "left",
                           ...TypographyStyle2
                       }}>
        {title}
    </Typography>;
}

export default EventTitle;