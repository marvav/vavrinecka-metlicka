import { createTheme } from '@mui/material/styles';

const page_common_theme = createTheme({
    palette: {
        mode: "dark",
        background:{
            default: "#181a1b"
        }
    },
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

export default page_common_theme;
