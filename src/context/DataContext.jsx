import { createContext, useReducer, useEffect } from "react";

const DataContext = createContext(null);

function reducer(todos, action) {
  switch (action.type) {
    case "addTodo":
      return [...todos, newTodo(action.name)];
    case "completeTodo":
      return todos.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case "deleteTodo":
      return todos.filter((todo) => todo.id !== action.id);
    case "clearAll":
      return [];
    default:
      return todos;
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

export function ContextProvider({ children }) {
  const [todos, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const values = {
    dispatch,
    todos,
  };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
}

export default DataContext;
