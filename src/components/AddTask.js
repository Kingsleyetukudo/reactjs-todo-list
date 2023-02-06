import { useState } from "react";

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

  const handleChange = () => {
    setIsDone(!isdone);
  };

  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <h1>Todo List</h1>
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
        <button>Add task</button>
      </form>

      <input type="checkbox" checked={isdone} onChange={handleChange} />
      <p>{isdone ? "checked" : "not checked"}</p>
    </div>
  );
};

export default AddTask;
