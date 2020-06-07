import styled from "styled-components";

export const CardContainer = styled.div``;

export const CardImage = styled.img`
  ${({ theme }) => `
  width: 200px;
  color: ${theme.onPrimaryColor};
  font-size: ${theme.h3.fontSize};
  margin: 0 3px;
  border-radius: 3px;
  border-color: transparent;
  border-width: 3px;
  border-style: solid;
  
  :hover {
    border-color: ${theme.secondaryColor};
    border-width: 3px;
  }
`}
`;
