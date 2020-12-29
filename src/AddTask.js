import React from "react";
import "./AddTask.css";

const AddTask = () => {
  return (
    <form className="addSection" action="">
      <input type="text" name="taskName" placeholder="dodaj zadanie" />
      <label htmlFor="priority">
        <input type="checkbox" id="priority" />
        oznacz jako priorytet
      </label>

      <span>Do kiedy zrobić</span>
      <input type="date" />
      <button>Dodaj</button>
    </form>
  );
};

export default AddTask;
