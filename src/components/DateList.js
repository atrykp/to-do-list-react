import React from "react";
import { Link } from "react-router-dom";
const DateList = () => {
  return (
    <div>
      <h1>List of days</h1>
      <Link to="/date/1301">13.01.06</Link>
    </div>
  );
};

export default DateList;
