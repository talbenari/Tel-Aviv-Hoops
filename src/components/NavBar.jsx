import { Button, Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import { Stack } from '@mui/system';
import { NavLink } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import FullSchedule from './tableFeatures/FullSchedule';

function NavBar() {

    const theme = createTheme({
        typography: {
            fontFamily: 'Comic sans Ms'
        },
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
                        <NavLink to="/"><Button variant="text" color='secondary'>Home</Button></NavLink>
                      <NavLink to='/fullschedule'>  <Button variant="text" color='secondary'>Full Schedule</Button></NavLink>
                        <NavLink to="/About"> <Button variant="text" color='secondary'>About</Button></NavLink>
                    </Stack>
                </Toolbar>
            </AppBar>
            <Routes>
                {/* <Route path='/card' element={<InfoCard></InfoCard>} /> */}
                <Route path='/About' element={<About></About>}></Route>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/fullschedule' element={<FullSchedule></FullSchedule>}></Route>
            </Routes>

        </ThemeProvider>
    )
}

export default NavBar;