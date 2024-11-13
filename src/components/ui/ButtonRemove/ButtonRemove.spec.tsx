import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ButtonRemove from "./ButtonRemove";

describe("<ButtonRemove />", () => {
  it("컴포넌트가 렌더링되고 aria-label이 '할 일 지우기'로 되어있는지 확인한다", () => {
    render(<ButtonRemove />);

    const button = screen.getByRole("button", { name: "할 일 지우기" });
    expect(button).toBeInTheDocument();
  });

  it("버튼 클릭 시 onClick 핸들러가 호출되는지 확인한다", () => {
    const onClickMock = jest.fn();
    render(<ButtonRemove onClick={onClickMock} />);

    const button = screen.getByRole("button", { name: "할 일 지우기" });
    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
