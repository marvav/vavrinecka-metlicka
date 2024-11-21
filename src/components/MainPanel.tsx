import {Box, Button} from "@mui/material";
import PageButton from "./PageButton.tsx";

function MainPanel() {
    return <Box sx={{display: "flex", bgcolor: "red"}}>
        <PageButton/>
        <PageButton/>
        <PageButton/>
        <PageButton/>
        <PageButton/>
    </Box>
}

export default MainPanel