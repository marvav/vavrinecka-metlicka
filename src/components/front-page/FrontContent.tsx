import {Box} from "@mui/material";
import FrontGraphic from "./FrontGraphic.tsx";
import FrontFeed from "./FrontFeed.tsx";
import Typography from "@mui/material/Typography";

function FrontContent() {
    return <Box>
        <Typography variant="body1" sx={{ marginRight: 2 }}>
            text
        </Typography>
        <FrontGraphic/>
        <FrontFeed/>
        <FrontGraphic />
    </Box>
}

export default FrontContent