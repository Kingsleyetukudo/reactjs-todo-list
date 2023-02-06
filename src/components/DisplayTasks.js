import { useState, useEffect } from "react";

const DisplayTasks = () => {
  const [todos, setTodo] = useState([]);
  const [error, setError] = useState("");
  const [sucessful, setSucessful] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    const singel = controller.signal;
    fetch("http://localhost:8000/tasks")
      .then((res) => res.json())
      .then((data) => {
        setTodo(data);
        setSucessful("Tasks load sucessfully");
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
        setError("data was not fetch...");
      });
    return () => {
      controller.abort();
    };
  }, []);

  const [task, setTask] = useState("kingsley");

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

    fetch(`http://localhost:8000/tasks/${todo.id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updateed),
    });
  };

  const testing = (item) => {
    console.log(item);
  };
  return (
    <div className="display-tasks">
      <p>{sucessful}</p>
      <p>{error}</p>
      {todos.map((todo) => (
        <div key={todo.id} className="content-holder">
          <input
            type="checkbox"
            checked={todo.isdone}
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
