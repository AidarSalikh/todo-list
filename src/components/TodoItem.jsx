import { FaTrashAlt, FaCheck } from "react-icons/fa";
// delete backgroundColor variable

export default function TodoItem({ todo, dispatch }) {
  const backgroundStyle = {
    backgroundColor: todo.complete ? "" : "",
  };
  const textStyle = { textDecoration: todo.complete ? "line-through" : "none" };
  const completeStyle = { opacity: todo.complete ? "1" : "0" };
  return (
    <div className="todo" style={backgroundStyle}>
      <span
        className="todoComplete"
        onClick={() => dispatch({ type: "completeTodo", id: todo.id })}
      >
        <FaCheck color="green" style={completeStyle} />
      </span>
      <span className="todoText" style={textStyle}>
        {todo.name}
      </span>
      <FaTrashAlt
        onClick={() => dispatch({ type: "deleteTodo", id: todo.id })}
        className="deleteButton"
        color="#413d3d"
        style={{ fontSize: "1.5rem" }}
      />

    </div>
  );
}
