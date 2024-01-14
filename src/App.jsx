import "./App.css";
import TodoMain from "./components/TodoMain";
import { ContextProvider } from "./context/DataContext";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <TodoMain />
      </ContextProvider>
    </div>
  );
}

export default App;
