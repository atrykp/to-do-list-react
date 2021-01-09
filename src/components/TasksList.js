import Task from "./Task";
import React from "react";

const TaskList = ({ toDoArr, doneArr }) => {
  // --------------------tutuaj coś źle---------------------------
  const toDoTasks = toDoArr.map((task) => (
    <Task
      task={task}
      key={task.id}
      clickDone={this.handleAddToDoneClick}
      clickRemove={this.removeTask}
      done={false}
    />
  ));
  console.log(toDoTasks);

  const doneTasks = doneArr.map((task) => (
    <Task task={task} key={task.id} clickRemove={this.removeTask} done={true} />
  ));

  return { toDoTasks };
};
export default TaskList;
