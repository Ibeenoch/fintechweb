import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/users/userSlice'
import generalReducer from './features/general/generalSlice'

export const makeStore = () => {
    return configureStore({
        reducer: {
            user: userReducer,
            general: generalReducer,
        }
    })
}

// infer the types of makesstore
export type AppStore = ReturnType<typeof makeStore>
// Infer the 'RootState' and 'AppDispatch' types from the store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']