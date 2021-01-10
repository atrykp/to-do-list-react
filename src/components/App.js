import React, { useState } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import AddTask from "./AddTask";
import TasksList from "./TasksList";
import "../style/App.css";

const findIndex = (arr, number) => {
  return arr.findIndex((elem) => number === elem.id);
};
const sortArr = (arr) => {
  arr.sort((a, b) => new Date(b.date) - new Date(a.date)).reverse();
};

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTaskToArr = (task) => {
    setTasks(tasks.concat(task));
  };

  const removeTask = (number) => {
    const toDoTasks = [...tasks];
    let index = findIndex(toDoTasks, number);
    toDoTasks.splice(index, 1);
    setTasks(toDoTasks);
  };

  const handleAddToDoneClick = (number) => {
    const toDoTasks = [...tasks];
    let index = findIndex(toDoTasks, number);
    let task = toDoTasks[index];

    task.active = !task.active;
    task.doneDate = new Date().getTime();
    setTasks(toDoTasks);
  };

  let doTasksArr = [...tasks];
  doTasksArr = doTasksArr.filter((task) => task.active);

  let doneTasksArr = [...tasks];
  doneTasksArr = doneTasksArr.filter((task) => !task.active);
  doneTasksArr.sort((a, b) => b.doneDate - a.doneDate);
  sortArr(doTasksArr);

  const toDoTasks =
    doTasksArr.length === 0 ? null : (
      <TasksList
        toDoArr={doTasksArr}
        changeStatus={handleAddToDoneClick}
        removeTask={removeTask}
        type={"toDo"}
      />
    );
  const doneTasks =
    doneTasksArr.length === 0 ? null : (
      <TasksList doneArr={doneTasksArr} removeTask={removeTask} type={"done"} />
    );

  return (
    <Router>
      <div className="mainContainer">
        <AddTask addTask={addTaskToArr} />
        <nav>
          <ul className="clearfix">
            <li>
              <NavLink exact to="/">
                Do zrobienia ({doTasksArr.length})
              </NavLink>
            </li>
            <li>
              <NavLink to="/zrobione">Zrobione ({doneTasksArr.length})</NavLink>
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
};
export default App;
