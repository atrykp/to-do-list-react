import React from "react";
import { Link } from "react-router-dom";
const DateList = (props) => {
  let sortedArr = props.tasks.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });
  let dates = sortedArr.map((task) => task.date);

  return (
    <div>
      <h1>List of days</h1>
      <Link to="/date/1301">13.01.06</Link>
    </div>
  );
};

export default DateList;
