import Task from "./Task";
import React from "react";

const TaskList = ({
  toDoArr,
  changeStatus,
  removeTask,
  doneArr,
  type,
  saveChanges,
}) => {
  if (type === "toDo") {
    const toDoTasks = toDoArr.map((task) => (
      <Task
        task={task}
        key={task.id}
        clickDone={changeStatus}
        clickRemove={removeTask}
        saveChanges={saveChanges}
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
