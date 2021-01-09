import Task from "./Task";
import React from "react";

const TaskList = (props) => {
  // --------------------tutuaj coś źle---------------------------

  const { toDoArr, changeStatus, removeTask, doneArr, type } = props;

  if (type === "toDo") {
    const toDoTasks = toDoArr.map((task) => (
      <Task
        task={task}
        key={task.id}
        clickDone={changeStatus}
        clickRemove={removeTask}
        done={false}
      />
    ));
    return toDoTasks;
  }

  if (type === "done") {
    const doneTasks = doneArr.map((task) => (
      <Task task={task} key={task.id} clickRemove={removeTask} done={true} />
    ));
    return doneTasks;
  }
};
export default TaskList;
