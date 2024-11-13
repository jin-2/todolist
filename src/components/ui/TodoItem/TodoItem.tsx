"use client";
import React from "react";
import styled from "@emotion/styled";
import Close from "../../../assets/icons/close.svg";
import ButtonCheck from "../ButtonCheck/ButtonCheck";

interface TodoItemProps {}

const TodoItem = ({}: TodoItemProps) => {
  return (
    <li>
      <ButtonCheck checked={true} />
      <p>출근하고 비타민 먹기</p>
      <button type="button" aria-label="할 일 지우기">
        <Close />
      </button>
    </li>
  );
};

export default TodoItem;

const StyledTodoItem = styled.div``;
