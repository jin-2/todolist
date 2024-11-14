import React from "react";
import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { todoListState, Todo } from "../../../recoil/todoState";
import TodoList from "./TodoList";

const initializeState = ({ set }: any, todos: Todo[]) => {
  set(todoListState, todos);
};

const today = new Date();
const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);

describe("<TodoList />", () => {
  const sampleTodos: Todo[] = [
    {
      id: 1,
      text: "주간회의 참여하기",
      completed: false,
      updatedDate: yesterday,
    },
    {
      id: 2,
      text: "Daily Scrum 작성하기",
      completed: true,
      updatedDate: today,
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

  it("할 일 목록이 최신 순으로 정렬되어 있는지 확인한다.", () => {
    const listItems = screen.getAllByRole("listitem");
    expect(listItems[0]).toHaveTextContent("Daily Scrum 작성하기");
    expect(listItems[1]).toHaveTextContent("주간회의 참여하기");
  });
});
