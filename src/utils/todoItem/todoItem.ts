import { Todo } from "../../recoil/todoState";

export const getUpdateTodos = (todos: Todo[], todoId: Todo["id"]) => {
  return todos.map((prevTodo) => {
    if (prevTodo.id === todoId) {
      return {
        ...prevTodo,
        completed: !prevTodo.completed,
      };
    }
    return prevTodo;
  });
};

export const getRemoveTodos = (todos: Todo[], todoId: Todo["id"]) => {
  return todos.filter((prevTodo) => prevTodo.id !== todoId);
};
