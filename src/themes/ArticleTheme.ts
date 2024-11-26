import { createTheme } from '@mui/material/styles';

const articleTheme = createTheme({
    palette: {
        primary: {
            main: "#403f3a",
        },
        secondary: {
            main: '#FFFFFF',
        },
    },
    spacing: 4,
    breakpoints: {
        values: {
            xs: 0,    // Mobile screens (portrait)
            sm: 600,  // Small tablets / Large phones (portrait)
            md: 900,  // Tablets / Small laptops
            lg: 1024, // Laptops / Desktops
            xl: 1440, // Large desktops
        },
    },
});

export default articleTheme;
