import { useCallback, useEffect, useState } from "react";
import Todo from "../Todo/Todo";
import TodoFilter from "../TodoFilter/TodoFilter";
import TodoForm from "../TodoForm";

const initTodos = () => {
  console.log("init 실행됨");
  return localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
};

const filters = ["all", "active", "complete"];

const getFilteredItems = (todos, filter) => {
  if (filter === "all") {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
};

const TodoList = () => {
  const [todos, setTodos] = useState(initTodos);
  const [filter, setFilter] = useState(filters[0]);

  useEffect(() => {
    console.log(todos, "✅ 실행!");
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onDelete = useCallback((todo) => {
    setTodos((todos) =>
      todos.filter((t) => t.id.toString() !== todo.id.toString())
    );
  }, []);

  const onUpdate = useCallback((todo) => {
    setTodos((todos) => todos.map((t) => (t.id === todo.id ? todo : t)));
  }, []);

  const onFilterChange = useCallback((filter) => {
    setFilter(filter);
  }, []);

  return (
    <div>
      <TodoFilter filters={filters} onFilterChange={onFilterChange} />
      <ul>
        {getFilteredItems(todos, filter).map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))}
      </ul>
      <TodoForm setTodos={setTodos} />
    </div>
  );
};

export default TodoList;
