import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { tick, toggleTimer, setMode, resetTimer } from '../../store/slices/pomodoro.slice'
import { AlarmClockCheck } from 'lucide-react'

const Pomodoro: React.FC = () => {
  const dispatch = useAppDispatch()
  const { timeLeft, isRunning, mode,pomodorosCompleted } = useAppSelector(state => state.pomodoro)

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-8 bg-primary rounded-lg text-white">
      <div className='flex flex-row items-center gap-x-4 mb-20'>
        <h1 className="text-7xl font-bold flex flex-row gap-2">pomodor<AlarmClockCheck size={72}/></h1>
        <span className='rounded-full bg-red-400  flex px-4 py-2 items-center justify-center'>
          Completed: <span className='font-semibold px-2 text-lg'>{pomodorosCompleted}</span>
        </span>
      </div>

      <div className="flex gap-4 mb-8">
        <button
          className={`px-4 py-2 text-lg  rounded ${mode === 'pomodoro' ? 'bg-white text-red-500' : 'bg-red-400'}`}
          onClick={() => dispatch(setMode('pomodoro'))}
        >
          Pomodoro
        </button>
        <button
          className={`px-4 py-2 text-lg  rounded ${mode === 'break' ? 'bg-white text-red-500' : 'bg-red-400'}`}
          onClick={() => dispatch(setMode('break'))}
        >
          Break
        </button>
        <button
          className={`px-4 text-lg py-2 rounded ${mode === 'longo-break' ? 'bg-white text-red-500' : 'bg-red-400'}`}
          onClick={() => dispatch(setMode('longo-break'))}
        >
          Longo break
        </button>
      </div>

      <div className="w-[70%] text-center mb-8">
        <div className="font-bold w-full" style={{ fontSize: 'min(100vw, 16rem)' }}>
          {formatTime(timeLeft)}
        </div>
      </div>

      <div className="flex gap-4">
        <button
          className="px-8 py-4 bg-white text-red-500 rounded-full text-xl font-bold"
          onClick={() => dispatch(toggleTimer())}
        >
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button
          className="px-8 py-4 bg-red-400 rounded-full text-xl font-bold"
          onClick={() => dispatch(resetTimer())}
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default Pomodoro