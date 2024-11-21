import {Box} from "@mui/material";
import MainPanel from "./MainPanel.tsx";

function FrontPage() {
    return <Box sx={{display: "flex", flexDirection: "column", width: '100%', bgcolor: "blue"}}>
        <MainPanel/>
        <Box sx={{flexGrow: "1", bgcolor: "green"}}/>
    </Box>
}

export default FrontPage