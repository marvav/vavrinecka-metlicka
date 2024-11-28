import {createTheme} from '@mui/material/styles';

const article_theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#FFFFFF",
        },
        background: {
            default: '#403f3a', // Background for the entire page
            paper: '#FFFFFF'
        },
    },
    spacing: 4,
    shape: {
        borderRadius: 4,
    }
});

export default article_theme;
