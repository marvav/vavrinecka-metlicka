import {CssBaseline, ThemeProvider} from "@mui/material";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import EventPage from "./components/event/event-feed/EventPage.tsx";
import IntroPage from "./components/intro-page/IntroPage.tsx";
import page_common_theme from "./themes/page_common_theme.ts";
import EventDetailPage from "./components/event/event-page/EventDetailPage.tsx";
import StyledPage from "./components/page/StyledPage.tsx";
import ContactPage from "./components/contact-page/ContactPage.tsx";
import {translateTitleToUrl} from "./components/event/EventUtils.tsx";
import {fetchBasicEvents} from "./components/data/EventProvider.tsx";

function App() {
    return <ThemeProvider theme={page_common_theme}>
        <CssBaseline/>
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/akce" replace />} />
                <Route path="/uvod" element={getIntroPage()} />
                <Route path="/akce" element={getEventPage()}/>
                <Route path="/metlicka" element={<StyledPage content={<ContactPage/>} title={"O nás"}/>}/>
                {getEventRoutes()}
            </Routes>
        </Router>
    </ThemeProvider>
}

function getEventRoutes(){
    return fetchBasicEvents().map(event => <Route
        path={"/akce/"+translateTitleToUrl(event.title)}
        element={<StyledPage content={EventDetailPage(event.id)} title={undefined}/>}/>
    )
}

function getIntroPage(){
    return <StyledPage content={<IntroPage/>} title={"Vavřinecká Metlička"}/>
}

function getEventPage(){
    return <StyledPage content={<EventPage/>} title={"Akce"}/>
}

export default App
