import styled from "styled-components";

export const Nav = styled.nav`
  ${({ theme }) => `
  padding: 10px 20px;
  background: ${theme.primaryColor};
  color: ${theme.onPrimaryColor};
  height: 60px;
  display: flex;
  align-items:center;

  @media (max-width: ${theme.sizes.tablet}){
    height: 100px;
  }: 
`}
`;

export const NavTitle = styled.h1`
  ${({ theme }) => `
  font-size: ${theme.h2.fontSize}
  margin: 0;
  width: 100%;
  text-align:center;
  @media (max-width: ${theme.sizes.tablet}){
    font-size: ${theme.h1.fontSize}
  }: 
`}
`;
