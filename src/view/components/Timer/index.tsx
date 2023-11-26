import React, { useState, useEffect } from 'react';

import styles from './timer.module.scss';

interface TimerProps {
  count: number;
  isStartGame: boolean;
  onTimerEnd: () => void;
}

export const Timer: React.FC<TimerProps> = ({ count, isStartGame, onTimerEnd }) => {
  const [counter, setCounter] = useState(count);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 100 : 0));

      if (counter <= 0) {
        clearInterval(intervalId);
        onTimerEnd();
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [counter, onTimerEnd, isStartGame]);

  const formatMilliseconds = (ms: number): string => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(3);

    return `${minutes}:${+seconds < 10 ? '0' : ''}${seconds}`;
  };

  return <div className = { styles.timer }>{formatMilliseconds(isStartGame ? counter : 0)}</div>;
};
