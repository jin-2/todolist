import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import TodoItem from "./TodoItem";
import { todoListState, Todo } from "../../../recoil/todoState";
import {
  getRemoveTodos,
  getUpdateTodos,
} from "../../../utils/todoItem/todoItem";

const initializeState = ({ set }: any, todos: Todo[]) => {
  set(todoListState, todos);
};

describe("<TodoItem />", () => {
  const sampleTodo: Todo = {
    id: 1,
    text: "숙제하기",
    completed: false,
    updatedDate: new Date(),
  };

  beforeEach(() => {
    render(
      <RecoilRoot
        initializeState={(snapshot) => initializeState(snapshot, [sampleTodo])}
      >
        <ul>
          <TodoItem todo={sampleTodo} />
        </ul>
      </RecoilRoot>,
    );
  });

  it("할 일 텍스트를 확인한다.", () => {
    expect(screen.getByText("숙제하기")).toBeInTheDocument();
  });
});

const today = new Date();
const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);

describe("TodoItem Utility Functions", () => {
  const sampleTodos: Todo[] = [
    {
      id: 1,
      text: "여행 계획 짜기",
      completed: false,
      updatedDate: yesterday,
    },
    { id: 2, text: "서점 가기", completed: true, updatedDate: new Date() },
  ];

  it("getUpdateTodos는 주어진 todo의 completed 상태를 반대로 변경한다.", () => {
    const updatedTodos = getUpdateTodos(sampleTodos, 1);
    expect(updatedTodos[0].completed).toBe(true);
    expect(updatedTodos[1].completed).toBe(true);
  });

  it("getRemoveTodos는 주어진 todo를 리스트에서 제거한다.", () => {
    const updatedTodos = getRemoveTodos(sampleTodos, 1);
    expect(updatedTodos.length).toBe(1);
    expect(updatedTodos.find((todo) => todo.id === 1)).toBeUndefined();
  });
});
