"use client";
import styled from "@emotion/styled";
import IconV from "../Icons/IconV";

interface ButtonCheckProps {
  checked?: boolean;
  onClick?: () => void;
}

const ButtonCheck = ({ checked = false, onClick }: ButtonCheckProps) => {
  return (
    <StyledButtonCheck
      type="button"
      aria-label={checked ? "다시 할 일로 바꾸기" : "완료 상태로 바꾸기"}
      className={checked ? "checked" : ""}
      onClick={onClick}
    >
      <IconV />
    </StyledButtonCheck>
  );
};

export default ButtonCheck;

const StyledButtonCheck = styled.button`
  width: calc(32px + 8px);
  height: calc(32px + 8px);
  border-radius: 9999px;
  border: 1px solid #e5e5e5;
  animation: background-color 0.3s ease-in-out;

  > svg {
    display: none;
    filter: invert(1);
  }

  &.checked {
    background-color: #2182f3;
    border-color: #2182f3;

    > svg {
      display: inline-block;
    }
  }
`;
