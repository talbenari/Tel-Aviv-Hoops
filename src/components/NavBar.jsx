import { Button, Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import { Stack } from '@mui/system';

function NavBar() {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#424242',
            },
            secondary: {
                main: '#fff'
            }
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static">
                <Toolbar>
                    <Stack direction='row' alignItems='center' spacing={3}>
                        <SportsBasketballIcon />
                        <Button variant="text" color='secondary'>Home</Button>
                        <Button variant="text" color='secondary'>Full Schedule</Button>
                        <Button variant="text" color='secondary'>About</Button>
                    </Stack>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
}

export default NavBar;