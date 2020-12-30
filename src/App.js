import React, { Component } from "react";
import AddTask from "./AddTask";
import ToDo from "./ToDo";
import Done from "./Done";
import "./App.css";

class App extends Component {
  state = {
    toDoTasks: [],
    doneTasks: [],
    correct: true,
    id: 0,
    taskName: "",
    priority: false,
    date: "",
  };

  handleAddToDoneClick = (e) => {
    const toDoTasks = [...this.state.toDoTasks];
    let doneTasks = [...this.state.doneTasks];
    let index = toDoTasks.findIndex(
      (elem) => parseInt(elem.id) === e.target.id
    );
    let task = toDoTasks.splice(index, 1);

    doneTasks = doneTasks.concat(task);
    this.setState({
      toDoTasks,
      doneTasks,
    });
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

    this.setState({
      toDoTasks: this.state.toDoTasks.concat(task),
      correct: true,
      id: this.state.id + 1,
      taskName: "",
      priority: false,
      date: this.currDate,
    });
  };
  componentDidMount() {
    let currentDate = new Date();
    this.currDate = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getUTCDate()}`;
    this.setState({
      date: this.currDate,
    });
  }
  render() {
    console.log(this.state.toDoTasks);

    const doTasksArr = [...this.state.toDoTasks];
    const doneTasksArr = [...this.state.doneTasks];
    const toDoTasks = doTasksArr.map((task) => (
      <ToDo task={task} key={task.id} clickDone={this.handleAddToDoneClick} />
    ));
    const doneTasks = doneTasksArr.map((task) => (
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
        {doneTasks}
      </>
    );
  }
}
export default App;
