import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './slices/modal.slice'
import pomodoroReducer from './slices/pomodoro.slice'

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    pomodoro: pomodoroReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
