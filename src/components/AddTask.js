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
  getDate() {
    let currentDate = new Date().toISOString();
    let time = currentDate.slice(0, 10);
    this.currDate = time;
  }

  componentDidMount() {
    this.getDate();
    this.setState({
      date: this.currDate,
    });
  }

  render() {
    return (
      <form className="addSection" action="" onSubmit={this.handleAddTask}>
        <input
          type="text"
          name="taskName"
          placeholder="dodaj zadanie"
          onChange={this.handleChange}
          value={this.state.taskName}
        />

        <label htmlFor="priority">
          <input
            name="priority"
            type="checkbox"
            id="priority"
            onChange={this.handleChange}
            checked={this.state.priority}
          />
          oznacz jako priorytet
        </label>
        {!this.state.correct && !this.state.taskName && (
          <p>Wypełnij pole żeby dodać zadanie</p>
        )}

        <br />

        <span>Do kiedy zrobić</span>
        <input
          type="date"
          name="date"
          onChange={this.handleChange}
          value={this.state.date}
        />
        {!this.state.correct && !this.state.date && <p>Podaj datę zadania</p>}
        <br />
        <button>Dodaj</button>
      </form>
    );
  }
}
export default AddTask;
