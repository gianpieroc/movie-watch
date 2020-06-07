import styled from "styled-components";

export const Nav = styled.nav`
  ${({ theme }) => `
  padding: 10px 20px;
  background: ${theme.primaryColor};
  color: ${theme.onPrimaryColor};
  height: 60px;
  display: flex;
  align-items:center;
`}
`;

export const NavTitle = styled.h1`
  ${({ theme }) => `
  font-size: ${theme.h2.fontSize}
  margin: 0;
  text-align:center;
`}
`;
