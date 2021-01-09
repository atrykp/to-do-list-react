import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import AddTask from "./AddTask";
import TasksList from "./TasksList";
import "../style/App.css";

class App extends Component {
  state = {
    tasks: [],
  };

  addTaskToArr = (task) => {
    this.setState({ tasks: this.state.tasks.concat(task) });
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
    console.log(doTasksArr);
    console.log(doneTasksArr);

    const toDoTasks =
      doTasksArr.length === 0 ? null : (
        <TasksList
          toDoArr={doTasksArr}
          changeStatus={this.handleAddToDoneClick}
          removeTask={this.removeTask}
          type={"toDo"}
        />
      );
    const doneTasks =
      doneTasksArr.length === 0 ? null : (
        <TasksList
          doneArr={doneTasksArr}
          removeTask={this.removeTask}
          type={"Done"}
        />
      );
    console.log(toDoTasks);

    return (
      <Router>
        <div className="mainContainer">
          <AddTask addTask={this.addTaskToArr} />
          <nav>
            <ul className="clearfix">
              <li>
                <NavLink exact to="/">
                  Do zrobienia ({doTasksArr.length})
                </NavLink>
              </li>
              <li>
                <NavLink to="/zrobione">
                  Zrobione ({doneTasksArr.length})
                </NavLink>
              </li>
            </ul>
          </nav>
          <hr />
          <Route path="/" exact>
            {toDoTasks}
          </Route>
          <Route path="/zrobione">{doneTasks}</Route>
        </div>
      </Router>
    );
  }
}
export default App;
