import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RecoilRoot } from "recoil";
import TodoForm from "./TodoForm";
import { todoListState } from "../../../recoil/todoState";
import { RecoilObserver } from "../../../recoil/utils/recoilObserver";

describe("<TodoForm />", () => {
  let input: HTMLInputElement;
  let container: HTMLDivElement;

  beforeEach(() => {
    render(
      <RecoilRoot>
        <TodoForm />
      </RecoilRoot>,
    );
    input = screen.getByPlaceholderText("할 일을 입력해 주세요");
    container = screen.getByTestId("todo-form");
  });

  it("정상적으로 노출되는지 확인한다.", () => {
    render(
      <RecoilRoot>
        <TodoForm />
      </RecoilRoot>,
    );
  });

  it("회색박스를 클릭하면 input이 포커스를 받는다.", () => {
    container.click();

    expect(document.activeElement).toBe(input);
  });

  it("input에 최대 글자수는 20자 이다. ", async () => {
    const user = userEvent.setup();
    await user.type(input, "123456789012345678901");

    expect(input.value.length).toBe(20);
  });
});

describe("TodoForm with Recoil", () => {
  let input: HTMLInputElement;
  let form: HTMLFormElement;
  let onChange = jest.fn();

  beforeEach(() => {
    render(
      <RecoilRoot>
        <RecoilObserver node={todoListState} onChange={onChange} />
        <TodoForm />
      </RecoilRoot>,
    );

    input = screen.getByPlaceholderText("할 일을 입력해 주세요");
    form = document.querySelector("form")!;
  });

  it("할 일를 추가하고 업데이트된 할 일 정보를 확인한다.", () => {
    fireEvent.change(input, { target: { value: "산책하기" } });
    fireEvent.submit(form);

    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChange).toHaveBeenCalledWith([]); // Initial state on render.
    expect(onChange.mock.calls[1][0][0].text).toEqual("산책하기"); // New value on change.
  });
});
