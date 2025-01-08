import {Button, CssBaseline, ThemeProvider} from "@mui/material";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import EventPage from "./components/event/event-feed/EventPage.tsx";
import IntroPage from "./components/intro-page/IntroPage.tsx";
import page_common_theme from "./themes/page_common_theme.ts";
import {predefinedEvents} from "./components/data/EventProvider.tsx";
import EventFeed from "./components/event/event-feed/EventFeed.tsx";
import Event from "./components/event/event-feed/Event.tsx";
import {EventData} from "./components/data/EventData.tsx";
import EventDetailPage from "./components/event/event-page/EventDetailPage.tsx";

function App() {
    return <ThemeProvider theme={page_common_theme}>
        <CssBaseline/>
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/uvod" replace />} />
                <Route path="/uvod" element={<IntroPage/>} />
                <Route path="/akce" element={<EventPage includePast={false} title={"Akce"}/>} />
                {getEventRoutes()}
            </Routes>
        </Router>
    </ThemeProvider>
}

function getEventRoutes(){
    return predefinedEvents.map(event => <Route
        path={"/akce/"+event.url_fragment}
        element={<EventDetailPage event={event}/>}/>
    )
}

export default App
