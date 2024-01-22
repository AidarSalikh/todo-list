import { FaTrashAlt, FaCheck } from "react-icons/fa";

export default function TodoItem({ todo, dispatch }) {
  const textStyle = { textDecoration: todo.complete ? "line-through" : "none" };
  const completeStyle = { opacity: todo.complete ? "1" : "0" };

  return (
    <div className="todo">
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
