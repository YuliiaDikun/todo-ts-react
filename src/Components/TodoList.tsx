import React from "react";
import { IItems } from "../types/todo";
import UpdateForm from "./UpdateForm";
interface IProps {
  todos: IItems[];
  todoToUpdate: Partial<IItems>,
  updateTodos: (todo:IItems) => void,
  onDeleteTodo: (id: string) => void;
  onCheckedTodos: (id: string) => void;
  onUpdateTodo: (id: string) => void;
  onOrderChange: (index: number, direction: string) => void;
  
}
const TodoList: React.FC<IProps> = ({ todos,todoToUpdate, onDeleteTodo, onCheckedTodos,onUpdateTodo,updateTodos, onOrderChange}) => {
  return (
    <div>
      <p>Todo list</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id} style={todo.isChecked ? { color: "red"} : {color: "black"}}>
            <button onClick={() => { onCheckedTodos(todo.id)}}>Checked</button>
            {todo.title}
            <div>
              <button disabled={index === 0? true: false } onClick={() => { onOrderChange(index, "UP")}}>Up</button>
              <button disabled={index === todos.length - 1? true: false } onClick={() => { onOrderChange(index, "DOWN")}}>Down</button>
              <button onClick={() => { onDeleteTodo(todo.id) }}>Remove</button>
              <button onClick={() => { onUpdateTodo(todo.id) }}>Update</button>
              {todoToUpdate && todoToUpdate.id === todo.id && <UpdateForm updateTodos={updateTodos} todoToUpdate={todoToUpdate} />}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
