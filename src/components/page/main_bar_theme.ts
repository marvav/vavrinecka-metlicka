import { createTheme } from '@mui/material/styles';

export const desktopTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: '#FFFFFF',
        },
        secondary: {
            main: '#FFFFFF',
        },
        background:{
            default: '#0f1010',
        }
    },
    typography:{
        fontSize: 15
    }
});

export const mobileTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: '#FFFFFF',
        },
        secondary: {
            main: '#FFFFFF',
        },
        background:{
            default: '#0f1010',
        }
    },
    typography:{
        fontSize: 10
    }
});
