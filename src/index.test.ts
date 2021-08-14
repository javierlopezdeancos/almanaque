import Almanaque from './';
import { discoveryOfAmericaDate, discoveryOfAmericaMonthDays, months, weekdays } from './index.mock';

const almanaque = new Almanaque(discoveryOfAmericaDate, 'en-us');

describe('Almanaque', () => {
  test('should return month 9 number and October name at the beginning', () => {
    expect(almanaque.currentMonthNumber).toBe(9);
    expect(almanaque.currentMonthName).toBe(months[9]);
  });

  test('should return day 12 number and Mon as weekday name at the beginning', () => {
    expect(almanaque.currentDayNumber).toBe(12);
    expect(almanaque.currentDayName).toBe(weekdays[1]);
  });

  test('should return year 1942 at the beginning', () => {
    expect(almanaque.currentYearNumber).toBe(1942);
  });

  test('should return month days at the beginning to Monday 12 of October of 1942', () => {
    expect(JSON.stringify(almanaque.currentDays)).toBe(JSON.stringify(discoveryOfAmericaMonthDays));
  });

  test('should return current like Sunday 1 of November of 1942 if next month', () => {
    almanaque.nextMonth();

    expect(almanaque.currentDayNumber).toBe(1);
    expect(almanaque.currentDayName).toBe(weekdays[0]);
    expect(almanaque.currentMonthNumber).toBe(10);
    expect(almanaque.currentMonthName).toBe(months[10]);
    expect(almanaque.currentYearNumber).toBe(1942);
  });

  test('should return current like Tuesday 1 of September of 1942 if prev month', () => {
    almanaque.prevMonth();
    almanaque.prevMonth();

    expect(almanaque.currentDayNumber).toBe(1);
    expect(almanaque.currentDayName).toBe(weekdays[2]);
    expect(almanaque.currentMonthNumber).toBe(8);
    expect(almanaque.currentMonthName).toBe(months[8]);
    expect(almanaque.currentYearNumber).toBe(1942);
  });
});
