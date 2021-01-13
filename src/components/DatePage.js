import React from "react";

const DatePage = (props) => {
  console.log(props);

  return (
    <div>
      <h1>{props.match.params.date}</h1>
      to do list in this day
    </div>
  );
};

export default DatePage;
