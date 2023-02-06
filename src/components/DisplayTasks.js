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

  // const handleCheck = (e) => {
  //   setTodoTask(todoTask.isdone);
  //   console.log(e.target.checked);
  // };

  // const [todoTask, setTodoTask] = useState();
  // const handleChange = (todo) => {
  //   setTodoTask(todo);
  //   const isdone = {
  //     id: todoTask.id,
  //     title: todoTask.title,
  //     body: todoTask.body,
  //     isdone: (todoTask.isdone = true),
  //   };
  //   console.log(isdone);
  //   fetch(`http://localhost:8000/tasks/${todo.id}`, {
  //     method: "PUT",
  //     headers: { "content-type": "application/json" },
  //     body: JSON.stringify(isdone),
  //   });
  // };

  return (
    <div className="display-tasks">
      {todos.map((todo) => (
        <div key={todo.id} className="content-holder">
          <input type="checkbox" checked={todo.isdone} />
          <div className="content">
            <h3>{todo.title}</h3>
            <p>{todo.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayTasks;
