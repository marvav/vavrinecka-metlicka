import {CssBaseline, ThemeProvider} from "@mui/material";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import EventPage from "./page/event/EventPage.tsx";
import IntroPage from "./page/intro/IntroPage.tsx";
import page_common_theme from "./themes/page_common_theme.ts";
import EventDetailPage from "./page/event/EventDetailPage.tsx";
import StyledPage from "./page/StyledPage.tsx";
import ContactPage from "./page/contact/ContactPage.tsx";
import {translateTitleToUrl} from "./page/event/EventUtils.tsx";
import {fetchBasicEvents} from "./data/EventProvider.tsx";

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
    return <StyledPage content={<IntroPage/>} title={undefined}/>
}

function getEventPage(){
    return <StyledPage content={<EventPage/>} title={"Přehled akcí"}/>
}

export default App
