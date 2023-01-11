import { Button, Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import { Stack } from '@mui/system';
import { NavLink } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';

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
            <AppBar position="fixed">
                <Toolbar>
                    <Stack direction='row' alignItems='center' spacing={3}>
                        <SportsBasketballIcon />
                        <Button variant="text" color='secondary'>Home</Button>
                        <Button variant="text" color='secondary'>Full Schedule</Button>
                       <NavLink to="/About"> <Button variant="text" color='secondary'>About</Button></NavLink>
                    </Stack>
                </Toolbar>
            </AppBar>
<Routes>
<Route path='/About' element={<About></About>}></Route>
</Routes>
        
        </ThemeProvider>
    )
}

export default NavBar;