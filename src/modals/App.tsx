import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme"; // Import the theme
import ExampleUsage from "./ExampleUsage";

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <ExampleUsage />
        </ThemeProvider>
    );
};

export default App;
