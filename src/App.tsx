import React, { useState} from "react";
import TodoList from "./Components/TodoList";
import AddTodo from "./Components/AddTodo";
import { IItems } from "./types/todo";

const App: React.FC = () => {
  const [todos, setTodos] = useState<IItems[]>([]);

  const todoAddHandler = (todo:IItems) => { 
    setTodos((prevTodos) => { 
      return [
        ...prevTodos, {
          id: Math.random().toString(),
          title: todo.title
        }
      ]   
    })
  }
  const todoDeleteHandler = (id:string) => { 
    setTodos((prevTodos) => { 
      return prevTodos.filter(todo => todo.id !== id);
    })
  }
  return (
    <div>
      <TodoList onDeleteTodo={todoDeleteHandler} todos={todos} />
      <AddTodo onAddTodo={todoAddHandler } />
    </div>
  );
};

export default App;
