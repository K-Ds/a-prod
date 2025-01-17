import { useEffect } from 'react'
import { useAppSelector } from '../store/hooks'

export const useNotification = () => {
  const { timeLeft, mode, isRunning } = useAppSelector(state => state.pomodoro)

  useEffect(() => {
    if (timeLeft === 0 && isRunning) {
      if (Notification.permission === 'granted') {
        new Notification(`${mode} completed!`, {
          body: mode === 'pomodoro' ? 'Time for a break!' : 'Time to focus!'
        })
      }
    }
  }, [timeLeft, mode, isRunning])

  useEffect(() => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission()
    }
  }, [])
}