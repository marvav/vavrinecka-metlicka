import {createTheme} from '@mui/material/styles';

const event_theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#FFFFFF",
        },
        background: {
            default: '#212325', // Background for the entire page
            paper: '#181a1b'
        },
    },
    spacing: 4,
    shape: {
        borderRadius: 4,
    }
});


export default event_theme;