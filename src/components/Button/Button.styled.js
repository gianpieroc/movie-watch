import styled from "styled-components";

export const StyledButton = styled.button`
  ${({ theme }) => ` 
    font-family: "Segoe UI";
    background-color: ${theme.secondaryColor};
    color: ${theme.onSecondaryColor};
    border-width: 0;
    padding: 10px 20px;
  `}
`;
