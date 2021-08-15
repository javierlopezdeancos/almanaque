export interface IAlmanaque {
    weekdays: string[];
    months: string[];
    today: Date;
    currentDay: Date;
    currentDayNumber: number;
    currentDayName: string;
    currentMonthNumber: number;
    currentMonthName: string;
    currentYearNumber: number;
    currentDays: Day[];
    weekdayOfFirstDay: number;
    nextMonth: () => void;
    prevMonth: () => void;
}
export declare const MonthAction: {
    readonly next: "next";
    readonly prev: "prev";
};
export declare type MonthActions = typeof MonthAction[keyof typeof MonthAction];
export declare const Locale: {
    readonly us: "en-us";
    readonly es: "es-es";
};
export declare type Locales = typeof Locale[keyof typeof Locale];
export declare type Day = {
    currentMonth: boolean;
    date: string;
    month: number;
    number: number;
    selected: boolean;
    year: number;
};
export default class Almanaque implements IAlmanaque {
    private _locale;
    private _weekdays;
    private _months;
    private _today;
    private _currentDay;
    private _currentDayNumber;
    private _currentDayName;
    private _currentMonthNumber;
    private _currentMonthName;
    private _currentYearNumber;
    private _firstDayOfMonth;
    private _weekdayOfFirstDay;
    private _currentDays;
    constructor(todayDate?: Date, localeConfig?: "en-us");
    private getMonths;
    private getWeekdays;
    private getCurrentMonthDays;
    private moveMonth;
    nextMonth(): void;
    prevMonth(): void;
    get weekdays(): string[];
    set weekdays(weekdays: string[]);
    get months(): string[];
    set months(months: string[]);
    get today(): Date;
    set today(today: Date);
    get currentDay(): Date;
    set currentDay(currentDay: Date);
    get currentDayNumber(): number;
    set currentDayNumber(currentDayNumber: number);
    get currentDayName(): string;
    set currentDayName(currentDayName: string);
    get currentMonthNumber(): number;
    set currentMonthNumber(currentMonthNumber: number);
    get currentMonthName(): string;
    set currentMonthName(currentMonthName: string);
    get currentYearNumber(): number;
    set currentYearNumber(currentYearNumber: number);
    get currentDays(): Day[];
    set currentDays(currentDays: Day[]);
    get weekdayOfFirstDay(): number;
    set weekdayOfFirstDay(weekdayOfFirstDay: number);
}
