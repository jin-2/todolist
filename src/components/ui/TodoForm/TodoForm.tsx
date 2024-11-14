"use client";
import { FormEvent, useRef } from "react";
import styled from "@emotion/styled";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { todoListState } from "../../../recoil/todoState";
import { validateTodo } from "../../../utils/todoForm/validation";

interface TodoFormProps {}

const TodoForm = ({}: TodoFormProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const todos = useRecoilValue(todoListState);
  const setTodos = useSetRecoilState(todoListState);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!inputRef.current) return;

    const value = inputRef.current.value.trim() || "";
    if (value === "") return;

    const validationError = validateTodo(inputRef.current.value, todos);
    if (validationError) {
      alert(validationError);
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: value,
      completed: false,
      updatedDate: new Date(),
    };

    setTodos((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const handleClickInputWrapper = () => {
    inputRef.current?.focus();
  };

  return (
    <StyledTodoForm onClick={handleClickInputWrapper} data-testid="todo-form">
      <form onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="todo-text">
          할 일을 입력해 주세요.
        </label>
        <input
          ref={inputRef}
          id="todo-text"
          placeholder="할 일을 입력해 주세요"
          maxLength={20}
        />
      </form>
    </StyledTodoForm>
  );
};

export default TodoForm;

const StyledTodoForm = styled.div`
  margin-top: 64px;
  padding: 32px;
  height: 92px;
  background-color: #e5e5e5;
  border-radius: 24px;

  input {
    width: 100%;
    height: 28px;
    border: none;
    outline: none;
    background-color: transparent;
  }
`;
