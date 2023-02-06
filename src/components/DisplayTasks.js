const DisplayTasks = ({ todo }) => {
  return (
    <div>
      {todo.map((todo) => (
        <h1 key={todo.id}>{todo.title}</h1>
      ))}
      <h1>Hello kings </h1>
    </div>
  );
};

export default DisplayTasks;
