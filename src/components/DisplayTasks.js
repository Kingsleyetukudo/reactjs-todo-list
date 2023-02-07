import { useState } from "react";
import useFetch from "../composables/useFetch";

const DisplayTasks = ({ todos }) => {
  // const [error, setError] = useState("");
  const [sucessful, setSucessful] = useState("");
  const [task, setTask] = useState();
  const { data } = useFetch(task);

  const handleCheck = (todo) => {
    // console.log(!todoTask.isdone, todoTask.id);
    const updateed = {
      id: todo.id,
      title: todo.title,
      body: todo.body,
      isdone: !todo.isdone,
    };

    setTask(updateed);

    console.log(updateed);

    setSucessful("Tasks completed sucessfully!");

    fetch(`http://localhost:8000/tasks/${todo.id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updateed),
    }).then(() => {
      setSucessful("");
    });
  };

  const testing = (item) => {
    console.log(item);
    setSucessful("");
  };
  return (
    <div className="display-tasks">
      <p>{sucessful}</p>
      {/* <p>{error}</p> */}
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={todo.isdone ? "task-complete" : "content-holder"}>
          <input
            type="checkbox"
            checked={todo.isdone}
            className={todo.isdone ? "checked" : ""}
            onChange={() => handleCheck(todo)}
          />
          <div className="content">
            <h3>{todo.title}</h3>
            <p>{todo.body}</p>
          </div>
        </div>
      ))}

      {/* {list.map((item) => (
        <p key={item.id} onClick={() => testing(item)}>
          {item.title}
        </p>
      ))} */}
    </div>
  );
};

export default DisplayTasks;
