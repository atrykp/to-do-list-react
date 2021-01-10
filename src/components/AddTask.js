import React, { Component, useState } from "react";
import "../style/AddTask.css";

const AddTask = (props) => {
  const [correct, setCorrect] = useState(true);
  const [id, setId] = useState(0);
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState(false);
  const [date, setDate] = useState("");
  const [active, setActive] = useState(true);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "taskName") setTaskName(value);
    if (name === "priority") setPriority(priority);
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
      active,
      doneDate: "",
    };
    props.addTask(task);
    setCorrect(true);
    setId((prevVal) => prevVal + 1);
    setTaskName("");
    setPriority(false);
    setDate(currDate);
  };
  let currDate = "";

  // const getDate=()=> {
  //   let currentDate = new Date().toISOString();
  //   let time = currentDate.slice(0, 10);
  //   currDate = time;
  // }

  // componentDidMount() {
  //   this.getDate();
  //   this.setState({
  //     date: this.currDate,
  //   });
  // }

  const alertName = !correct && !taskName && (
    <p>Wypełnij pole żeby dodać zadanie</p>
  );
  const alertDate = !correct && !date && <p>Podaj datę zadania</p>;

  return (
    <form className="addSection" action="" onSubmit={handleAddTask}>
      <input
        type="text"
        name="taskName"
        placeholder="dodaj zadanie"
        onChange={handleChange}
        value={taskName}
      />

      <label htmlFor="priority">
        <input
          name="priority"
          type="checkbox"
          id="priority"
          onChange={handleChange}
          checked={priority}
        />
        oznacz jako priorytet
      </label>
      {alertName}

      <br />

      <span>Do kiedy zrobić</span>
      <input type="date" name="date" onChange={handleChange} value={date} />
      {alertDate}
      <br />
      <button>Dodaj</button>
    </form>
  );
};
export default AddTask;
