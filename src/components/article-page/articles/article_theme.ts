import {createTheme} from '@mui/material/styles';

const article_theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#403f3a",
        },
        text: {
            primary: '#000000',
        },
        background: {
            default: '#403f3a', // Background for the entire page
        },
    },
    spacing: 4,
    shape: {
        borderRadius: 4,
    }
});

export default article_theme;
