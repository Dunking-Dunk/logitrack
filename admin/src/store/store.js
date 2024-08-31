import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './reducer/UserReducer'
import BusReducer from './reducer/BusReducer'

export default configureStore({
    reducer: {
        User: UserReducer,
        Bus: BusReducer
    }
})