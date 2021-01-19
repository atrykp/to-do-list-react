import React, { useState } from "react";

const Task = (props) => {
  const { name, id, doneDate, date, priority } = props.task;
  const [editActive, setEditActive] = useState(false);
  const [txtInputValue, setTxtInputValue] = useState("");
  const [dateInputValue, setDateInputValue] = useState(date);
  const [checkInputValue, setCheckInputValue] = useState(priority);

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
    setCheckInputValue(priority);
  };
  const handleSaveChanges = () => {
    setEditActive(false);
    props.saveChanges(txtInputValue, dateInputValue, checkInputValue, id);
  };
  const handleChangePrority = () => {
    setCheckInputValue((prevValue) => !prevValue);
  };

  if (props.done) {
    const time = new Date(doneDate).toLocaleString();
    return (
      <>
        <div className="task clearfix">
          <p>
            Done: <span className="taskDate">{time}</span>
          </p>
          <p className="doneTask">{name}</p>
          <div className="buttons">
            <button onClick={() => props.clickRemove(id)}>X</button>
          </div>
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
    let editPrority = editActive && (
      <label htmlFor="priority">
        <input
          name="priority"
          type="checkbox"
          id="priority"
          onChange={handleChangePrority}
          checked={checkInputValue}
        />
        priority
      </label>
    );
    let buttons = editActive
      ? [
          <div className="buttons">
            <button onClick={handleSaveChanges}>save</button>
            <button onClick={handleCancel}>cancel</button>
          </div>,
        ]
      : [
          <div className="buttons">
            <button onClick={props.clickDone.bind(this, id)}>Done</button>
            <button onClick={activeEditMode}>edit</button>
            <button onClick={() => props.clickRemove(id)}>X</button>
          </div>,
        ];
    return (
      <>
        <div className="task clearfix">
          <p>
            complete task to: <span className="taskDate">{date}</span>
          </p>
          <p className={priority ? "red taskName" : "taskName"}>{name}</p>
          {buttons}
          {editTxtInput}
          {editDateInput}
          {editPrority}
        </div>
      </>
    );
  }
};

export default Task;
