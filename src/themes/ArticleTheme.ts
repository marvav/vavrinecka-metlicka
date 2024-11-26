import { createTheme } from '@mui/material/styles';

const articleTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#403f3a",
        },
        text: {
            primary: '#000000',
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