import React, { useState} from "react";
import { IItems } from "../types/todo";

type OnlyTitle = Pick<IItems, "title">
const AddTodo: React.FC = () => {
  
  const [todo, setTodo] = useState<Partial<OnlyTitle>>({})

  const titleHandle = (e:React.ChangeEvent<HTMLInputElement>) => { 
    setTodo({
      title: e.target.value
    })
  }
  const submitHandler = (e:React.FormEvent) => { 
    e.preventDefault();
    if (!todo.title) return 
    console.log(todo.title);
  }
  return (
    <form onSubmit={ submitHandler}>
      <div>
        <span>Add title</span>
        <input type="text" id="add-todo" onChange={titleHandle } />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
