import {createSlice} from '@reduxjs/toolkit'

// Create a slice of the store for the counter feature using the createSlice() method from the '@reduxjs/toolkit' library.
export const userSlice = createSlice({
    name: 'user',
    // initial state of the store slice
    initialState: {
        name: "",
        email: "",
        id: "",
        role: "",
    },

    // define the reducers that will handle different actions
    reducers: {
        setName: (state, name) => {
            state.name = name.payload
        },
        setEmail: (state, email) => {
            state.email = email.payload
        },
        setId: (state, id) => {
            state.id = id.payload
        },
        setRole: (state, role) => {
            state.role = role.payload
        },
        setAll: (state, info) => {
            state.name = info.payload.name
            state.role = info.payload.role
            state.id = info.payload.id
            state.email = info.payload.email
            console.log(state.name)
        }
    },
})

// export the action creators that can be used to update the state
export const {setAll, setRole, setName, setEmail, setId} = userSlice.actions

// export the reducer that handle the state updates
export default userSlice.reducer
