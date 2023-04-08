import { getClockTime } from './utils';

const timer = () => {
  // create dom
  const section = document.createElement('section');
  const timer = document.createElement('div');
  timer.setAttribute('id', 'timer');
  const timerWrapper = document.createElement('div');
  timerWrapper.classList.add('timer__wrapper');
  const time = document.createElement('div');
  time.classList.add('time');
  time.innerHTML = '--:--:--';
  const btns = document.createElement('div');

  btns.setAttribute('id', 'btns');
  const startBtn = document.createElement('button');
  startBtn.classList.add('start-btn');
  startBtn.innerHTML = 'Start';
  const stopBtn = document.createElement('button');
  stopBtn.setAttribute('disabled', 'true');
  stopBtn.classList.add('stop-btn');
  stopBtn.innerHTML = 'Stop';
  const clearBtn = document.createElement('button');
  clearBtn.setAttribute('disabled', 'true');
  clearBtn.classList.add('clear-btn');
  clearBtn.innerHTML = 'Clear';

  // insert dom
  timerWrapper.appendChild(time);
  timer.appendChild(timerWrapper);
  btns.appendChild(startBtn);
  btns.appendChild(stopBtn);
  btns.appendChild(clearBtn);

  section.appendChild(timer);
  section.appendChild(btns);

  // state
  let isStart = false;
  let startDate;
  let nextDate;
  let stopDate;

  function handleStart() {
    var date = new Date();
    stopBtn.removeAttribute('disabled');
    startBtn.setAttribute('disabled', true);
    startDate = date;
    isStart = true;
  }

  function handleStop() {
    stopBtn.setAttribute('disabled', true);
    clearBtn.removeAttribute('disabled');
    stopDate = nextDate;
    isStart = false;
  }

  function handleClear() {
    startBtn.removeAttribute('disabled');
    clearBtn.setAttribute('disabled', true);
    startDate = undefined;
    nextDate = undefined;
    stopDate = undefined;
    time.innerHTML = '--:--:--';
  }

  startBtn.addEventListener('click', handleStart);
  stopBtn.addEventListener('click', handleStop);
  clearBtn.addEventListener('click', handleClear);

  setInterval(() => {
    getClockTime(time, isStart, startDate, nextDate);
  }, 1000);

  return section;
};

export default timer;
