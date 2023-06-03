import React from "react";
import date from "./date.module.css";

const DateSelector = () => {
  
  const days = [...Array(31).keys()].map((day) => (
    <option key={day + 1} value={day + 1}>
      {day + 1}
    </option>
  ));

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ].map((month, index) => (
    <option key={index + 1} value={index + 1}>
      {month}
    </option>
  ));

  const years = [...Array(32).keys()].map((index) => (
    <option key={index} value={2022 - index}>
      {2022 - index}
    </option>
  ));

  return (
    <div className={date.main}>
      <select name="Day" className={date.day}>
        <option value="Day">Day</option>
        {days}
      </select>

      <select name="Month" className={date.month}>
        <option value="Month">Month</option>
        {months}
      </select>

      <select name="Year" className={date.year}>
        <option value="Year">Year</option>
        {years}
      </select>
    </div>
  );
};

export default DateSelector;
