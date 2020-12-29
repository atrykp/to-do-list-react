import React from "react";
import "./AddTask.css";

const AddTask = ({ change, state }) => {
  return (
    <form className="addSection" action="">
      <input
        type="text"
        name="taskName"
        placeholder="dodaj zadanie"
        onChange={change}
        value={state.taskName}
      />
      <label htmlFor="priority">
        <input
          name="priority"
          type="checkbox"
          id="priority"
          onChange={change}
          checked={state.prority}
        />
        oznacz jako priorytet
      </label>

      <span>Do kiedy zrobić</span>
      <input type="date" name="date" onChange={change} value={state.date} />
      <button>Dodaj</button>
    </form>
  );
};

export default AddTask;
