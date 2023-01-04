import React from "react";
import styled from "styled-components";

const ButtonForAll = styled.button`
  width: 100px;
  background-color: ${(props) => props.color};
  text-align: center;
  margin-right: ${(props) => props.marginRight};
  cursor: pointer;
`;

export const Button = ({ onClick, color, text, marginRight }) => {
  return (
    <ButtonForAll color={color} marginRight={marginRight} onClick={onClick}>
      {text}
    </ButtonForAll>
  );
};
