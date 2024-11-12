"use client";
import React from "react";
import styled from "@emotion/styled";
import TodoForm from "../ui/TodoForm/TodoForm";
import Button from "../ui/Button/Button";

interface Props {}

const TodoUserListPage = ({}: Props) => {
  return (
    <Container>
      <h1>To Do List</h1>
      <TodoForm />
      <Button className="active">All</Button>
      <Button>To Do</Button>
      <Button>Done</Button>
    </Container>
  );
};

export default TodoUserListPage;

const Container = styled.main`
  margin: 0 auto;
  padding: 128px 0 100px;
  max-width: 737px;
`;
