import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Prompt,
} from "react-router-dom";
import AddTask from "./AddTask";
import TasksList from "./TasksList";
import "../style/App.css";
import ErrorPage from "./ErrorPage";
import DateList from "./DateList";
import DatePage from "./DatePage";

const findIndex = (arr, number) => {
  return arr.findIndex((elem) => number === elem.id);
};
const sortArr = (arr) => {
  arr.sort((a, b) => new Date(b.date) - new Date(a.date)).reverse();
};

const App = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasksArr")) || []
  );
  const [popup, setPopup] = useState(false);

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
  useEffect(() => {
    localStorage.setItem("tasksArr", JSON.stringify(tasks));
  }, [tasks]);
  // -------------------------------------------------------------
  const saveChanges = (name, date, priority, id) => {
    let editArr = [...tasks];
    const index = editArr.findIndex((elem) => elem.id === id);
    const element = editArr[index];
    if (name) element.name = name;
    element.date = date;
    element.priority = priority;
    setTasks(editArr);
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
        saveChanges={saveChanges}
        type={"toDo"}
      />
    );
  const doneTasks =
    doneTasksArr.length === 0 ? null : (
      <TasksList doneArr={doneTasksArr} removeTask={removeTask} type={"done"} />
    );
  const removeStorage = () => {
    localStorage.removeItem("tasksArr");
    setTasks([]);
    setPopup(false);
  };
  const removePopup = popup && (
    <div className="removePopup">
      <p className="rmvPopupTxt">Are you sure? All tasks will be deleted</p>
      <button onClick={removeStorage}>Yes</button>
      <button onClick={() => setPopup(false)}>No</button>
    </div>
  );

  return (
    <Router>
      <div className="mainContainer">
        {removePopup}
        <button className="resetStorageBtn" onClick={() => setPopup(true)}>
          Clear All
        </button>
        <AddTask addTask={addTaskToArr} />

        <nav>
          <ul className="clearfix">
            <li>
              <NavLink exact to="/">
                To do ({doTasksArr.length})
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/dateList">
                Date list
              </NavLink>
            </li>
            <li>
              <NavLink to="/done">Done ({doneTasksArr.length})</NavLink>
            </li>
          </ul>
        </nav>

        <hr />
        <Switch>
          <Route path="/" exact>
            {toDoTasks}
          </Route>
          <Route path="/done">{doneTasks}</Route>

          <Route path="/dateList">{<DateList tasks={doTasksArr} />}</Route>
          <Route
            path="/date/:date"
            render={(props) => (
              <DatePage
                {...props}
                taskArr={toDoTasks}
                saveChanges={saveChanges}
                removeTask={removeTask}
                changeStatus={handleAddToDoneClick}
              />
            )}
          />

          <Route component={ErrorPage} />
        </Switch>
      </div>
    </Router>
  );
};
export default App;
