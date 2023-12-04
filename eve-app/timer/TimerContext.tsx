import React, { createContext, useState, useEffect, useCallback } from 'react';

interface ITimerContext {
  time: string;
  startTimer: () => void;
  stopTimer: () => void;
  resetTimer: () => void;
}

// Initial context value
const defaultState: ITimerContext = {
  time: '00h 00m 00s',
  startTimer: () => {},
  stopTimer: () => {},
  resetTimer: () => {}
};

export const TimerContext = createContext<ITimerContext>(defaultState);

export const TimerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const formatTime = (totalSeconds: number): string => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`;
  };

  const startTimer = useCallback(() => {
    setIsActive(true);
    console.log('Timer started!');
  }, []);

  const stopTimer = useCallback(() => {
    setIsActive(false);
    console.log('Timer stopped!');
  }, []);

  const resetTimer = useCallback(() => {
    setIsActive(false);
    setSeconds(0);
    console.log('Timer reset!');
  }, []);

  useEffect(() => {
    if (isActive && intervalId === null) {
      const id = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
      setIntervalId(id);
    } else if (!isActive && intervalId !== null) {
      clearInterval(intervalId);
      setIntervalId(null);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isActive, intervalId]);

  const time = formatTime(seconds);

  return (
    <TimerContext.Provider value={{ time, startTimer, stopTimer, resetTimer }}>
      {children}
    </TimerContext.Provider>
  );
};
