import {createTheme} from '@mui/material/styles';

const article_theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#FFFFFF",
        },
        background: {
            default: '#2c2e29', // Background for the entire page
            paper: '#FFFFFF'
        },
    },
    spacing: 4,
    shape: {
        borderRadius: 4,
    }
});

export let article_button_theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#FFFFFF",
        },
        background: {
            default: '#4a4538', // Background for the entire page
            paper: '#4a4538'
        },
    },
    spacing: 4,
    shape: {
        borderRadius: 4,
    }
});

export default article_theme;
