import {Box, Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import FieldEntry from "../../text-components/FieldEntry.tsx";
import {translateTitleToUrl} from "../EventUtils.tsx";
import {TitleStyle3, TypographyStyle1, TypographyStyle2} from "../../../styles/TypographyStyles.tsx";
import Typography from "@mui/material/Typography";
import {EventBase} from "../../../data/EventBase.tsx";
import {PrimaryBackground} from "../../../styles/ColorDefinitions.ts";

export default EventItem;

function EventItem({date, title, place, banner}: EventBase) {
    const navigate = useNavigate();
    return <Button variant="outlined" sx={{
        ...TypographyStyle1,
        display: "flex",
        flexDirection: {xs: 'column'},
        textTransform: 'none',
        background: PrimaryBackground,
        borderRadius: "0.75em",
        borderWidth: '2px',
        borderColor: 'transparent',
        padding: "0em",
        justifyContent: "center",
        boxShadow: '0 0 1px #000000, 0 0 1px #000000, 0 0 20px #000000, 0 0 50px #000000',
        '&:hover': {
            borderColor: 'green',
            borderWidth: '2px',
        },
    }} onClick={() => navigate("/akce/" + translateTitleToUrl(title))}>
        <Box
            component="img"
            sx={{
                borderTopLeftRadius: "0.75em",
                borderTopRightRadius: "0.75em",
                width: '100%',
                height: 'auto',
            }}
            src={banner}
            loading="eager"
        />
        <Box sx={{
            display: "flex",
            flexDirection: 'column',
            padding: "0.8em",
            flexGrow: 1,
            width: "100%",
            gap: "0.25em",
        }}>
            <Typography sx={{...TitleStyle3, textAlign: "left"}}>
                {title}
            </Typography>
            <Box sx={{flexGrow: 2}}/>
            <Box sx={{
                display: "flex",
                flexWrap: "wrap",
            }}>
                <FieldEntry name={"Datum"} value={date.toLocaleDateString('cs-CZ')} defaultValue={"Neoznámeno"}/>
                <FieldEntry name={"Místo"} value={place.name} defaultValue={"Neoznámeno"}/>
            </Box>
        </Box>
    </Button>;
}
