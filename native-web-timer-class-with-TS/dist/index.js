"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Widget = /** @class */ (function () {
    function Widget() {
    }
    return Widget;
}());
var SimpleComponent = /** @class */ (function () {
    function SimpleComponent() {
        this.isLogical = false;
    }
    return SimpleComponent;
}());
var ComplexComponent = /** @class */ (function () {
    function ComplexComponent() {
        this.isLogical = true;
    }
    return ComplexComponent;
}());
var Title = /** @class */ (function (_super) {
    __extends(Title, _super);
    function Title(title) {
        if (title === void 0) { title = ''; }
        var _this = _super.call(this) || this;
        _this.title = title;
        return _this;
    }
    Title.prototype.getTemplate = function () {
        return "\n      <section>\n        <a>Test</a>\n        <h1>".concat(this.title, "</h1>\n      </section>\n    ");
    };
    Title.prototype.build = function () {
        return this.getTemplate();
    };
    Title.prototype.applyLogic = function () { };
    return Title;
}(SimpleComponent));
var Timer = /** @class */ (function (_super) {
    __extends(Timer, _super);
    function Timer() {
        var _this = _super.call(this) || this;
        _this.template = "\n    <section>\n      <div id=\"timer\">\n        <div class=\"timer__wrapper\">\n          <div class=\"time\">--:--:--</div>\n        </div>\n      </div>\n      <div id=\"btns\">\n        <button class=\"start-btn\">Start</button>\n        <button disabled class=\"stop-btn\">Stop</button>\n        <button disabled class=\"clear-btn\">Clear</button>\n      </div>\n    </section>\n  ";
        _this.timer = null;
        _this.startBtn = null;
        _this.stopBtn = null;
        _this.clearBtn = null;
        _this.isStart = false;
        _this.startDate = undefined;
        _this.nextDate = undefined;
        _this.stopDate = undefined;
        return _this;
    }
    Timer.prototype.getElementsFromDOM = function () {
        this.timer = document.querySelector('.time');
        this.startBtn = document.querySelector('.start-btn');
        this.stopBtn = document.querySelector('.stop-btn');
        this.clearBtn = document.querySelector('.clear-btn');
    };
    Timer.prototype.start = function () {
        var date = new Date();
        if (this.stopBtn && this.startBtn) {
            this.stopBtn.removeAttribute('disabled');
            this.startBtn.setAttribute('disabled', 'true');
        }
        this.startDate = date;
        this.isStart = true;
    };
    Timer.prototype.stop = function () {
        if (this.stopBtn && this.clearBtn) {
            this.stopBtn.setAttribute('disabled', 'true');
            this.clearBtn.removeAttribute('disabled');
        }
        this.stopDate = this.nextDate;
        this.isStart = false;
    };
    Timer.prototype.clear = function () {
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
    };
    Timer.prototype.addHandlers = function () {
        if (this.startBtn && this.stopBtn && this.clearBtn) {
            this.startBtn.addEventListener('click', this.start.bind(this));
            this.stopBtn.addEventListener('click', this.stop.bind(this));
            this.clearBtn.addEventListener('click', this.clear.bind(this));
        }
    };
    Timer.prototype.calcDiff = function (startTime, endTime) {
        if (startTime && endTime) {
            return new Date(endTime.valueOf() - startTime.valueOf());
        }
        return new Date();
    };
    Timer.prototype.formatDate = function (date) {
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
    Timer.prototype.getClockTime = function () {
        if (this.isStart) {
            var date = new Date();
            this.nextDate = date;
            var formattedTime = this.formatDate(this.calcDiff(this.startDate, this.nextDate));
            if (this.timer) {
                this.timer.innerHTML = formattedTime;
            }
        }
        return;
    };
    Timer.prototype.run = function () {
        var _this = this;
        setInterval(function () {
            _this.getClockTime();
        }, 1000);
    };
    Timer.prototype.applyLogic = function () {
        this.getElementsFromDOM();
        this.addHandlers();
        this.run();
    };
    Timer.prototype.build = function () {
        return this.template;
    };
    return Timer;
}(ComplexComponent));
var App = /** @class */ (function () {
    function App(rootElemStr, widgetsArr) {
        if (rootElemStr === void 0) { rootElemStr = 'body'; }
        this.rootElemStr = rootElemStr;
        this.widgets = widgetsArr;
    }
    App.prototype.run = function () {
        var rootElem = document.querySelector(this.rootElemStr);
        if (rootElem) {
            for (var _i = 0, _a = this.widgets; _i < _a.length; _i++) {
                var widget = _a[_i];
                rootElem.insertAdjacentHTML('beforeend', widget.build());
                var isComplicated = widget.isLogical;
                if (isComplicated) {
                    widget.applyLogic();
                }
            }
        }
    };
    return App;
}());
var app = new App('.container', [new Title('Timer'), new Timer()]);
app.run();
