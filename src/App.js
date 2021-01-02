import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import AddTask from "./AddTask";
import Task from "./Task";
import "./App.css";

class App extends Component {
  state = {
    tasks: [],
    correct: true,
    id: 0,
    taskName: "",
    priority: false,
    date: "",
    active: true,
    doneDate: "",
  };
  findIndex(arr, number) {
    return arr.findIndex((elem) => number === elem.id);
  }
  removeTask = (number) => {
    const toDoTasks = [...this.state.tasks];
    let index = this.findIndex(toDoTasks, number);
    toDoTasks.splice(index, 1);
    this.setState({ tasks: toDoTasks });
  };

  handleAddToDoneClick = (number) => {
    const toDoTasks = [...this.state.tasks];
    let index = this.findIndex(toDoTasks, number);
    let task = toDoTasks[index];

    task.active = !task.active;
    task.doneDate = new Date().getTime();
    this.setState({
      tasks: toDoTasks,
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
    let currentDate = new Date().toISOString();
    let time = currentDate.slice(0, 10);
    this.currDate = time;
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
      active: currState.active,
      doneDate: currState.doneDate,
    };

    this.setState({
      tasks: this.state.tasks.concat(task),
      correct: true,
      id: this.state.id + 1,
      taskName: "",
      priority: false,
      date: this.currDate,
      doneDate: "",
    });
  };
  componentDidMount() {
    this.getDate();
    this.setState({
      date: this.currDate,
    });
  }
  sortArr(arr) {
    arr.sort((a, b) => new Date(b.date) - new Date(a.date)).reverse();
  }
  render() {
    let doTasksArr = [...this.state.tasks];
    doTasksArr = doTasksArr.filter((task) => task.active);

    let doneTasksArr = [...this.state.tasks];
    doneTasksArr = doneTasksArr.filter((task) => !task.active);
    doneTasksArr.sort((a, b) => b.doneDate - a.doneDate);
    this.sortArr(doTasksArr);

    const toDoTasks = doTasksArr.map((task) => (
      <Task
        task={task}
        key={task.id}
        clickDone={this.handleAddToDoneClick}
        clickRemove={this.removeTask}
        done={false}
      />
    ));
    const doneTasks = doneTasksArr.map((task) => (
      <Task
        task={task}
        key={task.id}
        clickRemove={this.removeTask}
        done={true}
      />
    ));
    return (
      <Router>
        <div className="mainContainer">
          <AddTask
            change={this.handleChange}
            submit={this.handleAddTask}
            state={this.state}
          />
          <ul>
            <li>
              <NavLink exact to="/">
                Do zrobienia({doTasksArr.length})
              </NavLink>
            </li>
            <li>
              <NavLink to="/zrobione">Zrobione({doneTasksArr.length})</NavLink>
            </li>
          </ul>
          <hr />
          <Route path="/" exact>
            {toDoTasks}
          </Route>
          <Route path="/zrobione">{doneTasks}</Route>
          {/* <div className="toDoContainer">
          <h1>Do zrobienia ({doTasksArr.length})</h1>
          {toDoTasks}
        </div>

        <hr />
        <div className="doneContainer">
          {" "}
          <h1>Zrobione ({doneTasksArr.length})</h1>
          {doneTasks}
        </div> */}
        </div>
      </Router>
    );
  }
}
export default App;
