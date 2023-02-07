import { useState } from "react";
import useFetch from "../composables/useFetch";
import DisplayTasks from "./DisplayTasks";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isdone] = useState(false);
  const [sucessful, setSucessful] = useState("");
  const { data } = useFetch(sucessful);

  const handleSubmit = (e) => {
    e.preventDefault();

    const addTask = { title, body, isdone };

    fetch("http://localhost:8000/tasks", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(addTask),
    }).then(() => {
      setSucessful("Tasks added sucessfully!");
      clearMessage();
    });
  };

  const clearMessage = () => {
    setBody("");
    setTitle("");
  };

  // const handleChange = () => {
  //   setIsDone(!isdone);
  // };

  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <p className="sucess">{sucessful}</p>
        <h1>Todo List</h1>
        <div className="input">
          <label>Enter Task</label>
          <input
            className={title ? " " : "form-error"}
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

      <DisplayTasks todos={data} />

      {/* <input type="checkbox" checked={isdone} onChange={handleChange} />
      <p>{isdone ? "checked" : "not checked"}</p> */}
    </div>
  );
};

export default AddTask;
