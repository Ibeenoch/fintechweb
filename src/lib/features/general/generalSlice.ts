import { RootState } from '@/lib/store';
import { CreateAsyncThunkFunction, createSlice } from '@reduxjs/toolkit';


interface generalInterface {
  isOpen: boolean;
}

const initialState: generalInterface = {
  isOpen: false,
}
const generalSlice = createSlice({
    name: 'general',
initialState,
reducers: {
    setIsOpen: (state) => {
        state.isOpen = !state.isOpen;
    },
},
extraReducers: (builder) => {

}
})

export const selectGeneral = (state: RootState) => state.general;

export const { setIsOpen } = generalSlice.actions;
export default generalSlice.reducer;