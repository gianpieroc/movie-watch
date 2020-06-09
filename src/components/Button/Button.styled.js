import styled from "styled-components";

export const StyledButton = styled.button`
  ${({ theme }) => ` 
    background-color: ${theme.secondaryColor};
    color: ${theme.onSecondaryColor};
    border-width: 0;
    padding: 10px 20px;

    p{
      font-size: ${theme.h2.fontSize};
      margin: 0;

    }

  @media (max-width: ${theme.sizes.tablet}){
    min-height: 100px;
    min-width: 400px;

    p{
      font-size: ${theme.h1.fontSize};
    }
  }:
  `}
`;
