"use client";
import React from "react";
import styled from "@emotion/styled";
import ButtonCheck from "../ButtonCheck/ButtonCheck";
import ButtonRemove from "../ButtonRemove/ButtonRemove";

interface TodoItemProps {}

const TodoItem = ({}: TodoItemProps) => {
  return (
    <StyledTodoItem>
      <ButtonCheck checked={true} />
      <p className="todo-text">Do something</p>
      <ButtonRemove />
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
