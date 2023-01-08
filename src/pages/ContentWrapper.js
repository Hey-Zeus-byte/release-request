import styled from "styled-components";

export const ContentWrapper = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 0 100px;

  // laptops
  @media only screen and (max-width: 1250px) {
    padding: 0 45px;
  }

  // tablets
  @media only screen and (max-width: 768px) {
    padding: 0 25px;
  }

  // mobile devices such as iphones
  @media only screen and (max-width: 500px) {
    padding: 0 15px;
  }
`;
