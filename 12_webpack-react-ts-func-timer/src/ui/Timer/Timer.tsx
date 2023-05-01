import React, { useState, useCallback, useEffect, useRef } from 'react';

import { getClockTime } from '../../util';

import styles from './Timer.module.css';

export const Timer = () => {
  const [isStart, setIsStart] = useState(false);
  const [isStopped, setIsStopped] = useState(false);
  const [isClear, setIsClear] = useState(false);
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [nextDate, setNextDate] = useState<Date | undefined>(undefined);
  const [stopDate, setStopDate] = useState<Date | undefined>(undefined);
  const [timer, setTimer] = useState('--:--:--');
  const intervalId = useRef<NodeJS.Timer | undefined>();

  const handleStart = useCallback(() => {
    const date = new Date();
    setIsStart(true);
    setStartDate(date);
  }, []);

  const handleStop = useCallback(() => {
    const date = new Date();
    setIsStart(false);
    setIsStopped(true);
    setIsClear(true);
    setStopDate(date);
  }, []);

  const handleClear = useCallback(() => {
    const date = new Date();
    setIsStart(false);
    setIsClear(false);
    setIsStopped(false);
    setStartDate(undefined);
    setStopDate(undefined);
    setTimer('--:--:--');
  }, []);

  useEffect(() => {
    if (isStart && startDate) {
      intervalId.current = setInterval(() => {
        setTimer(getClockTime(startDate));
      }, 1000);
    }

    return () => clearInterval(intervalId.current);
  }, [startDate, isStart]);

  return (
    <section className={styles.timer}>
      <div className={styles.timer__panel}>
        <div className={styles.timerBlock}>
          <div className={styles.time}>{timer}</div>
        </div>
      </div>
      <div className={styles.timer__controls}>
        <button
          disabled={isStart || isClear}
          className={styles.startBtn}
          onClick={handleStart}
        >
          Start
        </button>
        <button
          disabled={!isStart || isStopped}
          className={styles.stopBtn}
          onClick={handleStop}
        >
          Stop
        </button>
        <button
          disabled={!isClear}
          className={styles.clearBtn}
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
    </section>
  );
};
