export const calcDiff = (startTime, endTime) => {
  return new Date(endTime - startTime);
};

export const formatDate = (date) => {
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
