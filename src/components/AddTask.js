import React, { useEffect, useRef, useState } from "react";
import "../style/AddTask.css";

let currDate = "";

const AddTask = (props) => {
  const [correct, setCorrect] = useState(true);
  const [id, setId] = useState(Math.floor(Math.random() * 1234567));
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState(false);
  const [date, setDate] = useState("");

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "taskName") setTaskName(value);
    if (name === "priority") setPriority((prevVal) => !prevVal);
    if (name === "date") setDate(value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!taskName || !date) {
      return setCorrect(false);
    }

    const task = {
      id,
      name: taskName,
      date,
      priority,
      active: true,
      doneDate: "",
    };
    props.addTask(task);
    setCorrect(true);
    setId((prevVal) => prevVal + 1);
    setTaskName("");
    setPriority(false);
    setDate(currDate);
    focusOnInput();
  };

  const getDate = () => {
    let currentDate = new Date().toISOString();
    let time = currentDate.slice(0, 10);
    currDate = time;
  };
  const nameInput = useRef();
  const focusOnInput = () => nameInput.current.focus();
  useEffect(() => {
    getDate();
    setDate(currDate);
    focusOnInput();
  }, []);

  const alertName = !correct && !taskName && <p>Enter the name of the task</p>;
  const alertDate = !correct && !date && <p>Set the date</p>;

  return (
    <form className="addSection" action="" onSubmit={handleAddTask}>
      <input
        className="taskNameInput"
        type="text"
        name="taskName"
        placeholder="task name"
        onChange={handleChange}
        value={taskName}
        ref={nameInput}
      />
      {alertName}

      <label htmlFor="priority">
        <input
          name="priority"
          type="checkbox"
          id="priority"
          onChange={handleChange}
          checked={priority}
        />
        priority
      </label>

      <br />

      <span>By when to complete the task</span>
      <input type="date" name="date" onChange={handleChange} value={date} />
      {alertDate}
      <br />
      <button>Add task</button>
    </form>
  );
};
export default AddTask;
