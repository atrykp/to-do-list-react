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
  removeTask = (number, status) => {
    if (status) {
      const toDoTasks = [...this.state.toDoTasks];
      let index = toDoTasks.findIndex((elem) => number === elem.id);
      toDoTasks.splice(index, 1);
      this.setState({ toDoTasks });
    } else if (!status) {
      const doneTasks = [...this.state.doneTasks];
      let index = doneTasks.findIndex((elem) => number === elem.id);
      doneTasks.splice(index, 1);
      this.setState({ doneTasks });
    }
  };

  handleAddToDoneClick = (number) => {
    const toDoTasks = [...this.state.toDoTasks];
    let doneTasks = [...this.state.doneTasks];
    let index = toDoTasks.findIndex((elem) => number === elem.id);
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
  getDate() {
    let currentDate = new Date();
    this.currDate = currentDate.toLocaleDateString();
    // this.currDate = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getUTCDate()}`;
  }
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
    this.getDate();
  }
  sortArr(arr) {
    arr.sort((a, b) => new Date(b.date) - new Date(a.date)).reverse();
  }
  render() {
    const doTasksArr = [...this.state.toDoTasks];
    const doneTasksArr = [...this.state.doneTasks];
    this.sortArr(doTasksArr);
    this.sortArr(doneTasksArr);
    const toDoTasks = doTasksArr.map((task) => (
      <ToDo
        task={task}
        key={task.id}
        clickDone={this.handleAddToDoneClick}
        clickRemove={this.removeTask}
      />
    ));
    const doneTasks = doneTasksArr.map((task) => (
      <Done
        task={task}
        key={task.id}
        clickRemove={this.removeTask}
        date={this.currDate}
      />
    ));
    return (
      <>
        <AddTask
          change={this.handleChange}
          submit={this.handleAddTask}
          state={this.state}
        />
        <hr />
        <div className="toDoContainer">
          <h1>Do zrobienia</h1>
          {toDoTasks}
        </div>

        <hr />
        <div className="doneContainer">
          {" "}
          <h1>Zrobione</h1>
          {doneTasks}
        </div>
      </>
    );
  }
}
export default App;
