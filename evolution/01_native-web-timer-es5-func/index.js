(function () {
  var timer = document.querySelector('.time');
  var startBtn = document.querySelector('.start-btn');
  var stopBtn = document.querySelector('.stop-btn');
  var clearBtn = document.querySelector('.clear-btn');
  var isStart = false;
  var startDate;
  var nextDate;
  var stopDate;

  function calcDiff(startTime, endTime) {
    return new Date(endTime - startTime);
  }

  function formatDate(date) {
    if (date) {
      var d = new Date(date);
      var localOffset = d.getTimezoneOffset() / 60;
      var hoursWithoutOffset = d.getHours() + localOffset;
      var hour =
        hoursWithoutOffset < 10 ? '0' + hoursWithoutOffset : hoursWithoutOffset;
      var min = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
      var sec = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();
      return hour + ':' + min + ':' + sec;
    }
    return '--:--:--';
  }

  function getClockTime() {
    if (isStart) {
      var date = new Date();
      nextDate = date;
      var formattedTime = formatDate(calcDiff(startDate, nextDate));
      timer.innerHTML = formattedTime;
    }
    return;
  }

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
    timer.innerHTML = '--:--:--';
  }

  startBtn.addEventListener('click', handleStart);
  stopBtn.addEventListener('click', handleStop);
  clearBtn.addEventListener('click', handleClear);

  setInterval(() => {
    getClockTime();
  }, 1000);
})();
