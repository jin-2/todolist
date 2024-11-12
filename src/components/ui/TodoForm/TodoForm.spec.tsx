import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoForm from "./TodoForm";

describe("<TodoForm />", () => {
  let input: HTMLInputElement;
  let container: HTMLDivElement;

  beforeEach(() => {
    render(<TodoForm />);
    input = screen.getByPlaceholderText(
      "할 일을 입력해 주세요",
    ) as HTMLInputElement;
    container = screen.getByTestId("todo-form");
  });

  it("정상적으로 노출되는지 확인한다.", () => {
    render(<TodoForm />);
  });

  it("할 일을 입력하고 enter(submit) 누르면 input data를 확인한다.", () => {
    const consoleSpy = jest.spyOn(console, "log");

    fireEvent.change(input, { target: { value: "do test" } });

    const form = container.querySelector("form");
    fireEvent.submit(form!);

    expect(consoleSpy).toHaveBeenCalledWith("do test");
    consoleSpy.mockRestore();
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
