import React from "react";
import "../style/AddTask.css";

const AddTask = ({ change, state, submit }) => {
  return (
    <form className="addSection" action="" onSubmit={submit}>
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
          checked={state.priority}
        />
        oznacz jako priorytet
      </label>
      {!state.correct && !state.taskName && (
        <p>Wypełnij pole żeby dodać zadanie</p>
      )}

      <br />

      <span>Do kiedy zrobić</span>
      <input type="date" name="date" onChange={change} value={state.date} />
      {!state.correct && !state.date && <p>Podaj datę zadania</p>}
      <br />
      <button>Dodaj</button>
    </form>
  );
};

export default AddTask;