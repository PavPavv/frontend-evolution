const calcDiff = (startTime, endTime) => {
  return new Date(endTime - startTime);
};

const formatDate = (date) => {
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
};

export const getClockTime = (timer, isStart, startDate, nextDate) => {
  if (isStart) {
    var date = new Date();
    nextDate = date;
    var formattedTime = formatDate(calcDiff(startDate, nextDate));
    timer.innerHTML = formattedTime;
  }
  return;
};
