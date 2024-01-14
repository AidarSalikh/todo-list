import { useContext, useRef, useState } from "react";
import DataContext from "../context/DataContext";

export default function TodoForm() {
  const [text, setText] = useState("");
  const { dispatch } = useContext(DataContext);

  const inputRef = useRef();

  function focusInput() {
    inputRef.current.focus();
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!text) return;
    dispatch({ type: "addTodo", name: text });
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add Task"
      />
      <button type="submit" onClick={focusInput} className="submitButton">
        add
      </button>
    </form>
  );
}
