import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
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
  const removeStorage = () => {
    localStorage.removeItem("tasksArr");
    setTasks([]);
  };

  return (
    <Router>
      <div className="mainContainer">
        <button className="resetStorageBtn" onClick={removeStorage}>
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
                {/* number of diffrent days------------- */}
                Date
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
