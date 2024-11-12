import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoFilter from "./TodoFilter";

describe("<TodoFilter />", () => {
  beforeEach(() => {
    render(<TodoFilter />);
  });
  it("초기 상태가 'All' 버튼이 활성화된 상태로 렌더링된다.", () => {
    const allButton = screen.getByRole("button", { name: "All" });
    expect(allButton).toHaveClass("active");
  });

  it("버튼을 클릭하면 해당 버튼이 활성화 상태로 변경된다", () => {
    // All -> To Do
    const toDoButton = screen.getByRole("button", { name: "To Do" });
    fireEvent.click(toDoButton);
    expect(toDoButton).toHaveClass("active");
    expect(screen.getByRole("button", { name: "All" })).not.toHaveClass(
      "active",
    );

    // To Do -> Done
    const doneButton = screen.getByRole("button", { name: "Done" });
    fireEvent.click(doneButton);
    expect(doneButton).toHaveClass("active");
    expect(screen.getByRole("button", { name: "To Do" })).not.toHaveClass(
      "active",
    );

    // Done -> All
    const allButton = screen.getByRole("button", { name: "All" });
    fireEvent.click(allButton);
    expect(allButton).toHaveClass("active");
    expect(screen.getByRole("button", { name: "Done" })).not.toHaveClass(
      "active",
    );
  });
});
