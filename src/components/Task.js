import React from "react";

const Task = (props) => {
  const { name, id, doneDate, date, priority } = props.task;

  if (props.done) {
    const time = new Date(doneDate).toLocaleString();
    return (
      <>
        <div className="task">
          <p className="doneTask">
            <span>{name} </span> Done: {time}
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
            <span>{name}</span> complete task to: {date}
          </p>
          <button onClick={props.clickDone.bind(this, id)}>Done</button>
          <button onClick={() => props.clickRemove(id)}>X</button>
        </div>
      </>
    );
  }
};

export default Task;
