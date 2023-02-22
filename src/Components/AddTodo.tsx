import React, { useRef } from "react";

const AddTodo: React.FC = () => {
  const titleInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (e:React.FormEvent) => { 
    e.preventDefault();
    console.log(titleInputRef.current?.value);
  }
  return (
    <form onSubmit={ submitHandler}>
      <div>
        <span>Add title</span>
        <input type="text" id="add-todo" ref={titleInputRef} />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
