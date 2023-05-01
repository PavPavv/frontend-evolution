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
  timer: Element | null = null;
  startBtn: Element | null = null;
  stopBtn: Element | null = null;
  clearBtn: Element | null = null;
  isStart: boolean = false;
  startDate: Date | undefined = undefined;
  nextDate: Date | undefined = undefined;
  stopDate: Date | undefined = undefined;

  constructor() {
    super();
  }

  getElementsFromDOM(): void {
    this.timer = document.querySelector('.time');
    this.startBtn = document.querySelector('.start-btn');
    this.stopBtn = document.querySelector('.stop-btn');
    this.clearBtn = document.querySelector('.clear-btn');
  }

  start(): void {
    var date = new Date();
    if (this.stopBtn && this.startBtn) {
      this.stopBtn.removeAttribute('disabled');
      this.startBtn.setAttribute('disabled', 'true');
    }
    this.startDate = date;
    this.isStart = true;
  }

  stop(): void {
    if (this.stopBtn && this.clearBtn) {
      this.stopBtn.setAttribute('disabled', 'true');
      this.clearBtn.removeAttribute('disabled');
    }
    this.stopDate = this.nextDate;
    this.isStart = false;
  }

  clear(): void {
    if (this.startBtn && this.clearBtn) {
      this.startBtn.removeAttribute('disabled');
      this.clearBtn.setAttribute('disabled', 'true');
    }
    this.startDate = undefined;
    this.nextDate = undefined;
    this.stopDate = undefined;
    if (this.timer) {
      this.timer.innerHTML = '--:--:--';
    }
  }

  addHandlers(): void {
    if (this.startBtn && this.stopBtn && this.clearBtn) {
      this.startBtn.addEventListener('click', this.start.bind(this));
      this.stopBtn.addEventListener('click', this.stop.bind(this));
      this.clearBtn.addEventListener('click', this.clear.bind(this));
    }
  }

  calcDiff(startTime?: Date, endTime?: Date): Date {
    if (startTime && endTime) {
      return new Date(endTime.valueOf() - startTime.valueOf());
    }
    return new Date();
  }

  formatDate(date: Date): string {
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

  getClockTime(): void {
    if (this.isStart) {
      var date = new Date();
      this.nextDate = date;
      var formattedTime = this.formatDate(
        this.calcDiff(this.startDate, this.nextDate),
      );
      if (this.timer) {
        this.timer.innerHTML = formattedTime;
      }
    }
    return;
  }

  run(): void {
    setInterval(() => {
      this.getClockTime();
    }, 1000);
  }

  applyLogic(): void {
    this.getElementsFromDOM();
    this.addHandlers();
    this.run();
  }

  build(): string {
    return this.template;
  }
}

export default Timer;
