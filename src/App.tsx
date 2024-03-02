import "@mantine/core/styles.css";
import {Box, MantineProvider} from "@mantine/core";
import {ThemeSwitch} from './ThemeSwitch';
import classes from './App.module.css';

export default function App() {
    return (
        <MantineProvider>
            <ThemeSwitch/>
            <Box className={classes.appHeader}>App</Box>
        </MantineProvider>
    );
}
