import { useContext } from "react";
import TodoItem from "./TodoItem";
import DataContext from "../context/DataContext";
import catLight from "../assets/catLight.png";

export const TodoList = () => {
  const { todos, dispatch } = useContext(DataContext);

  const clearAllStyle = {
    visibility: todos.length ? "visible" : "hidden",
  };

  return (
    <div className="todoList">
      {!todos.length && (
        <>
          <p>Nothing to do</p>
          <img src={catLight} style={{ width: "200px" }} />
        </>
      )}
      {todos
        .filter((todo) => !todo.complete)
        .map((todo) => (
          <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
      <span style={{ marginTop: "3rem" }}></span>
      {todos
        .filter((todo) => todo.complete)
        .map((todo) => (
          <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
      <button
        style={clearAllStyle}
        className="clearButton"
        onClick={() => dispatch({ type: "clearAll" })}
      >
        Clear All
      </button>
    </div>
  );
};
