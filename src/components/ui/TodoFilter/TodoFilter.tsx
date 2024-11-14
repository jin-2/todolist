"use client";
import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import Button from "../Button/Button";
import { todoFilterState } from "../../../recoil/todoState";

interface TodoFilterProps {}

const FILTERS = [
  { label: "All", value: "all" },
  { label: "To Do", value: "todo" },
  { label: "Done", value: "done" },
] as const;

const TodoFilter = ({}: TodoFilterProps) => {
  const [filter, setFilter] = useRecoilState(todoFilterState);

  return (
    <StyledTodoFilter role="radiogroup">
      {FILTERS.map(({ label, value }) => (
        <Button
          key={value}
          className={filter === value ? "active" : ""}
          onClick={() => setFilter(value)}
        >
          {label}
        </Button>
      ))}
    </StyledTodoFilter>
  );
};

export default TodoFilter;

const StyledTodoFilter = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 32px;
`;
