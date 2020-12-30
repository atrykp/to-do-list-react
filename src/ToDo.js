import React from "react";

const ToDo = (props) => {
  const { name, date, priority, id } = props.task;

  return (
    <>
      <div className="task">
        <p className={priority ? "red" : ""}>
          {name} zrobić do: {date}
        </p>
        <button id={id} onClick={props.clickDone}>
          Zrobione
        </button>
        <button>X</button>
      </div>
    </>
  );
};

export default ToDo;
