import TodoForm from "./TodoForm";
import { TodoList } from "./TodoList";

export default function TodoMain() {
  return (
    <main className="mainTodo">
      <TodoForm />
      <TodoList />
    </main>
  );
}
