"use client";
import styled from "@emotion/styled";
import IconX from "../Icons/IconX";

interface ButtonRemoveProps {
  onClick?: () => void;
}

const ButtonRemove = ({ onClick }: ButtonRemoveProps) => {
  return (
    <StyledButtonRemove
      type="button"
      aria-label="할 일 지우기"
      onClick={onClick}
    >
      <IconX />
    </StyledButtonRemove>
  );
};

export default ButtonRemove;

const StyledButtonRemove = styled.button`
  width: 40px;
  height: 40px;
  color: #b9b9b9;
`;
