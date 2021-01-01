import React from "react";

const Done = (props) => {
  const { name, id, doneDate } = props.task;
  console.log(doneDate);

  const time = new Date(doneDate).toLocaleString();
  return (
    <>
      <div className="task">
        <p>
          <span>{name} </span> Zrobione: {time}
        </p>
        <button onClick={() => props.clickRemove(id)}>X</button>
      </div>
    </>
  );
};

export default Done;
