"use client";
import React from "react";
import styled from "@emotion/styled";

interface ButtonProps {
  className?: string;
  children: string;
  onClick?: () => void;
}

const Button = ({ className, children, onClick }: ButtonProps) => {
  return (
    <StyledButton type="button" className={className} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  width: 108px;
  height: 40px;
  border-radius: 12px;
  color: #454545;
  font-size: 16px;
  font-weight: 600;

  &.active {
    background-color: #ebf4ff;
    color: #2182f3;
  }
`;
