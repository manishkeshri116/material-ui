import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    components: {
        MuiDialog: {
            styleOverrides: {
                paper: {
                    borderRadius: "20px",
                    padding: "16px",
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "8px",
                    textTransform: "none",
                },
            },
        },
    },
    palette: {
        primary: {
            main: "#1976d2", // Custom primary color
        },
        secondary: {
            main: "#f50057", // Custom secondary color
        },
    
    },
    typography: {
        fontFamily: "Arial, sans-serif",
        h6: {
            fontSize: "18px",
            fontWeight: "bold",
        },
    },
});

export default theme;
