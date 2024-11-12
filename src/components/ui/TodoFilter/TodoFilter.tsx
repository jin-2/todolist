"use client";
import React, { useState } from "react";
import styled from "@emotion/styled";
import Button from "../Button/Button";

interface TodoFilterProps {}

const FILTERS = [
  { label: "All", value: "all" },
  { label: "To Do", value: "todo" },
  { label: "Done", value: "done" },
];

const TodoFilter = ({}: TodoFilterProps) => {
  const [filter, setFilter] = useState(FILTERS[0].value);

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
