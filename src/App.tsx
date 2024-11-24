import {Box, ThemeProvider} from "@mui/material";
import FrontBar from "./components/front-page/FrontBar.tsx";
import theme from "./theme.ts";
import FrontContent from "./components/front-page/FrontContent.tsx";


function App() {
    return <ThemeProvider theme={theme}>
        <Box display="flex" justifyContent="center" alignItems="center" height="100%">
            <FrontBar/>
            <FrontContent/>
        </Box>
    </ThemeProvider>
}

export default App
