import {ThemeProvider} from "@mui/material";
import FrontBar from "./components/front-page/FrontBar.tsx";
import theme from "./themes/theme.ts";
import FrontContent from "./components/front-page/FrontContent.tsx";
import FootNote from "./components/footnote/FootNote.tsx";


function App() {
    return <ThemeProvider theme={theme} >
        <FrontBar/>
        <FrontContent/>
    </ThemeProvider>
}

export default App
