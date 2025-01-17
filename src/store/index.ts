import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './slices/modal.slice'

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    // other reducers...
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
