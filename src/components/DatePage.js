import React from "react";
import { Link, Route } from "react-router-dom";
import Task from "./Task";

const DatePage = (props) => {
  let tasksArr = props.taskArr.props.toDoArr;
  console.log(props.removeTask);

  tasksArr = tasksArr.filter((elem) => elem.date === props.match.params.date);
  const list = tasksArr.map((elem) => (
    <Task
      task={elem}
      key={elem.id}
      clickDone={props.changeStatus}
      clickRemove={props.removeTask}
      done={false}
    />
  ));

  return (
    <div>
      <div className="datePage">
        <h1>
          {props.match.params.date}
          <Link to="/dateList">back to date list</Link>
        </h1>
        {list}
      </div>
    </div>
  );
};

export default DatePage;
