import React from "react";

const ToDo = (props) => {
  const { name, date, priority } = props.task;
  console.log(name);

  return (
    <>
      <div className="task">
        <p className={priority ? "red" : ""}>
          {name} zrobić do: {date}
        </p>
        <button>Zrobione</button>
        <button>X</button>
      </div>
    </>
  );
};

export default ToDo;
