import { useEffect, useState } from 'react';

const DateView = () => {
  const [time, setTime] = useState<Date>(new Date());

  const refreshClock = () => {
    setTime(new Date());
  };

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className="hidden lg:flex flex-col gap-2">
      <span className="text-5xl font-bold">
        {time.toLocaleTimeString('en-US')}
      </span>
      <span className="font-semibold text-lg">{time.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long' })}</span>
    
    </div>
  );
};

export default DateView;
