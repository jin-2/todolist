"use client";
import React from "react";
import styled from "@emotion/styled";
import ButtonCheck from "../ButtonCheck/ButtonCheck";
import ButtonRemove from "../ButtonRemove/ButtonRemove";
import { Todo } from "../../../recoil/todoState";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <StyledTodoItem>
      <ButtonCheck checked={todo.completed} />
      <p className="todo-text">{todo.text}</p>
      <ButtonRemove
        onClick={() => {
          console.log("delete");
        }}
      />
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
