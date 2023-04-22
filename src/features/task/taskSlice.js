import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
const url = process.env.REACT_APP_API_URL;



export const viewTodo = createAsyncThunk('todos/fetchTodos', async (id, { rejectWithValue }) => {
    try {
      const response = await await axios.get(url+`todos/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  });

  export const createTodos = createAsyncThunk(
    'todos/create_todos',
    async (data) => {
        try{
            return await axios.post(url + 'todo_create/',data);
        } catch (error) {
            console.log(error)
        }
    }
)

export const updateTodos = createAsyncThunk(
    'todos/update_todos',
    async (data) => {
        console.log("UUID: ",data['uuid'])
        try{
            return await axios.put(url + 'todo_update/'+data['uuid'] ,data['task']);
        } catch (error) {
            console.log(error)
        }
    }
)

export const deleteTodos = createAsyncThunk(
    'todos/update_todos',
    async (uuid) => {
        try{
            return await axios.delete(url + 'todo_delete/' + uuid);
        } catch(error) {
            console.log(error)
        }
    }
)

export const viewTodos = createAsyncThunk(
    'todos/update_todos',
    async (uuid) => {
        try {
            const response =  await axios.get(url + 'view_todo/'+uuid)
            return response.data
        } catch (error) {
            console.log(error)
        }
    
    }
)


  const todoSlice = createSlice({
    name: 'todos',
    initialState: {
      todos: [],
      status: 'idle',
      error: null,
      isLoading: false, // add new state variable
    },
    reducers: {
      // ...
    },
    extraReducers: {
      [viewTodo.pending]: (state) => {
        state.status = 'loading';
        state.isLoading = true; // set loading state to true
      },
      [viewTodo.fulfilled]: (state, action) => {
        state.status = 'succeeded';
        state.todos = action.payload;
        state.isLoading = false; // set loading state to false
      },
      [viewTodo.rejected]: (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        state.isLoading = false; // set loading state to false
      },
      [createTodos.pending]: (state) => {
        state.status = 'loading';
      },
      [createTodos.fulfilled]: (state, action) => {
        state.status = 'succeeded';
        state.todos.push(action.payload);
      },
      [createTodos.rejected]: (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      },
    },
  });

  export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;









  export default todoSlice.reducer;

