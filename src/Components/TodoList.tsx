import React from "react";

import { IItems } from "../types/todo";
interface IProps {
  todos: IItems[];
  onDeleteTodo: (id: string) => void;
}
const TodoList: React.FC<IProps> = ({ todos, onDeleteTodo}) => {
  return (
    <div>
      <p>Todo list</p>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => { onDeleteTodo(todo.id)}}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
