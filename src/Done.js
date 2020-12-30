import React from "react";

const Done = (props) => {
  const { name, date, priority } = props.task;

  return (
    <>
      <div className="task">
        <p className={priority ? "red" : ""}>
          {name} zrobić do: {date}
        </p>
        <button>X</button>
      </div>
    </>
  );
};

export default Done;
