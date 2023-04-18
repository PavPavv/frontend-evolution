import React, { Component } from 'react';

import { calcDiff, formatDate } from '../../util';

import styles from './Timer.module.css';

export class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStart: false,
      isStopped: false,
      isClear: false,
      startDate: undefined,
      nextDate: undefined,
      stopDate: undefined,
      timer: '--:--:--',
    };

    this.handleStart = this.handleStart.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  getClockTime(startDate) {
    if (startDate) {
      const date = new Date();
      this.setState({ nextDate: date });
      const formattedTime = formatDate(calcDiff(startDate, date));
      return formattedTime;
    }
    return '--:--:--';
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.setState({
        timer: this.getClockTime(this.state.startDate),
      });
    }, 1000);
  }

  handleStart() {
    console.log('start');
    const date = new Date();
    this.setState({
      isStart: true,
      startDate: date,
    });
    this.startTimer();
  }

  handleStop() {
    console.log('stop');
    const date = new Date();
    this.setState({
      isStart: false,
      isStopped: true,
      isClear: true,
      stopDate: date,
    });
    clearInterval(this.interval);
  }

  handleClear() {
    console.log('clear');
    const date = new Date();
    this.setState({
      interval: undefined,
      isStart: false,
      isStopped: false,
      isClear: false,
      startDate: undefined,
      nextDate: undefined,
      stopDate: undefined,
      timer: '--:--:--',
    });
  }

  componentDidMount() {
    console.log('componentDidMount this.state.isStart', this.state.isStart);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate this.state.isStart', this.state.isStart);
  }

  render() {
    return (
      <section className={styles.timer}>
        <div className={styles.timer__panel}>
          <div className={styles.timerBlock}>
            <div className={styles.time}>{this.state.timer}</div>
          </div>
        </div>
        <div className={styles.timer__controls}>
          <button
            disabled={this.state.isStart || this.state.isClear}
            className={styles.startBtn}
            onClick={this.handleStart}
          >
            Start
          </button>
          <button
            disabled={!this.state.isStart || this.state.isStopped}
            className={styles.stopBtn}
            onClick={this.handleStop}
          >
            Stop
          </button>
          <button
            disabled={!this.state.isClear}
            className={styles.clearBtn}
            onClick={this.handleClear}
          >
            Clear
          </button>
        </div>
      </section>
    );
  }
}
