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
  const links = dateArrs.map((arr) => (
    <li>
      <Link key={Math.floor(Math.random() * 123)} to={`/date/${arr[0].date}`}>
        {arr[0].date} ({arr.length})
      </Link>
    </li>
  ));

  return (
    <div>
      <h1 className="titleDateList">List of days</h1>
      <ul className="dateList">{links}</ul>
    </div>
  );
};

export default DateList;
