import {createSlice} from '@reduxjs/toolkit'
import {createTheme} from "@mui/material/styles";

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
    }
})
// Create a slice of the store for the counter feature using the createSlice() method from the '@reduxjs/toolkit' library.
export const themeSlice = createSlice({
    name: 'theme',
    // initial state of the store slice
    initialState: {
        theme: theme

    },
    // define the reducers that will handle different actions
    reducers: {
        Add: (state) => {
            console.log(state.theme)
        },
    },
})

// export the action creators that can be used to update the state
// export const {  } = themeSlice.actions

// export the reducer that handle the state updates
export default themeSlice.reducer
