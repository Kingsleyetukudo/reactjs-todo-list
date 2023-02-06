import { useState, useEffect } from "react";

const DisplayTasks = () => {
  const [todos, setTodo] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/tasks")
      .then((res) => res.json())
      .then((data) => {
        setTodo(data);
        console.log(data);
      });
  }, []);

  const [todoTask, setTodoTask] = useState();
  const handleChange = (todo) => {
    setTodoTask(todo);
    const isdone = {
      id: todoTask.id,
      title: todoTask.title,
      body: todoTask.body,
      isdone: todoTask.isdone,
    };
    console.log(isdone);
    fetch(`http://localhost:8000/tasks/${todo.id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(isdone),
    });
  };

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} onClick={() => handleChange(todo)}>
          <h1>{todo.title}</h1>
          <p>{todo.body}</p>
          <input
            type="checkbox"
            checked={todo.isdone}
            onChange={() => setTodoTask(!todo.isdone)}
          />
        </div>
      ))}

      {/* <p>{todo.isdone ? "checked" : "not checked"}</p> */}
      <h1>Hello kings </h1>
    </div>
  );
};

export default DisplayTasks;
