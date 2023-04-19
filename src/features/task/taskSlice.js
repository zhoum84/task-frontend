import {createSlice, createAuthThunk} from "@reduxjs/toolkit"
import taskService from './taskService'

//TODO: link to api

const initialState = {
    tickets: [],
    ticket: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        reset: (state) => initialState
    }, 
    extraReducers: (builder) =>{

    }
})

export const {reset} = taskSlice.actions
export default taskSlice.reducer