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

export const getClockTime = (
  timer: Element,
  isStart: boolean,
  startDate: Date | undefined,
  nextDate: Date | undefined,
) => {
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
