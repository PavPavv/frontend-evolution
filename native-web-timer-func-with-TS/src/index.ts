const main = (): void => {
  const timer = document.querySelector('.time');
  const startBtn = document.querySelector('.start-btn');
  const stopBtn = document.querySelector('.stop-btn');
  const clearBtn = document.querySelector('.clear-btn');
  let isStart = false;
  let startDate: Date | undefined;
  let nextDate: Date | undefined;
  let stopDate: Date | undefined;

  const calcDiff = (startTime?: Date, endTime?: Date): Date => {
    if (startTime && endTime) {
      const start = new Date(startTime);
      const end = new Date(endTime);
      return new Date(end.valueOf() - start.valueOf());
    }
    return new Date();
  };

  const formatDate = (date: Date): string => {
    if (date) {
      const d = new Date(date);
      const localOffset = d.getTimezoneOffset() / 60;
      const hoursWithoutOffset = d.getHours() + localOffset;
      const hour =
        hoursWithoutOffset < 10 ? '0' + hoursWithoutOffset : hoursWithoutOffset;
      const min = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
      const sec = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();
      return hour + ':' + min + ':' + sec;
    }
    return '--:--:--';
  };

  const getClockTime = (): void => {
    if (isStart) {
      const date = new Date();
      nextDate = date;
      const formattedTime = formatDate(calcDiff(startDate, nextDate));
      if (timer) {
        timer.innerHTML = formattedTime;
      }
    }
    return;
  };

  const handleStart = (): void => {
    const date = new Date();
    stopBtn?.removeAttribute('disabled');
    startBtn?.setAttribute('disabled', 'true');
    startDate = date;
    isStart = true;
  };

  const handleStop = (): void => {
    stopBtn?.setAttribute('disabled', 'true');
    clearBtn?.removeAttribute('disabled');
    stopDate = nextDate;
    isStart = false;
  };

  const handleClear = (): void => {
    startBtn?.removeAttribute('disabled');
    clearBtn?.setAttribute('disabled', 'true');
    startDate = undefined;
    nextDate = undefined;
    stopDate = undefined;
    if (timer) {
      timer.innerHTML = '--:--:--';
    }
  };

  startBtn?.addEventListener('click', handleStart);
  stopBtn?.addEventListener('click', handleStop);
  clearBtn?.addEventListener('click', handleClear);

  setInterval((): void => {
    getClockTime();
  }, 1000);
};
main();
