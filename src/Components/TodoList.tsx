import React from "react";
import { IItems } from "../types/todo";
interface IProps {
  todos: IItems[];
  onDeleteTodo: (id: string) => void;
  onCheckedTodos: (id: string) => void;
  onOrderChange:(index:number, direction:string) => void
}
const TodoList: React.FC<IProps> = ({ todos, onDeleteTodo, onCheckedTodos, onOrderChange}) => {
  return (
    <div>
      <p>Todo list</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id} style={todo.isChecked ? { color: "red"} : {color: "black"}}>
            <button onClick={() => { onCheckedTodos(todo.id)}}>Checked</button>
            {todo.title}
            <div>
              <button onClick={() => { onOrderChange(index, "UP")}}>Up</button>
              <button onClick={() => { onOrderChange(index, "DOWN")}}>Down</button>
              <button onClick={() => { onDeleteTodo(todo.id)}}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
