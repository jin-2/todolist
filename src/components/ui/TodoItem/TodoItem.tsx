"use client";
import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import ButtonCheck from "../ButtonCheck/ButtonCheck";
import ButtonRemove from "../ButtonRemove/ButtonRemove";
import { Todo, todoListState } from "../../../recoil/todoState";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const [, setTodos] = useRecoilState(todoListState);

  const toggleTodo = () => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === todo.id
          ? {
              ...prevTodo,
              completed: !prevTodo.completed,
              updatedDate: new Date(),
            }
          : prevTodo,
      ),
    );
  };

  const removeTodo = () => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== todo.id));
  };

  return (
    <StyledTodoItem>
      <ButtonCheck checked={todo.completed} onClick={toggleTodo} />
      <p className="todo-text">{todo.text}</p>
      <ButtonRemove onClick={removeTodo} />
    </StyledTodoItem>
  );
};

export default TodoItem;

const StyledTodoItem = styled.li`
  display: flex;
  align-items: center;
  padding-top: calc(32px - 4px);
  padding-bottom: calc(32px - 4px);
  padding-left: calc(16px - 4px);

  .todo-text {
    flex: 1;
    margin-left: calc(16px - 4px);
  }
`;
