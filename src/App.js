import React, { Component } from "react";
import AddTask from "./AddTask";
import ToDo from "./ToDo";
import Done from "./Done";
import "./App.css";

class App extends Component {
  state = {
    correct: true,
    id: 0,
    taskName: "",
    priority: false,
    date: "",
  };
  toDoTasks = [];
  doneTasks = [];

  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "taskName") this.setState({ [name]: value });
    if (name === "priority") this.setState({ [name]: !this.state.priority });
    if (name === "date") this.setState({ [name]: value });
  };
  handleAddTask = (e) => {
    e.preventDefault();
    if (this.state.taskName.length < 1) {
      return this.setState({ correct: false });
    }
    const currState = this.state;
    const task = {
      id: currState.id,
      name: currState.taskName,
      date: currState.date,
      priority: currState.priority,
    };
    this.toDoTasks.push(task);
    this.setState({
      correct: true,
      id: this.state.id + 1,
      taskName: "",
      priority: false,
      date: this.currDate,
    });
    console.log(this.toDoTasks);
  };
  componentDidMount() {
    let currentDate = new Date();
    this.currDate = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getUTCDate()}`;
    this.setState({
      date: this.currDate,
    });
  }
  render() {
    const toDoTasks = this.toDoTasks.map((task) => (
      <ToDo task={task} key={task.id} />
    ));
    const doneTasks = this.doneTasks.map((task) => (
      <Done task={task} key={task.id} />
    ));
    return (
      <>
        <AddTask
          change={this.handleChange}
          submit={this.handleAddTask}
          state={this.state}
        />
        <hr />
        <h1>Do zrobienia</h1>
        {toDoTasks}
        <hr />
        <h1>Zrobione</h1>
        {toDoTasks}
      </>
    );
  }
}
export default App;
