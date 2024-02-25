import "@mantine/core/styles.css";
import {Box, MantineProvider} from "@mantine/core";
import {ThemeToggle} from './ThemeToggle';
import classes from './App.module.css';

export default function App() {
    return (
        <MantineProvider>
            <ThemeToggle/>
            <Box className={classes.appHeader}>App</Box>
        </MantineProvider>
    );
}
