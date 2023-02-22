import React from "react";

interface IItems {
  id: string;
  title: string;
}
interface IProps {
  todos: IItems[];
}
const TodoList: React.FC<IProps> = ({ todos }) => {
  return (
    <div>
      <p>Todo list</p>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;