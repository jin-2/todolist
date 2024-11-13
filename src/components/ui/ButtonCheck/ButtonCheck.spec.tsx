import { render, screen, fireEvent } from "@testing-library/react";
import ButtonCheck from "./ButtonCheck";

describe("<ButtonCheck />", () => {
  it("기본 렌더링 시 '완료 상태로 바꾸기' aria-label을 가진 버튼이 표시된다", () => {
    render(<ButtonCheck />);

    const button = screen.getByRole("button", { name: "완료 상태로 바꾸기" });
    expect(button).toBeInTheDocument();
    expect(button).not.toHaveClass("checked");
  });

  it("checked가 true일 때 '다시 할 일로 바꾸기' aria-label을 가진 버튼이 표시되고 아이콘이 나타난다", () => {
    render(<ButtonCheck checked={true} />);

    const button = screen.getByRole("button", { name: "다시 할 일로 바꾸기" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("checked");

    const iconV = button?.querySelector("svg");
    expect(iconV).toBeVisible();
  });

  it("버튼을 클릭하면 onClick 핸들러가 호출된다", () => {
    const onClickMock = jest.fn();
    render(<ButtonCheck onClick={onClickMock} />);

    const button = screen.getByRole("button", { name: "완료 상태로 바꾸기" });
    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
