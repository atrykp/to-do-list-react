import React from "react";

const ToDo = (props) => {
  const { name, date, priority, id } = props.task;

  return (
    <>
      <div className="task">
        <p className={priority ? "red" : ""}>
          <span>{name}</span> zrobić do: {date}
        </p>
        <button onClick={props.clickDone.bind(this, id)}>Zrobione</button>
        <button onClick={() => props.clickRemove(id)}>X</button>
      </div>
    </>
  );
};

export default ToDo;
