import React from "react";
import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { todoListState, Todo } from "../../../recoil/todoState";
import TodoList from "./TodoList";

const initializeState = ({ set }: any, todos: Todo[]) => {
  set(todoListState, todos);
};

describe("<TodoList />", () => {
  const sampleTodos: Todo[] = [
    {
      id: 1,
      text: "주간회의 참여하기",
      completed: false,
      updatedDate: new Date(),
    },
    {
      id: 2,
      text: "Daily Scrum 작성하기",
      completed: true,
      updatedDate: new Date(),
    },
  ];

  beforeEach(() => {
    render(
      <RecoilRoot
        initializeState={(snapshot) => initializeState(snapshot, sampleTodos)}
      >
        <TodoList />
      </RecoilRoot>,
    );
  });

  it("필터링 된 할 일 개수를 확인한다.", () => {
    expect(screen.getByText(/총 2개/)).toBeInTheDocument();
  });

  it("필터링 된 할 일 목록을 확인한다.", () => {
    expect(screen.getByText("주간회의 참여하기")).toBeInTheDocument();
    expect(screen.getByText("Daily Scrum 작성하기")).toBeInTheDocument();
  });
});
