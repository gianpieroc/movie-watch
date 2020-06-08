import styled from "styled-components";

export const StreamingContainer = styled.div`
  ${({ theme }) => `
  background-color: ${theme.primaryColor};
  position: absolute;
  top: 0;
  bottom: 10px;
  left: 0;
  right: 0;
`}
`;
