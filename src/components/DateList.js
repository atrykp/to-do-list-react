import React from "react";
import { Link } from "react-router-dom";
const DateList = (props) => {
  let sortedArr = [...props.tasks];
  sortedArr.sort(function (a, b) {
    return new Date(a.date) - new Date(b.date);
  });
  let dateArrs = [];

  while (sortedArr.length > 0) {
    let currDate = sortedArr[0].date;
    let endIndex = sortedArr.filter((element) => element.date === currDate)
      .length;
    let dateArr = sortedArr.splice(0, endIndex);
    dateArrs.push(dateArr);
  }

  return (
    <div>
      <h1>List of days</h1>
      <Link to="/date/1301">13.01.06</Link>
    </div>
  );
};

export default DateList;
