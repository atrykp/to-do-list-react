import React from "react";

const Done = (props) => {
  const { name, id } = props.task;

  return (
    <>
      <div className="task">
        <p>
          {name} Zrobione: {props.date}
        </p>
        <button onClick={props.clickRemove.bind(this, id, false)}>X</button>
      </div>
    </>
  );
};

export default Done;
