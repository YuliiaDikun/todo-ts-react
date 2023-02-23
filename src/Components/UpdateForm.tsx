import React, { useState } from "react";
import { IItems } from "../types/todo";
interface IProps {
  todoToUpdate: Partial<IItems>;
  updateTodos: (todo: IItems) => void;
}
const UpdateForm: React.FC<IProps> = ({ todoToUpdate, updateTodos }) => {
  const [todo, setTodo] = useState(todoToUpdate);
  const titleHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({
        ...todoToUpdate,
      title: e.target.value,
    });
  };
  const updateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateTodos(todo as IItems);
  };
  return (
    <form onSubmit={updateSubmit}>
      <input type="text" name="title" onChange={titleHandle} value={todo.title}/>
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateForm;
