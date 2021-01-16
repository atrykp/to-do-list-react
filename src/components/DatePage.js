import React from "react";
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
      <h1>{props.match.params.date}</h1>
      {list}
    </div>
  );
};

export default DatePage;
