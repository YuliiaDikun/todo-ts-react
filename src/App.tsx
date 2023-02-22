import React from "react";
import TodoList from "./Components/TodoList";
import AddTodo from "./Components/AddTodo";
const App: React.FC = () => {
  const todos = [
    { id: '1', title: "test1" },
    { id: '2', title: "test2" },
    { id: '3', title: "test3" }
  ];
  return (
    <div>
      <TodoList todos={todos} />
      <AddTodo/>
    </div>
  );
};

export default App;
