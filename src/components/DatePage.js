import React from "react";
import { Link } from "react-router-dom";
import Task from "./Task";

const DatePage = (props) => {
  if (!props.taskArr) {
    return (
      <>
        <h2>There is nothing here</h2>
        <Link to="/">back to the home page</Link>
      </>
    );
  }

  let tasksArr = props.taskArr.props.toDoArr;

  tasksArr = tasksArr.filter((elem) => elem.date === props.match.params.date);

  const list = tasksArr.map((elem) => (
    <Task
      task={elem}
      key={elem.id + Math.floor(Math.random() * 745392)}
      clickDone={props.changeStatus}
      clickRemove={props.removeTask}
      saveChanges={props.saveChanges}
      done={false}
    />
  ));

  return (
    <div>
      <div className="datePage ">
        <div className="titleDataPage clearfix">
          <Link to="/dateList">back to date list</Link>
          <h1>{props.match.params.date}</h1>
        </div>

        {list}
      </div>
    </div>
  );
};

export default DatePage;
