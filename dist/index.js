"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Locale = exports.MonthAction = void 0;
exports.MonthAction = {
    next: 'next',
    prev: 'prev',
};
exports.Locale = {
    us: 'en-us',
    es: 'es-es',
};
class Almanaque {
    constructor(todayDate = new Date(), localeConfig = exports.Locale.us) {
        this._locale = localeConfig;
        this._months = this.getMonths();
        this._weekdays = this.getWeekdays();
        this._today = todayDate;
        this._currentDay = todayDate;
        this._currentDayNumber = this._currentDay.getDate();
        this._currentDayName = this._currentDay.toLocaleString(this._locale, { weekday: 'short' });
        this._currentMonthNumber = this._currentDay.getMonth();
        this._currentMonthName = this._months[this._currentDay.getMonth()];
        this._firstDayOfMonth = new Date(this._currentDay.getFullYear(), this._currentDay.getMonth(), 1);
        this._currentYearNumber = this._currentDay.getFullYear();
        this._weekdayOfFirstDay = this._currentDay.getDay();
        this._currentDays = this.getCurrentMonthDays();
    }
    getMonths() {
        const months = {
            'en-us': [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
            ],
            'es-es': [
                'Enero',
                'Febrero',
                'Marzo',
                'Abril',
                'Mayo',
                'Junio',
                'Julio',
                'Agosto',
                'Septiembre',
                'Octubre',
                'Noviembre',
                'Diciembre'
            ]
        };
        return months[this._locale];
    }
    getWeekdays() {
        const weekdays = {
            'en-us': [
                'Sun',
                'Mon',
                'Tue',
                'Wed',
                'Thu',
                'Fri',
                'Sat'
            ],
            'es-es': [
                'Dom',
                'Lun',
                'Mar',
                'Mie',
                'Jue',
                'Vie',
                'Sab'
            ]
        };
        return weekdays[this._locale];
    }
    getCurrentMonthDays() {
        const monthDays = [];
        for (let day = 0; day < 42; day++) {
            if (day === 0 && this._weekdayOfFirstDay === 0) {
                this._firstDayOfMonth.setDate(this._firstDayOfMonth.getDate() - 7);
            }
            else if (day === 0) {
                this._firstDayOfMonth.setDate(this._firstDayOfMonth.getDate() + (day - this._weekdayOfFirstDay));
            }
            else {
                this._firstDayOfMonth.setDate(this._firstDayOfMonth.getDate() + 1);
            }
            const isCurrentMonth = this._firstDayOfMonth.getMonth() === this._currentDay.getMonth();
            let monthDay = {
                currentMonth: isCurrentMonth,
                date: new Date(this._firstDayOfMonth).toString(),
                month: this._firstDayOfMonth.getMonth(),
                number: this._firstDayOfMonth.getDate(),
                selected: isCurrentMonth ? this._firstDayOfMonth.toDateString() === this._today.toDateString() : false,
                year: this._firstDayOfMonth.getFullYear()
            };
            monthDays.push(monthDay);
        }
        return monthDays;
    }
    moveMonth(action) {
        if (action === exports.MonthAction.next) {
            this._currentDay.setMonth(this._currentDay.getMonth() + 1);
        }
        else {
            this._currentDay.setMonth(this._currentDay.getMonth() - 1);
        }
        this._currentDay.setDate(1);
        this._currentYearNumber = this._currentDay.getFullYear();
        this._currentDayNumber = this._currentDay.getDate();
        this._currentDayName = this._currentDay.toLocaleString(this._locale, { weekday: 'short' });
        this._currentMonthNumber = this._currentDay.getMonth();
        this._currentMonthName = this._months[this._currentDay.getMonth()];
        this._firstDayOfMonth = new Date(this._currentDay.getFullYear(), this._currentDay.getMonth(), 1);
        this._weekdayOfFirstDay = this._firstDayOfMonth.getDay();
        this._currentDays = this.getCurrentMonthDays();
    }
    nextMonth() {
        this.moveMonth(exports.MonthAction.next);
    }
    prevMonth() {
        this.moveMonth(exports.MonthAction.prev);
    }
    get weekdays() {
        return this._weekdays;
    }
    set weekdays(weekdays) {
        this._weekdays = weekdays;
    }
    get months() {
        return this._months;
    }
    set months(months) {
        this._weekdays = months;
    }
    get today() {
        return this._today;
    }
    set today(today) {
        this._today = today;
    }
    get currentDay() {
        return this._currentDay;
    }
    set currentDay(currentDay) {
        this._currentDay = currentDay;
    }
    get currentDayNumber() {
        return this._currentDayNumber;
    }
    set currentDayNumber(currentDayNumber) {
        this._currentDayNumber = currentDayNumber;
    }
    get currentDayName() {
        return this._currentDayName;
    }
    set currentDayName(currentDayName) {
        this._currentDayName = currentDayName;
    }
    get currentMonthNumber() {
        return this._currentMonthNumber;
    }
    set currentMonthNumber(currentMonthNumber) {
        this._currentMonthNumber = currentMonthNumber;
    }
    get currentMonthName() {
        return this._currentMonthName;
    }
    set currentMonthName(currentMonthName) {
        this._currentMonthName = currentMonthName;
    }
    get currentYearNumber() {
        return this._currentYearNumber;
    }
    set currentYearNumber(currentYearNumber) {
        this._currentYearNumber = currentYearNumber;
    }
    get currentDays() {
        return this._currentDays;
    }
    set currentDays(currentDays) {
        this._currentDays = currentDays;
    }
    get weekdayOfFirstDay() {
        return this._weekdayOfFirstDay;
    }
    set weekdayOfFirstDay(weekdayOfFirstDay) {
        this._weekdayOfFirstDay = weekdayOfFirstDay;
    }
}
exports.default = Almanaque;
//# sourceMappingURL=index.js.map