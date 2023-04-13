"use strict";
var main = function () {
    var timer = document.querySelector('.time');
    var startBtn = document.querySelector('.start-btn');
    var stopBtn = document.querySelector('.stop-btn');
    var clearBtn = document.querySelector('.clear-btn');
    var isStart = false;
    var startDate;
    var nextDate;
    var stopDate;
    var calcDiff = function (startTime, endTime) {
        if (startTime && endTime) {
            var start = new Date(startTime);
            var end = new Date(endTime);
            return new Date(end.valueOf() - start.valueOf());
        }
        return new Date();
    };
    var formatDate = function (date) {
        if (date) {
            var d = new Date(date);
            var localOffset = d.getTimezoneOffset() / 60;
            var hoursWithoutOffset = d.getHours() + localOffset;
            var hour = hoursWithoutOffset < 10 ? '0' + hoursWithoutOffset : hoursWithoutOffset;
            var min = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
            var sec = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();
            return hour + ':' + min + ':' + sec;
        }
        return '--:--:--';
    };
    var getClockTime = function () {
        if (isStart) {
            var date = new Date();
            nextDate = date;
            var formattedTime = formatDate(calcDiff(startDate, nextDate));
            if (timer) {
                timer.innerHTML = formattedTime;
            }
        }
        return;
    };
    var handleStart = function () {
        var date = new Date();
        stopBtn === null || stopBtn === void 0 ? void 0 : stopBtn.removeAttribute('disabled');
        startBtn === null || startBtn === void 0 ? void 0 : startBtn.setAttribute('disabled', 'true');
        startDate = date;
        isStart = true;
    };
    var handleStop = function () {
        stopBtn === null || stopBtn === void 0 ? void 0 : stopBtn.setAttribute('disabled', 'true');
        clearBtn === null || clearBtn === void 0 ? void 0 : clearBtn.removeAttribute('disabled');
        stopDate = nextDate;
        isStart = false;
    };
    var handleClear = function () {
        startBtn === null || startBtn === void 0 ? void 0 : startBtn.removeAttribute('disabled');
        clearBtn === null || clearBtn === void 0 ? void 0 : clearBtn.setAttribute('disabled', 'true');
        startDate = undefined;
        nextDate = undefined;
        stopDate = undefined;
        if (timer) {
            timer.innerHTML = '--:--:--';
        }
    };
    startBtn === null || startBtn === void 0 ? void 0 : startBtn.addEventListener('click', handleStart);
    stopBtn === null || stopBtn === void 0 ? void 0 : stopBtn.addEventListener('click', handleStop);
    clearBtn === null || clearBtn === void 0 ? void 0 : clearBtn.addEventListener('click', handleClear);
    setInterval(function () {
        getClockTime();
    }, 1000);
};
main();
