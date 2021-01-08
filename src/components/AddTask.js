import React, { Component } from "react";
import "../style/AddTask.css";

class AddTask extends Component {
  state = {
    correct: true,
    id: 0,
    taskName: "",
    priority: false,
    date: "",
    active: true,
    doneDate: "",
  };
  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "taskName") this.setState({ [name]: value });
    if (name === "priority") this.setState({ [name]: !this.state.priority });
    if (name === "date") this.setState({ [name]: value });
  };
  handleAddTask = (e) => {
    e.preventDefault();
    if (!this.state.taskName || !this.state.date) {
      return this.setState({ correct: false });
    }
    const currState = this.state;
    const task = {
      id: currState.id,
      name: currState.taskName,
      date: currState.date,
      priority: currState.priority,
      active: currState.active,
      doneDate: currState.doneDate,
    };
  };

  handleAddTask = (e) => {
    e.preventDefault();
    if (!this.state.taskName || !this.state.date) {
      return this.setState({ correct: false });
    }

    const task = {
      id: currState.id,
      name: currState.taskName,
      date: currState.date,
      priority: currState.priority,
      active: currState.active,
      doneDate: currState.doneDate,
    };
    this.props.addTask(task);

    this.setState({
      correct: true,
      id: this.state.id + 1,
      taskName: "",
      priority: false,
      date: this.currDate,
      doneDate: "",
    });
  };

  render() {
    return (
      <form className="addSection" action="" onSubmit={submit}>
        <input
          type="text"
          name="taskName"
          placeholder="dodaj zadanie"
          onChange={change}
          value={state.taskName}
        />

        <label htmlFor="priority">
          <input
            name="priority"
            type="checkbox"
            id="priority"
            onChange={change}
            checked={state.priority}
          />
          oznacz jako priorytet
        </label>
        {!state.correct && !state.taskName && (
          <p>Wypełnij pole żeby dodać zadanie</p>
        )}

        <br />

        <span>Do kiedy zrobić</span>
        <input type="date" name="date" onChange={change} value={state.date} />
        {!state.correct && !state.date && <p>Podaj datę zadania</p>}
        <br />
        <button>Dodaj</button>
      </form>
    );
  }
}
export default AddTask;
