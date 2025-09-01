import { RootState } from '@/lib/store';
import { CreateAsyncThunkFunction, createSlice } from '@reduxjs/toolkit';

interface userDetailsInterface {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}
interface userInterface {
    status: 'idle' | 'loading' | 'success' | 'error';
    user: userDetailsInterface;
}

const initialState: userInterface = {
    status: 'idle',
    user: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    }
}
const userSlice = createSlice({
    name: 'user',
initialState,
reducers: {
    resetState: (state) => {
        state.status = 'idle',
        state.user = { firstName: '', lastName: '', email : '', password: ''}
    },
},
extraReducers: (builder) => {

}
})

// export const selectAuth = (state: RootState) = state.auth 

export const { resetState } = userSlice.actions;
export default userSlice.reducer;