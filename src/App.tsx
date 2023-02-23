import React, { useState } from "react";
import TodoList from "./Components/TodoList";
import AddTodo from "./Components/AddTodo";
import InputSearch from "./Components/InputSearch";
import { IItems } from "./types/todo";

const App: React.FC = () => {
  const [todos, setTodos] = useState<IItems[]>([]);
  const [todoToUpdate, setTodoToUpdate] = useState<Partial<IItems>>({});
  const [searchValue, setSearchValue] = useState('');

  const todoAddHandler = (todo: IItems) => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: Math.random().toString(),
          isChecked: false,
          title: todo.title,
        },
      ];
    });
  };

  const todoDeleteHandler = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const todoCheckedHandler = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isChecked: !todo["isChecked"],
          };
        }
        return todo;
      });
    });
  };

  const todoUpdateHandler = (id: string) => {
    const todo = todos.find((todo) => todo.id === id) as IItems;    
    setTodoToUpdate(todo);
  };

  const updateTodos = (todo:IItems) => { 
    const index = todos.findIndex((item) => item.id === todo.id);    
    const newTodos = [...todos];
    newTodos[index] = todo;    
    setTodos(newTodos);
    setTodoToUpdate({});
  }

  const reorderArray = (
    event: { oldIndex: number; newIndex: number },
    originalArray: IItems[]
  ): IItems[] => {
    const movedItem = originalArray.find(
      (_, index) => index === event.oldIndex
    )!;
    const remainingItems = originalArray.filter(
      (_, index) => index !== event.oldIndex
    );
    const reorderedItems = [
      ...remainingItems.slice(0, event.newIndex),
      movedItem,
      ...remainingItems.slice(event.newIndex),
    ];
    return reorderedItems;
  };

  function changeOrder(index: number, direction: string): void {
    setTodos(
      reorderArray(
        { oldIndex: index, newIndex: index + (direction === "UP" ? -1 : 1) },
        todos
      )
    );
  }
  const todosToRender = todos.filter(todo => todo.title.includes(searchValue));
  return (
    <div>
      <AddTodo onAddTodo={todoAddHandler} />
      <InputSearch onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)} />
      <TodoList
        todos={todosToRender}
        onDeleteTodo={todoDeleteHandler}
        onCheckedTodos={todoCheckedHandler}
        onOrderChange={changeOrder}
        onUpdateTodo={todoUpdateHandler}
        todoToUpdate={todoToUpdate}
        updateTodos={ updateTodos}
      />
    </div>
  );
};

export default App;
