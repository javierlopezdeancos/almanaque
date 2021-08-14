export interface IAlmanaque {
  weekdays: string[];
  months: string[];
  today: Date;
  currentDay: Date;
  currentDayNumber: number;
  currentMonthNumber: number;
  currentMonthName: string;
  currentYearNumber: number;
  currentDays: Day[];
  nextMonth: () => void;
  prevMonth: () => void;
}

export type MonthAction = 'next' | 'prev';

export type Day = {
  currentMonth: boolean;
  date: Date;
  month: number;
  number: number;
  selected: boolean;
  year: number;
}

export default class Almanaque implements IAlmanaque {
  private _weekdays: string[];

  private _months: string[];

  private _today: Date;

  private _currentDay: Date;

  private _currentDayNumber: number;

  private _currentMonthNumber: number

  private _currentMonthName: string;

  private _currentYearNumber: number;

  private _firstDayOfMonth: Date;

  private _weekdayOfFirstDay: number;

  private _currentDays: Day[];

  constructor() {
    this._months = [
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
    ];

    this._weekdays = [
      'Sun',
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat'
    ];

    this._today = new Date();
    this._currentDay = new Date();
    this._currentDayNumber = this._currentDay.getDate();
    this._currentMonthNumber = this._currentDay.getMonth();
    this._currentMonthName = this._months[this._currentDay.getMonth()];
    this._firstDayOfMonth = new Date(this._currentDay.getFullYear(), this._currentDay.getMonth(), 1);
    this._currentYearNumber = this._currentDay.getFullYear();
    this._weekdayOfFirstDay = this._currentDay.getDay();
    this._currentDays = this.getCurrentMonthDays();
  }

  private getCurrentMonthDays(): Day[] {
    const monthDays = [] as Day[];

    for (let day = 0; day < 42; day++) {
      if (day === 0 && this._weekdayOfFirstDay === 0) {
        this._firstDayOfMonth.setDate(this._firstDayOfMonth.getDate() - 7);
      } else if (day === 0) {
        this._firstDayOfMonth.setDate(this._firstDayOfMonth.getDate() + (day - this._weekdayOfFirstDay));
      } else {
        this._firstDayOfMonth.setDate(this._firstDayOfMonth.getDate() + 1);
      }

      const isCurrentMonth = this._firstDayOfMonth.getMonth() === this._currentDay.getMonth();

      let monthDay = {
        currentMonth: isCurrentMonth,
        date: new Date(this._firstDayOfMonth),
        month: this._firstDayOfMonth.getMonth(),
        number: this._firstDayOfMonth.getDate(),
        selected: isCurrentMonth ? this._firstDayOfMonth.toDateString() === this._today.toDateString() : false,
        year: this._firstDayOfMonth.getFullYear()
      };

      monthDays.push(monthDay);
    }

    return monthDays;
  }

  private moveMonth(action: MonthAction): void {

    if (action === "next") {
      this._currentDay.setMonth(this._currentDay.getMonth() + 1);
    } else {
      this._currentDay.setMonth(this._currentDay.getMonth() - 1);
    }

    this._currentDay.setDate(1);
    this._currentYearNumber = this._currentDay.getFullYear();
    this._currentDayNumber =   this._currentDay.getDate();
    this._currentMonthNumber = this._currentDay.getMonth();
    this._currentMonthName = this._months[this._currentDay.getMonth()];
    this._firstDayOfMonth = new Date(this._currentDay.getFullYear(), this._currentDay.getMonth(), 1);
    this._weekdayOfFirstDay = this._firstDayOfMonth.getDay();
    this._currentDays = this.getCurrentMonthDays();
  }

  public nextMonth(): void {
    this.moveMonth('next');
  }

  public prevMonth(): void {
     this.moveMonth('prev');
  }

  public get weekdays(): string[] {
    return this._weekdays;
  }

  public set weekdays(weekdays: string[]) {
    this._weekdays = weekdays;
  }

  public get months(): string[] {
    return this._months;
  }

  public set months(months: string[]) {
    this._weekdays = months;
  }

  public get today(): Date {
    return this._today;
  }

  public set today(today: Date) {
    this._today = today;
  }

  public get currentDay(): Date {
    return this._currentDay;
  }

  public set currentDay(currentDay: Date) {
    this._currentDay = currentDay;
  }

  public get currentDayNumber(): number {
    return this._currentDayNumber;
  }

  public set currentDayNumber(currentDayNumber: number) {
    this._currentDayNumber  = currentDayNumber;
  }

  public get currentMonthNumber(): number {
    return this._currentMonthNumber;
  }

  public set currentMonthNumber(currentMonthNumber: number) {
    this._currentMonthNumber  = currentMonthNumber;
  }

  public get currentMonthName(): string {
    return this._currentMonthName;
  }

  public set currentMonthName(currentMonthName: string) {
    this._currentMonthName  = currentMonthName;
  }

  public get currentYearNumber(): number {
    return this._currentYearNumber;
  }

  public set currentYearNumber(currentYearNumber: number) {
    this._currentYearNumber = currentYearNumber;
  }

  public get currentDays(): Day[] {
    return this._currentDays;
  }

  public set currentDays(currentDays: Day[]) {
    this._currentDays = currentDays;
  }
}

export const almanaque = new Almanaque();
