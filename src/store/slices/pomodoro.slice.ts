import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type TimerMode = 'pomodoro' | 'break' | 'longo-break'

interface PomodoroState {
  timeLeft: number
  isRunning: boolean
  mode: TimerMode
  pomodorosCompleted: number
}

const TIMER_MODES = {
  pomodoro: 25 * 60, // 25 minutes
  break: 5 * 60,  // 5 minutes
  'longo-break': 15 * 60, // 15 minutes
  descanso: 5 * 60 // 5 minutes
}

const initialState: PomodoroState = {
  timeLeft: TIMER_MODES.pomodoro,
  isRunning: false,
  mode: 'pomodoro',
  pomodorosCompleted: 0
}

const pomodoroSlice = createSlice({
  name: 'pomodoro',
  initialState,
  reducers: {
    tick: (state) => {
      if (state.timeLeft > 0 && state.isRunning) {
        state.timeLeft -= 1
      }
      if (state.timeLeft === 0) {
        state.isRunning = false
        if (state.mode === 'pomodoro') {
          state.pomodorosCompleted += 1
        }
      }
    },
    toggleTimer: (state) => {
      state.isRunning = !state.isRunning
    },
    setMode: (state, action: PayloadAction<TimerMode>) => {
      state.mode = action.payload
      state.timeLeft = TIMER_MODES[action.payload]
      state.isRunning = false
    },
    resetTimer: (state) => {
      state.timeLeft = TIMER_MODES[state.mode]
      state.isRunning = false
    }
  }
})

export const { tick, toggleTimer, setMode, resetTimer } = pomodoroSlice.actions
export default pomodoroSlice.reducer