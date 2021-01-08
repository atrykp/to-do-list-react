import React from "react";

const Task = (props) => {
  const { name, id, doneDate, date, priority } = props.task;

  if (props.done) {
    const time = new Date(doneDate).toLocaleString();
    return (
      <>
        <div className="task">
          <p className="doneTask">
            <span>{name} </span> Zrobione: {time}
          </p>
          <button onClick={() => props.clickRemove(id)}>X</button>
        </div>
      </>
    );
  } else {
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
  }
};

export default Task;
