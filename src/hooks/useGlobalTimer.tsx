import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { tick } from '../store/slices/pomodoro.slice';

export const GlobalTimer = () => {
  const dispatch = useAppDispatch();
  const isRunning = useAppSelector(state => state.pomodoro.isRunning);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (isRunning && !intervalRef.current) {
      intervalRef.current = window.setInterval(() => {
        dispatch(tick());
      }, 1000);
    } else if (!isRunning && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, dispatch]);

  return null;
};