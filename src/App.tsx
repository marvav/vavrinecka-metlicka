import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "./themes/theme.ts";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import ArticlePage from "./components/article-page/ArticlePage.tsx";
import IntroPage from "./components/intro-page/IntroPage.tsx";
import page_common_theme from "./themes/page_common_theme.ts";

function App() {
    return <ThemeProvider theme={page_common_theme} >
        <CssBaseline/>
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/uvod" replace />} />
                <Route path="/uvod" element={<IntroPage/>} />
                <Route path="/akce" element={<ArticlePage />} />
            </Routes>
        </Router>
    </ThemeProvider>
}

export default App
