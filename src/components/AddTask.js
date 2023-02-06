import { useState, useEffect } from "react";
import DisplayTasks from "./DisplayTasks";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isdone, setIsDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log();

    const addTask = { title, body, isdone };

    fetch("http://localhost:8000/tasks", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(addTask),
    }).then(() => {
      setBody("");
      setTitle("");
    });
  };

  const handLoad = () => {
    console.log("reload");
  };

  const [todo, setTodo] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/tasks")
      .then((res) => res.json())
      .then((data) => {
        setTodo(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <div className="input">
          <label>Enter Task</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Task Description</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}></textarea>
        </div>
        <button onClick={() => handLoad()}>Add task</button>
      </form>
      <DisplayTasks todo={todo} />
    </div>
  );
};

export default AddTask;
