import {CssBaseline, ThemeProvider} from "@mui/material";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import EventPage from "./components/event-page/EventPage.tsx";
import IntroPage from "./components/intro-page/IntroPage.tsx";
import page_common_theme from "./themes/page_common_theme.ts";

function App() {
    return <ThemeProvider theme={page_common_theme}>
        <CssBaseline/>
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/uvod" replace />} />
                <Route path="/uvod" element={<IntroPage/>} />
                <Route path="/nadchazejici-akce" element={<EventPage includePast={false} title={"Nadcházející Akce"}/>} />
                <Route path="/historie-akci" element={<EventPage includePast={true} title={"Historie Akcí"}/>} />
            </Routes>
        </Router>
    </ThemeProvider>
}

export default App
