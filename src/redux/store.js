import {configureStore} from '@reduxjs/toolkit'
import themeSlice from "./themeSlice";
import userSlice from "./userSlice";


export default configureStore({
    reducer: {
        theme: themeSlice,
        userData: userSlice,
    },
})

