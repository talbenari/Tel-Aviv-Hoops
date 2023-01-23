import {Button, Toolbar} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import {Stack} from '@mui/system';
import {NavLink, Route, Routes} from 'react-router-dom';
import Login from "../pages/login";
import Signup from "../pages/signup";
import About from "../pages/About";
import Home from "../pages/Home";
import FullSchedule from "./tableFeatures/FullSchedule";
import React from "react";
import Courtcr8 from "../pages/courtcr8";
import CourtMap from "../pages/courtMap";


function NavBar({children}) {

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
    }); // to event => location and shit, add event

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="fixed">
                <Toolbar>
                    <Stack direction='row' alignItems='center' spacing={3}>
                        <SportsBasketballIcon/>
                        <NavLink to="/"><Button variant="text" color='secondary'>Home</Button></NavLink>
                        <NavLink to="/registercourt"><Button variant="text" color='secondary'>register
                            court</Button></NavLink>
                        <NavLink to="/login"> <Button variant="text" color='secondary'>Login</Button></NavLink>
                        <NavLink to='/fullschedule'> <Button variant="text" color='secondary'>Full
                            Schedule</Button></NavLink>
                        <NavLink to="/About"> <Button variant="text" color='secondary'>About</Button></NavLink>
                        <NavLink to="/courtmap"> <Button variant="text" color='secondary'>courtmap</Button></NavLink>
                    </Stack>
                </Toolbar>

            </AppBar>
            <Routes>
                <Route path='/login' element={<Login></Login>}/>
                <Route path='/courtmap' element={<CourtMap/>}/>
                <Route path='/registercourt' element={<Courtcr8/>}/>
                <Route path='/signup' element={<Signup></Signup>}/>
                <Route path='/About' element={<About></About>}></Route>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/fullschedule' element={<FullSchedule></FullSchedule>}></Route>
            </Routes>

        </ThemeProvider>
    )
}

export default NavBar;