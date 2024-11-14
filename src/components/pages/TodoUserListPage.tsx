"use client";
import React from "react";
import styled from "@emotion/styled";
import TodoForm from "../ui/TodoForm/TodoForm";
import TodoFilter from "../ui/TodoFilter/TodoFilter";
import TodoList from "../ui/TodoList/TodoList";
import { useRecoilValue } from "recoil";
import { todoListState } from "../../recoil/todoState";

interface Props {}

const TodoUserListPage = ({}: Props) => {
  const todos = useRecoilValue(todoListState);

  return (
    <Container>
      <h1>To Do List</h1>
      <TodoForm />
      {todos.length ? (
        <StyledTodoContents>
          <TodoFilter />
          <TodoList />
        </StyledTodoContents>
      ) : null}
    </Container>
  );
};

export default TodoUserListPage;

const Container = styled.main`
  margin: 0 auto;
  padding: 128px 0 100px;
  max-width: 737px;

  h1 {
    text-align: center;
  }
`;

const StyledTodoContents = styled.div`
  margin-top: 32px;
  padding: 32px;
  border-radius: 24px;
  background-color: #fff;
  box-shadow: 0 16px 32px 0 #00000017;
`;
