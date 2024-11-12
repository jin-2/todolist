import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("<Button />", () => {
  it("정상적으로 렌더링되는지 확인한다.", () => {
    render(<Button>Done</Button>);
    const button = screen.getByRole("button", {
      name: "Done",
    });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Done");
  });

  it("active 클래스가 추가되면 스타일이 변경된다.", () => {
    render(<Button className="active">Done</Button>);
    const button = screen.getByRole("button", {
      name: "Done",
    });
    expect(button).toHaveClass("active");
    expect(button).toHaveStyle("background-color: #ebf4ff");
    expect(button).toHaveStyle("color: #2182f3");
  });
});
