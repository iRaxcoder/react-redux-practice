import React, { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis/todosApi";

export const TodoApp = () => {
  /*  const { data: todos = [], isLoading } = useGetTodosQuery(); */
  const [todoId, setTodoId] = useState(1);
  const { data: todos = [], isLoading } = useGetTodoQuery(todoId);

  const nextTodo = () => {
    if (todoId <= 200) setTodoId(todoId + 1);
  };

  const prevTodo = () => {
    if (todoId > 1) setTodoId(todoId - 1);
  };

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      {isLoading && <h4>isLoading...</h4>}
      <pre>{JSON.stringify(todos)}</pre>
      <button onClick={prevTodo}>Prev Todo</button>
      <button onClick={nextTodo}>Next Todo</button>
      <ul>
        {/*  {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.completed ? "Done" : "Pending"}|</strong>
            {todo.title}
          </li>
        ))} */}
      </ul>
    </>
  );
};
