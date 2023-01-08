import React from "react";
import styled from "styled-components";

const ButtonForAll = styled.button`
  width: 100px;
  background-color: ${(props) => props.color};
  text-align: center;
  margin-right: ${(props) => props.marginRight};
  cursor: pointer;

  @media only screen and (max-width: 500px) {
    width: 50px;
  }
`;

export const Button = ({ onClick, color, text, marginRight }) => {
  return (
    <ButtonForAll color={color} marginRight={marginRight} onClick={onClick}>
      {text}
    </ButtonForAll>
  );
};
