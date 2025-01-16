import {CssBaseline, ThemeProvider} from "@mui/material";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import EventPage from "./components/event/event-feed/EventPage.tsx";
import IntroPage from "./components/intro-page/IntroPage.tsx";
import page_common_theme from "./themes/page_common_theme.ts";
import {predefinedEvents} from "./components/data/EventProvider.tsx";
import EventDetailPage from "./components/event/event-page/EventDetailPage.tsx";
import StyledPage from "./components/page/StyledPage.tsx";
import ContactPage from "./components/contact-page/ContactPage.tsx";

function App() {
    return <ThemeProvider theme={page_common_theme}>
        <CssBaseline/>
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/akce" replace />} />
                <Route path="/uvod" element={getIntroPage()} />
                <Route path="/akce" element={getEventPage()}/>
                <Route path="/kontakty" element={<StyledPage content={<ContactPage/>} title={"Kontakty"}/>}/>
                {getEventRoutes()}
            </Routes>
        </Router>
    </ThemeProvider>
}

function getEventRoutes(){
    return predefinedEvents.map(event => <Route
        path={"/akce/"+event.url_fragment}
        element={<StyledPage content={<EventDetailPage event={event}/>} title={undefined}/>}/>
    )
}

function getIntroPage(){
    return <StyledPage content={<IntroPage/>} title={"Vavřinecká Metlička"}/>
}

function getEventPage(){
    return <StyledPage content={<EventPage includePast={false} />} title={"Akce"}/>
}

export default App
