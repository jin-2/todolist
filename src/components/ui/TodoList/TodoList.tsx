"use client";
import styled from "@emotion/styled";
import TodoItem from "../TodoItem/TodoItem";
import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "../../../recoil/todoState";

interface TodoListProps {}

const TodoList = ({}: TodoListProps) => {
  const filteredTodos = useRecoilValue(filteredTodoListState);

  return (
    <StyledTodoList>
      <p className="counting">총 {filteredTodos.length}개</p>
      <ul>
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
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
