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

  const [list, setList] = useState([
    {
      id: 3,
      title: "testing put ahaon ",
      body: "hajks jjshs hdkihsd",
      isdone: false,
    },
    {
      id: 4,
      title: "testing put ahaon ",
      body: "hajks jjshs hdkihsd",
      isdone: true,
    },
    {
      title: "update is working",
      body: "Check why the data is not click on first click",
      isdone: false,
      id: 5,
    },
    {
      title: "trying for list",
      body: "hahajjah working",
      isdone: false,
      id: 6,
    },
  ]);

  const handleCheck = () => {
    console.log(!todoTask.isdone, todoTask.id);
    const updateed = {
      id: todoTask.id,
      title: todoTask.title,
      body: todoTask.body,
      isdone: !todoTask.isdone,
    };

    console.log(updateed);

    fetch(`http://localhost:8000/tasks/${todoTask.id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updateed),
    });
  };

  const [todoTask, setTodoTask] = useState();
  const handleChange = (todo) => {
    setTodoTask(todo);
    // {
    //   ...todoTask,
    //   id: todo.id,
    //   title: todo.title,
    //   body: todo.body,
    //   isdone: true,
    // }
    todo ? "" : todo;
    console.log(todoTask);
  };

  const testing = (item) => {
    console.log(item);
  };
  return (
    <div className="display-tasks">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="content-holder"
          onClick={() => handleChange(todo)}>
          <input type="checkbox" checked={todo.isdone} onChange={handleCheck} />
          <div className="content">
            <h3>{todo.title}</h3>
            <p>{todo.body}</p>
          </div>
        </div>
      ))}

      {list.map((item) => (
        <p key={item.id} onClick={() => testing(item)}>
          {item.title}
        </p>
      ))}
    </div>
  );
};

export default DisplayTasks;
