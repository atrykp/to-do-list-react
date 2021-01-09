import Task from "./Task";
import React from "react";

const TaskList = (props) => {
  // --------------------tutuaj coś źle---------------------------

  const { toDoArr, changeStatus, removeTask, doneArr, type } = props;

  const toDoTasks = toDoArr.map((task) => (
    <Task
      task={task}
      key={task.id}
      clickDone={changeStatus}
      clickRemove={removeTask}
      done={false}
    />
  ));
  console.log(toDoTasks);

  if (type === "done") {
    const doneTasks = doneArr.map((task) => (
      <Task
        task={task}
        key={task.id}
        clickRemove={this.removeTask}
        done={true}
      />
    ));
  }

  return toDoTasks;
};
export default TaskList;
