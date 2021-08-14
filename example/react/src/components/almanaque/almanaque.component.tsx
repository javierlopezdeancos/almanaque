import React, { useCallback, useState } from 'react';

import Almanaque, { Day } from './almanaque.lib';

import '../button/button.component.css'
import '../grid/grid.component.css';
import './almanaque.component.css';

const almanaque = new Almanaque();

export function AlmanaqueComponent() {
  const [ currentDays, setCurrentDays] = useState(almanaque.currentDays);

  const getDayClass = useCallback(
    (day: Day): string => {
      let dayClass = "almanaque-month-view-day";

      if (day.currentMonth) {
        dayClass += " almanaque-month-view-day--current";
      }

      if (day.selected) {
        dayClass += " almanaque-month-view-day--selected";
      }

      return dayClass;
    },
    []
  );

  const nextMonth = () => {
    almanaque.nextMonth();
    setCurrentDays(almanaque.currentDays);
  }

  const prevMonth = () => {
    almanaque.prevMonth();
    setCurrentDays(almanaque.currentDays);
  }

  return (
    <div className="almanaque">
      <header className="almanaque-month-view-header">
        <h2>{almanaque.currentMonthName} of {almanaque.currentYearNumber}</h2>
        <div className="almanaque-month-view-actions">
          <button className="button" onClick={prevMonth}>PREV</button>
          <button className="button" onClick={nextMonth}>NEXT</button>
        </div>
      </header>
      <section className="grid">
        {
          almanaque?.weekdays?.map((weekDay) => {
            return (
              <div
                className="almanaque-month-view-week-day"
                key={`${weekDay}-${almanaque.currentYearNumber}`}>
                {weekDay}
              </div>
            )
          })
        }
        {
          currentDays?.map((day: Day) => {
            return (
              <div
                className={getDayClass(day)}
                key={`${day.number}-${day.month}-${almanaque.currentYearNumber}`}
              >
                {day.number}
              </div>
            )
          })
        }
      </section>
    </div>
  );
}
