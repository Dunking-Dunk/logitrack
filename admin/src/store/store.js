import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './reducer/UserReducer'

export default configureStore({
    reducer: {
        User: UserReducer
    }
})