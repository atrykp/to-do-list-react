import React, { useState } from "react";

const Task = (props) => {
  const { name, id, doneDate, date, priority } = props.task;
  const [editActive, setEditActive] = useState(false);
  const [txtInputValue, setTxtInputValue] = useState("");
  const [dateInputValue, setDateInputValue] = useState(date);

  const activeEditMode = () => {
    setEditActive(true);
  };
  const handleTxtChange = (e) => {
    let value = e.target.value;
    setTxtInputValue(value);
  };
  const handleDateChange = (e) => {
    let value = e.target.value;
    setDateInputValue(value);
  };
  const handleCancel = () => {
    setTxtInputValue("");
    setDateInputValue(date);
    setEditActive(false);
  };
  const handleSaveChanges = () => {
    setEditActive(false);
    props.saveChanges(txtInputValue, dateInputValue, id);
  };

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
    let editTxtInput = editActive && (
      <input type="text" onChange={handleTxtChange} value={txtInputValue} />
    );
    let editDateInput = editActive && (
      <input type="date" onChange={handleDateChange} value={dateInputValue} />
    );
    let buttons = editActive
      ? [
          <button onClick={handleSaveChanges}>save</button>,
          <button onClick={handleCancel}>cancel</button>,
        ]
      : [
          <button onClick={props.clickDone.bind(this, id)}>Done</button>,
          <button onClick={activeEditMode}>edit</button>,
          <button onClick={() => props.clickRemove(id)}>X</button>,
        ];
    return (
      <>
        <div className="task">
          <p className={priority ? "red" : ""}>
            <span>
              {name}
              {editTxtInput}
              {editDateInput}
            </span>{" "}
            complete task to: {date}
          </p>

          {buttons}
        </div>
      </>
    );
  }
};

export default Task;
