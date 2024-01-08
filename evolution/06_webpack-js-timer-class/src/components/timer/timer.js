import ComplexComponent from '../base/ComplexComponent';

class Timer extends ComplexComponent {
  template = `
    <section>
      <div id="timer">
        <div class="timer__wrapper">
          <div class="time">--:--:--</div>
        </div>
      </div>
      <div id="btns">
        <button class="start-btn">Start</button>
        <button disabled class="stop-btn">Stop</button>
        <button disabled class="clear-btn">Clear</button>
      </div>
    </section>
  `;
  timer = null;
  startBtn = null;
  stopBtn = null;
  clearBtn = null;
  isStart = false;
  startDate = undefined;
  nextDate = undefined;
  stopDate = undefined;

  constructor() {
    super();
    this.isLogical = true;
  }

  getElementsFromDOM() {
    this.timer = document.querySelector('.time');
    this.startBtn = document.querySelector('.start-btn');
    this.stopBtn = document.querySelector('.stop-btn');
    this.clearBtn = document.querySelector('.clear-btn');
  }

  start() {
    var date = new Date();
    this.stopBtn.removeAttribute('disabled');
    this.startBtn.setAttribute('disabled', true);
    this.startDate = date;
    this.isStart = true;
  }

  stop() {
    this.stopBtn.setAttribute('disabled', true);
    this.clearBtn.removeAttribute('disabled');
    this.stopDate = this.nextDate;
    this.isStart = false;
  }

  clear() {
    this.startBtn.removeAttribute('disabled');
    this.clearBtn.setAttribute('disabled', true);
    this.startDate = undefined;
    this.nextDate = undefined;
    this.stopDate = undefined;
    this.timer.innerHTML = '--:--:--';
  }

  addHandlers() {
    this.startBtn.addEventListener('click', this.start.bind(this));
    this.stopBtn.addEventListener('click', this.stop.bind(this));
    this.clearBtn.addEventListener('click', this.clear.bind(this));
  }

  calcDiff(startTime, endTime) {
    return new Date(endTime - startTime);
  }

  formatDate(date) {
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

  getClockTime() {
    if (this.isStart) {
      var date = new Date();
      this.nextDate = date;
      var formattedTime = this.formatDate(
        this.calcDiff(this.startDate, this.nextDate),
      );
      this.timer.innerHTML = formattedTime;
    }
    return;
  }

  run() {
    setInterval(() => {
      this.getClockTime();
    }, 1000);
  }

  applyLogic() {
    this.getElementsFromDOM();
    this.addHandlers();
    this.run();
  }

  build() {
    return this.template;
  }
}

export default Timer;
