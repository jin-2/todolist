"use client";
import styled from "@emotion/styled";
import TodoItem from "../TodoItem/TodoItem";

interface TodoListProps {}

const TodoList = ({}: TodoListProps) => {
  return (
    <StyledTodoList>
      <p className="counting">총 3개</p>
      <ul>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
    </StyledTodoList>
  );
};

export default TodoList;

const StyledTodoList = styled.div`
  .counting {
    padding: 16px;
  }
`;
