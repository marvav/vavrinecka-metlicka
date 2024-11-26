import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#000000',
        },
        secondary: {
            main: '#FFFFFF',
        },
        background: {
            default: '#f5f5f5',
            paper: '#ffffff',
        },
        text: {
            primary: '#000000',
            secondary: '#5f5f5f',
        },
    },
});

export default theme;
