import React from "react";

const Done = (props) => {
  const { name, date, id } = props.task;

  return (
    <>
      <div className="task">
        <p>
          {name} zrobić do: {date}
        </p>
        <button onClick={props.clickRemove.bind(this, id, false)}>X</button>
      </div>
    </>
  );
};

export default Done;
