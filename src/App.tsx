import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "./themes/theme.ts";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ArticlePage from "./components/article-page/ArticlePage.tsx";


function App() {
    return <ThemeProvider theme={theme} >
        <CssBaseline />
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/uvod" replace />} />
                <Route path="/uvod" element={<Navigate to="/akce" replace />} />
                <Route path="/akce" element={<ArticlePage />} />
            </Routes>
        </Router>
    </ThemeProvider>
}

export default App
