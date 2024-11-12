"use client";
import { FormEvent, useRef } from "react";
import styled from "@emotion/styled";

interface TodoFormProps {}

const TodoForm = ({}: TodoFormProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputRef.current?.value);
  };

  const handleClickInputWrapper = () => {
    inputRef.current?.focus();
  };

  return (
    <StyledTodoForm onClick={handleClickInputWrapper}>
      <form onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="todo-text">
          할 일을 입력해주세요.
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
