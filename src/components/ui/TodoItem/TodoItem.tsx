"use client";
import React from "react";
import styled from "@emotion/styled";
import ButtonCheck from "../ButtonCheck/ButtonCheck";
import ButtonRemove from "../ButtonRemove/ButtonRemove";

interface TodoItemProps {}

const TodoItem = ({}: TodoItemProps) => {
  return (
    <li>
      <ButtonCheck checked={true} />
      <p>출근하고 비타민 먹기</p>
      <ButtonRemove />
    </li>
  );
};

export default TodoItem;

const StyledTodoItem = styled.div``;
